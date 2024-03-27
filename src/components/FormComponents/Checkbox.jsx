import { Controller, useFormContext } from "react-hook-form";
import propTypes from "prop-types";
import { cn } from "@/lib/utils";
import { Checkbox } from "../ui/checkbox";
import { TypographyXs } from "../Typography";

const CheckboxItems = ({ errorFieldClassName = "", options = [], name }) => {
  // const { control, watch } = useFormContext();
  const { control, watch, setValue, trigger } = useFormContext(), checked = watch(name);

  // console.log("Checked items", checked)

  const handleCheck = (value) => () => {
    const items = checked.indexOf(value) === -1 ? [...checked, value] : checked.filter(label => label !== value);

    setValue(name, items, {shouldValidate: true});
    trigger(name)
  }

  return (
    <Controller
      control={control}
      name={name}
      render={({
        // field: { onChange },
        fieldState: { error },
      }) => (
        <>
          {options.map(({ label, value }) => (
            <div
              className="flex items-center space-x-2 cursor-pointer"
              key={value.split(" ").join("-")}
            >
              <Checkbox
                id={value}
                checked={checked.includes(value)}
                onCheckedChange={handleCheck(value)}
              />
              <label htmlFor={value}>{label}</label>
            </div>
          ))}

          <TypographyXs className={cn("text-danger", errorFieldClassName)}>
            {error?.message}
          </TypographyXs>
        </>
      )}
    />
  );
};

CheckboxItems.displayName = "CheckboxItems";

export { CheckboxItems };

CheckboxItems.propTypes = {
  errorFieldClassName: propTypes.string,
  name: propTypes.string.isRequired,
  options: propTypes.array,
};
