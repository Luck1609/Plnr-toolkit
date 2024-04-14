import { DatePicker } from "@/components/FormComponents/DatePicker";
import { Input } from "@/components/FormComponents/Input";


export default function MeetingScheduleForm() {
  return (
    <div className="space-y-4">
      <Input name="venue" placeholder="Type in the meeting's venue" label="Venue" />

      <DatePicker name="date" label="Meeting date" />
    </div>
  )
}
