import { useEffect } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/FormComponents/Input";
import { Button } from "@/components/ui/button";
import { Password } from "@/components/FormComponents/Password";
import Helper from "@/helper";

const {http, api} = Helper;

export default function Login() {
  const method = useForm(),
  { handleSubmit, reset } = method, navigate = useNavigate();


  useEffect(() => {
    reset({email: "", password: ""})
  }, [reset])

  const submit = (payload) => {
    http.get(`${api}/sanctum/csrf-cookie`)
      .then(() => {
        http.post(`${api}/login`, payload).then(() => navigate("/dashboard"));
      }).catch((err) => toast.error(err.message));
  };

  return (
    <div className="sm:max-w-sm bg-white shadow-sm dark:bg-default  overflow-hidden sm:rounded-lg w-full mt-6 px-6 py-4">
      <h4 className="text-xl font-semibold mb-5 text-center text-slate-300">Staff Login</h4>

      <Form {...method}>
        <form
          className="space-y-5 flex flex-col"
          onSubmit={handleSubmit(submit)}
        >
          <Input
            name="email"
            className=""
            label="Email"
            placeholder="Email address"
          />
          <Password
            name="password"
            // className="input"
            type="password"
            label="Password"
            placeholder="Enter your password"
          />

          <Button className="text-white w-4/5 mx-auto" variant="success" type="submit">Login</Button>
        </form>
      </Form>
    </div>
  );
}
