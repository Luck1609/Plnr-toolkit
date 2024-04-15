import { Button } from './ui/button';
import { capitalize } from 'lodash';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { cn } from '@/lib/utils';

export default function DynamicUrl({ options, defaultValue, className = "" }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="bg-input rounded-none w-32" asChild>
        <Button variant="outline">{ capitalize(defaultValue) }</Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className={cn("w-40 dark:bg-input", className)}>
        {
          options.map(({label, value, action: { changeData, table }}, index) => (
            <DropdownMenuItem className="bg-input" onClick={() => {
              changeData(value)
              defaultValue !== value && table.toggleAllPageRowsSelected(false);
            }} key={index.toString()}>
              {label}
            </DropdownMenuItem>
          ))
        }
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
