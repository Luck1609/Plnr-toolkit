import { useNavigate } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SelectField } from "@/components/SelectField";
import PhoneNumberInput from "@/components/PhoneNumberInput";
import { Input } from "@/components/FormComponents/Input";
import { Button } from "@/components/ui/button";
import useAPI from "@/hooks/useAPI";
import { Password } from "@/components/FormComponents/Password";
import { officerValidation } from "./validations";

export default function Register() {
  const method = useForm({ mode: "all", resolver: yupResolver(officerValidation) }),
    { handleSubmit, watch, formState: {isDirty, isValid, errors} } = method, navigate = useNavigate(), {makeRequest} = useAPI();


  const submit = (payload) => {
    makeRequest({
      url: "/register-officer",
      method: "post",
      payload: {
        ...payload,
        role: "Planning Officer"
      },
      action: () => navigate("/login")
    })};

    console.log("Watching officer registration form", watch(), errors)

  return (
    <div className="sm:max-w-2xl dark:bg-default shadow-md overflow-hidden sm:rounded-lg w-full mt-6 p-6">
      <h4 className="text-xl font-semibold mb-5 text-center text-slate-300">
        Officer Registration
      </h4>

      <FormProvider {...method}>
        <form
          className="grid lg:grid-cols-2 gap-5 gap-y-4"
          onSubmit={handleSubmit(submit)}
        >
          <Input
            name="firstname"
            className=""
            placeholder="Type in your firstname"
            label="First name"
          />
          <Input
            name="lastname"
            className=""
            placeholder="Type in your lastname"
            label="Last name"
          />

          <SelectField
            name="title"
            label="Title"
            options={[
              { label: "Dr.", value: "Dr." },
              { label: "Eng.", value: "Eng." },
              { label: "Mr.", value: "Mr." },
              { label: "Mrs.", value: "Mrs." },
              { label: "Ms", value: "Ms" },
            ]}
          />

          <Input
            name="email"
            className=""
            placeholder="Type in your email address"
            label="Email"
          />

          <Password
            name="password"
            type="password"
            className=""
            placeholder="Enter your password"
            label="Enter your password"
          />
          <Password
            name="password_confirmation"
            type="password"
            className=""
            placeholder="Enter your password"
            label="Enter your password"
          />

          <PhoneNumberInput
            name="contact"
            label="Phone No."
            placeholder="Enter your phone number"
            className="w-full rounded p-2"
          />

          <Button
            className="text-white w-3/5 mx-auto lg:col-span-2"
            variant="success"
            type="submit"
            disabled={!isDirty || !isValid}
          >
            Register
          </Button>
        </form>
      </FormProvider>
    </div>
  );
}
