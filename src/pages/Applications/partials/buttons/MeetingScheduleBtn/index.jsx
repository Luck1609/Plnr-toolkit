import { CalendarClock } from "lucide-react";
import { useDispatch } from "react-redux";
import { Button } from "@/components/ui/button";
import { toggleModal } from "@/lib/toolkit/reducers/modal";

export default function MeetingScheduleBtn() {
  const dispatch = useDispatch();

  const scheduleMeeting = () =>
    dispatch(
      toggleModal({
        show: true,
        component: "tsc",
        url: "/tsc",
        mutation: "/application",
        title: "Schedule TSC meeting",
        values: {
          venue: null,
          date: null
        }
      })
    );

  return (
    <Button className="flex items-center space-x-1" variant="secondary" onClick={scheduleMeeting}>
      <CalendarClock size={18} />
      <span className="">Schedule meeting</span>
    </Button>
  );
}
