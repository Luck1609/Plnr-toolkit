import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { cn } from '@/lib/utils';


export default function DynamicUrl({ options, defaultValue, className = "" }) {
  return (
    <Select>
      <SelectTrigger className={cn("w-[180px] !border-slate-50 dark:text-slate-200 dark:!bg-input dark:!border-input rounded-l-none", className)}>
        <SelectValue placeholder={defaultValue} />
      </SelectTrigger>

      <SelectContent className="!bg-input dark:!borer-input">
        {options.map(({ value, label }, index) => (
          <SelectItem
            className="cursor-pointer"
            value={value ?? label}
            key={index.toString()}
          >
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
