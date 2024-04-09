import { useEffect, useMemo } from "react";
import { useFormContext } from "react-hook-form";
import useSWR from "swr";
import { Input } from "@/components/FormComponents/Input";
import PhoneNumberInput from "@/components/PhoneNumberInput";
import { SelectField } from "@/components/SelectField";
import Helper from "@/helper";

const { isJsonString } = Helper,
  areas = { localities: [], sectors: {} };

export default function ApplicantInfo() {
  const { data } = useSWR("/locality"), {watch, reset} = useFormContext(), locality = watch("locality_id"), sector = watch("sector_id");

  const { localities, sectors } = useMemo(() => {
    return data?.data
      ? data.data.reduce(
          (allLocalities, { name, id, sectors }) => {
            return {
              ...allLocalities,
              localities: [
                ...allLocalities.localities,
                {
                  label: name,
                  value: id,
                },
              ],
              sectors: {
                ...allLocalities.sectors,
                [id]: {
                  ...sectors.reduce((allSectors, { id: sectorID, name, blocks }) => {
                    return {
                      ...allSectors,
                      [sectorID]: {
                        value: sectorID,
                        label: name,
                        blocks: blocks ? isJsonString(blocks).reduce((allBlocks, block) => ([...allBlocks, {label: block, value: block}]), []) : [],
                      },
                    };
                  }, []),
                },
              },
            };
          },
          areas
        )
      : areas;
  }, [data?.data]);

useEffect(() => {
  reset({
    ...watch(),
    sector_id: null,
    block: null
  })
}, [locality, reset, watch])

useEffect(() => {
  reset({
    ...watch(),
    block: null
  })
}, [sector, reset, watch])


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

      <div className="grid lg:grid-cols-2 gap-3">
        <SelectField
          name="title"
          label="Select title"
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

      <div className="grid lg:grid-cols-2 gap-3">
        <SelectField
          name="locality_id"
          label="Select locality"
          options={localities}
        />

        <SelectField
          name="sector_id"
          label="Select sector"
          options={locality ? Object.values(sectors?.[locality]) : []}
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-3">
        <SelectField
          name="block"
          label="Select block"
          options={
            sector && locality ? sectors?.[locality]?.[sector]?.blocks : []
          }
        />

        <Input
          name="plot"
          label="Plot no."
          placeholder="Type in the plot no."
        />
      </div>
    </div>
  );
}
