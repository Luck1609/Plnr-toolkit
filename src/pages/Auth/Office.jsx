import { useMemo } from "react";
import useSWR from "swr";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { SelectField } from "@/components/SelectField";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/FormComponents/Input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import useAPI from "@/hooks/useAPI";
import { officeValidation } from "./validations";


export default function Office() {
  const method = useForm({ mode: "all", resolver: yupResolver(officeValidation) }),
    { handleSubmit, watch } = method,
    navigate = useNavigate(),
    { makeRequest } = useAPI(),
    { data } = useSWR("/region"),
    selectedRegion = watch("region");

  const submit = (payload) => {
    console.log("Payload submitted", payload)
    makeRequest({
      url: "/register-office",
      method: "post",
      payload,
      action: () => navigate("/officer"),
    });
  };

  const regions = useMemo(() => {
    if (data) {
      let { data: regionsCollection } = data;
      return regionsCollection.reduce(
        (allRegions, { name, id, towns }) => [
          ...allRegions,
          {
            label: name,
            value: id,
            towns: towns.reduce(
              (allTowns, town) => [
                ...allTowns,
                {
                  label: town.name,
                  value: town.id,
                },
              ],
              []
            ),
          },
        ],
        []
      );
    }
  }, [data]);

  const districts = useMemo(
    () => regions?.filter(({ value }) => value === selectedRegion)?.[0]?.towns,
    [selectedRegion, regions]
  );

  console.log("Available regions", watch());

  return (
    <div className="sm:max-w-2xl bg-white dark:bg-default shadow-md overflow-hidden sm:rounded-lg w-full mt-6 p-6">
      <h4 className="text-xl font-semibold mb-5 text-center text-slate-300">
        Office Registration
      </h4>
      <Form {...method}>
        <form
          className="grid lg:grid-cols-2 gap-5 gap-y-4"
          onSubmit={handleSubmit(submit)}
        >
          <Input
            name="name"
            className=""
            placeholder="Type in your district name"
            label="District name"
          />

          <SelectField
            name="region"
            label="Select region"
            options={regions ?? []}
          />

          <SelectField
            name="district"
            label="Select district"
            options={districts ?? []}
          />

          <Input
            name="initials"
            className=""
            placeholder="Type in your district initials"
            label="Initials"
          />

          <Input
            name="shelves"
            type="number"
            className=""
            placeholder="Number of shelves in the office"
            label="No. of shelves"
          />

          <Button
            className="text-white w-3/5 mx-auto lg:col-span-2"
            variant="success"
          >
            Register
          </Button>
        </form>
      </Form>
    </div>
  );
}
