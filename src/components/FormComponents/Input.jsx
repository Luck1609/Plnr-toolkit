import { Controller, useFormContext } from "react-hook-form";
import propTypes from "prop-types";
// import { debounce } from "lodash";
import { cn } from "@/lib/utils";
import { TypographyXs } from "../Typography";
// import {
//   FormField,
//   FormLabel,
// } from "@/components/ui/form";

const  Input = ({
  className = "",
  type = "text",
  label = "",
  name,
  containerClass,
  ...props
}) => {
  const { control  } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: {onBlur, onChange, value}, fieldState: {error} }) => (
        <div className={`${containerClass}`}>
          <label className={`!text-xs font-medium ${error ? "text-danger" : "text-slate-400"} mb-1 inline-block`}>{label}</label>
          <input
            type={type}
            placeholder={props?.placeholder}
            // {...register(name)}
            onBlur={onBlur}
            onChange={onChange}
            value={value ?? ""}
            className={cn(
              "flex  w-full rounded-md disabled:opacity-50",
              error ? "bg-red-100 dark:border-danger border-danger error": '',
              className
            )}
          />
          <TypographyXs className="text-danger">{error?.message}</TypographyXs>
        </div>
      )}
    />
  );
};

Input.displayName = "Input";

export { Input };

Input.propTypes = {
  className: propTypes.string,
  containerClass: propTypes.string,
  type: propTypes.string,
  label: propTypes.string,
  name: propTypes.string.isRequired,
};
