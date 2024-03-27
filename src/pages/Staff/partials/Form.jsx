import { Input } from "@/components/FormComponents/Input";
// import { Input } from "@/components/ui/input";
import { SelectField } from "@/components/SelectField";
import PhoneNumberInput from "@/components/PhoneNumberInput";


export function UserForm() {

  return (
    <div className="space-y-5">
      <div className="grid lg:grid-cols-2 gap-x-3">
        <Input
          name="firstname"
          label="Firstname"
          placeholder="Enter your firstname"
        />

        <Input
          name="lastname"
          label="Lastname"
          placeholder="Enter your lastname"
        />
      </div>

      <Input name="email" label="Email" placeholder="Enter your email" />

      <PhoneNumberInput
        name="contact"
        label="Phone no."
        className="w-full"
        placeholder="Enter your phone number"
      />

      <div className="grid lg:grid-cols-2 gap-3">
        <SelectField
          name="title"
          options={[
            { label: "Dr.", value: "Dr." },
            { label: "Eng.", value: "Eng." },
            { label: "Mr.", value: "Mr." },
            { label: "Mrs.", value: "Mrs." },
            { label: "Ms", value: "Ms" },
          ]}
          label="Title"
        />

        <SelectField
          name="role"
          options={[
            {
              label: "Assistant Planning Officer",
              value: "Assistant Planning Officer",
            },
            {
              label: "Technical Officer",
              value: "Technical Officer",
            },
            {
              label: "Secretary",
              value: "Secretary",
            },
          ]}
          label="Role"
        />
      </div>
    </div>
  );
}
