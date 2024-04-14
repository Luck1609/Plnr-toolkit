import { Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import SessionBtn from "./SessionBtn";
import NewAppBtn from "./NewAppBtn";
// import EndSessionBtn from "./EndSessionBtn";
import PrepMeetingBtn from "./PrepMeetingBtn";
import MeetingScheduleBtn from "./MeetingScheduleBtn";

export default function AppActionButtons({ quarter, applications, isLoading }) {
  return !isLoading ? (
    <>
      {console.log("Current quarter info", quarter)}
      {!quarter ? (
        <SessionBtn />
      ) : quarter?.finalized ? (
        <>
          {!quarter?.tsc ? (
            <MeetingScheduleBtn />
          ) : null}
          <Button className="flex items-center space-x-1" variant="primary">
            <Printer size={18} />
            <span className="">Print</span>
          </Button>
        </>
      ) : (
        <NewAppBtn />
      )}

      {applications?.length > 0 && !quarter?.finalized ? (
        // <EndSessionBtn />
        <PrepMeetingBtn id={quarter?.id} />
      ) : null}
    </>
  ) : (
    <Button variant="default">Loading...</Button>
  );
}
