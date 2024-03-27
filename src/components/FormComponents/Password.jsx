import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useFormContext } from "react-hook-form";

const Password = ({ className = "", label = "", ...props }) => {
  const [showPwd, setShowPwd] = useState(false),
    { control } = useFormContext();

  const togglePasswordField = () => setShowPwd(!showPwd);

  return (
    <FormField
      control={control}
      name={props?.name}
      render={({ field: {value, ...field} }) => (
        <FormItem className="relative">
          <FormControl>
            <>
              <FormLabel className="text-slate-400">{label}</FormLabel>
              <input
                type={showPwd ? "text" : "password"}
                placeholder={props?.placeholder}
                className={cn(
                  "flex  w-full rounded-md disabled:opacity-50",
                  className
                )}
                value={value ?? ""}
                {...field}
              />

              {!showPwd ? (
                <Eye
                  className="absolute bottom-2 right-2 text-slate-400 cursor-pointer"
                  onClick={togglePasswordField}
                />
              ) : (
                <EyeOff
                  className="absolute bottom-2 right-2 text-slate-400 cursor-pointer"
                  onClick={togglePasswordField}
                />
              )}
            </>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

Password.displayName = "Password";

export { Password };
