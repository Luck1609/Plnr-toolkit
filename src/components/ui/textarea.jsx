import { forwardRef } from "react";
import { cn } from "@/lib/utils"
import { useFormContext, Controller } from "react-hook-form";

const Textarea = forwardRef(({ className, name, label, ...props }) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field:  { onChange, onBlur, value }, fieldState: {error} }) => {

        return (
          <>
          <label className={`!text-xs font-medium ${error ? "text-danger" : "text-slate-400"} mb-1 inline-block`}>{label}</label>
            <textarea
              className={cn(
                "flex min-h-[80px] w-full rounded-md border dark:border-input bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-300 dark:focus-visible:ring-slate-300",
                className
              )}
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              {...props} 
            />
          </>
        )
      }
    }
  />
  );
})
Textarea.displayName = "Textarea"

export { Textarea }
