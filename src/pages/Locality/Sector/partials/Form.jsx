import { CheckboxItems } from "@/components/FormComponents/Checkbox";
import { Input } from "@/components/FormComponents/Input";
import Helper from "@/helper";

const { generateAlphabets } = Helper;

export default function SectorForm() {

  return (
    <div className="space-y-4">
      <div className="grid lg:grid-cols-2 gap-3">
        <Input name="name" label="Name" placeholder="Enter sector name" />

        <Input
          name="initials"
          label="Initials"
          placeholder="Enter sector initials"
        />

      </div>

      <div className="w-full grid lg:grid-cols-4 gap-3 gap-y-5">
        <CheckboxItems name="blocks" options={generateAlphabets} />
      </div>
    </div>
  );
}
