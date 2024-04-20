import { Controller, useFormContext } from "react-hook-form";
import propTypes from "prop-types";
import { Switch } from "../ui/switch";
import { cn } from "@/lib/utils";


  const Label = ({ label }) => (
    <label className="text-color inline-block dark:text-slate-300">
      {label}
    </label>
  )

const SwitchComponent = ({ className, label = "", name, position = "end" }) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <div className={cn("flex items-center space-x-2", className)}>
          {position === "start" && <Label className="align-middle" label={label} />}
          <Switch
            checked={value}
            onCheckedChange={onChange}
            className="dark:data-[state=checked]:bg-slate-500 dark:data-[state=unchecked]:bg-slate-600"
          />
          {position === "end" && <Label className="align-middle" label={label} />}
        </div>
      )}
    />
  );
};

SwitchComponent.displayName = "SwitchComponent";

export { SwitchComponent };

SwitchComponent.propTypes = {
  className: propTypes.string,
  label: propTypes.string,
  name: propTypes.string.isRequired,
};
