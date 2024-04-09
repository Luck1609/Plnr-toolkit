import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useFormContext } from "react-hook-form";
import dayjs from "dayjs";
// import { useState } from "react";

export function DateRangePicker({ className, label }) {
  const { watch, setValue } = useFormContext(),
    from = watch("start_date"),
    to = watch("end_date");

  const setDate = (selectedDate) => {
    setValue("start_date", dayjs(selectedDate.from).format("YYYY-MM-DD"), {
      shouldValidate: true,
    });
    setValue("end_date", dayjs(selectedDate.to).format("YYYY-MM-DD"), {
      shouldValidate: true,
    });
  };

  // console.log("Meeting from date", from, "to date =>", to);

  return (
    <div className={cn("grid gap-2", className)}>
      <label className="text-xs">{label}</label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-full justify-start items-center text-left font-normal dark:bg-input"
              // !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {from ? (
              to ? (
                <>
                  {dayjs(from).format("MMM DD, YYYY")} -{" "}
                  {dayjs(to).format("MMM DD, YYYY")}
                </>
              ) : (
                dayjs(from).format("MMM DD, YYYY")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={dayjs(from).toDate()}
            selected={{
              from: dayjs().toDate(),
              to: dayjs().add(1, "month").toDate(),
            }}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
