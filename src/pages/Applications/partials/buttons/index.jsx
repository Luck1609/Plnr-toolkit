import { Button } from "@/components/ui/button";
import SessionBtn from "./SessionBtn";
import NewAppBtn from "./NewAppBtn";
import PrepMeetingBtn from "./PrepMeetingBtn";
import MeetingScheduleBtn from "./MeetingScheduleBtn";
import PrintBtn from "./PrintBtn";

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
          <PrintBtn data={{applications, title: quarter.title}} />
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
