import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Controller, useFormContext } from "react-hook-form";
import { TypographyXs } from "./Typography";

export function SelectField({ name, options, label }) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value = "" }, fieldState: { error } }) => (
        <div>
          <label
            className={`mb-1 inline-block text-xs font-medium ${
              error ? "text-danger" : "text-slate-400"
            }`}
          >
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
              {options?.map(({ label: labelProp, value }, index) => (
                <SelectItem
                  key={`${value}_${index}`}
                  className="cursor-pointer !hover:bg-active-hover"
                  value={value}
                >
                  {labelProp}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <TypographyXs className="text-danger">{error?.message}</TypographyXs>
        </div>
      )}
    />
  );
}
