import useSWR from 'swr'
import { Input } from '@/components/FormComponents/Input'
import PhoneNumberInput from '@/components/PhoneNumberInput'
import { SelectField } from '@/components/SelectField'
import Helper from '@/helper'
import { useMemo } from 'react'


const { isJsonString } = Helper;

export default function CommitteeForm() {
  const { data } = useSWR("/settings/committee_roles");

  const committeeRoles = useMemo(() => {
    if (data?.data) {
      return isJsonString(data.data.options).reduce((roles, role) => ([...roles, { label: role, value: role }]), [])
    }
    else return []
  }, [data?.data])

  
  return (
    <div className="space-y-4">
      <div className="grid lg:grid-cols-2 gap-3">
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

      <div className="grid grid-cols-2 gap-3">
        <SelectField name="role" label="Role" options={committeeRoles} />

        <SelectField
          name="panel"
          label="Select Member's panel"
          options={[
            {
              label: "SPC",
              value: "SPC",
            },
            {
              label: "TSC",
              value: "TSC",
            },
          ]}
        />
      </div>


      <div className="grid lg:grid-cols-2 gap-3">
        <SelectField
          name="title"
          label="Select Member's title"
          options={[
            {
              label: "Dr.",
              value: "Dr.",
            },
            {
              label: "Eng.",
              value: "Eng.",
            },
            {
              label: "Mr.",
              value: "Mr.",
            },
            {
              label: "Mrs",
              value: "Mrs.",
            },
            {
              label: "Ms",
              value: "Ms.",
            },
          ]}
        />
        

        <PhoneNumberInput
          name="contact"
          label="Phone no."
          className="w-full"
          placeholder="Enter your phone number"
        />
      </div>

      <Input
        name="designation"
        label="Designation"
        placeholder="Enter your officer's designation"
      />
    </div>
  );
}
