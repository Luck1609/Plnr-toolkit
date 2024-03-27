import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Fragment } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { TypographyXs } from "./Typography";

export function SelectField({ name, options, label }) {
  const { control } = useFormContext();

  // const onChange = (data) =>
  //   setValue(name, data, {
  //     // shouldDirty: true,
  //     // shouldTouch: true,
  //     shouldValidate: true,
  //   });

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value = "" }, fieldState: { error } }) => (
        <div>
          <label className={`mb-1 text-xs ${error ? "text-danger" : "text-slate-400"}`}>
            {label}
          </label>
          <Select onValueChange={onChange} value={value}>
            <SelectTrigger
              className={`${
                error
                  ? "error bg-red-100 border-danger text-danger"
                  : "bg-slate-100 dark:!bg-input dark:!border-input text-color dark:text-slate-200"
              }`}
            >
              <SelectValue placeholder={label} className="" />
            </SelectTrigger>
            <SelectContent className="bg-slate-100 dark:!bg-input max-h-72">
              {options?.map(({ label: labelProp, value }) => (
                <Fragment key={value}>
                  <SelectItem
                    value={value}
                    className="cursor-pointer !hover:bg-active-hover"
                  >
                    {labelProp}
                  </SelectItem>
                </Fragment>
              ))}
            </SelectContent>
          </Select>

          <TypographyXs className="text-danger">{error?.message}</TypographyXs>
        </div>
      )}
    />
  );
}
