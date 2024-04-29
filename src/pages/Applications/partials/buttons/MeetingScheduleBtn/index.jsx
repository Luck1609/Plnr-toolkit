import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CalendarClock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toggleModal } from "@/lib/toolkit/reducers/modal";

export default function MeetingScheduleBtn() {
  let dispatch = useDispatch(),
    [url] = useSearchParams(),
    status = url.get("status");

  const scheduleMeeting = (panel) => () =>
    dispatch(
      toggleModal({
        show: true,
        component: panel,
        url: `/${panel}`,
        mutation: "/application",
        title: "Schedule TSC meeting",
        values: {
          venue: null,
          date: null,
        },
      })
    );

  status =
    status === "received" ? "TSC" : status === "recommended" ? "SPC" : null;

  return (
    <Button
      className="flex items-center space-x-1"
      variant="secondary"
      onClick={scheduleMeeting(status)}
    >
      <CalendarClock size={18} />
      <span className="">Schedule meeting</span>
    </Button>
  );
}
