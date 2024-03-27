import { Controller, useFormContext } from "react-hook-form";
import PhoneInput from "react-phone-number-input/input";
import { TypographyXs } from "./Typography";




export default function PhoneNumberInput({
  name,
  label = "",
  className,
  placeholder = "",
  disabled = false,
}) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, ...field }, fieldState: { error } }) => (
        <div>
          <label
            className={`!text-xs font-medium ${
              error ? "text-danger" : "text-slate-400"
            } mb-1 inline-block`}
          >
            {label}
          </label>
          <PhoneInput
            country="GH"
            className={`pl-3 rounded-md ${
              error ? "bg-red-100 dark:border-danger border-danger error text-danger" : ""
            } ${className}`}
            placeholder={placeholder}
            disabled={disabled}
            value={value ?? ""}
            {...field}
          />

          <TypographyXs className="text-xs text-danger">
            {error?.message}
          </TypographyXs>
        </div>
      )}
    />
  );
}