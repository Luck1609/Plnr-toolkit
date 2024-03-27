import { Input } from '@/components/FormComponents/Input'

export default function LocalityForm() {

  return (
    <div className="space-y-4">
      <div className="grid lg:grid-cols-2 gap-3">
        <Input
          name="name"
          label="Name"
          placeholder="Enter locality name"
        />

        <Input
          name="initials"
          label="Initials"
          placeholder="Enter locality initials"
        />
      </div>

    </div>
  );
}
