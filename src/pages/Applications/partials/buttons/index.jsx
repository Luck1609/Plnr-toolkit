import { useSearchParams } from "react-router-dom";
import SessionBtn from "./SessionBtn";
import NewAppBtn from "./NewAppBtn";
import PrepMeetingBtn from "./PrepMeetingBtn";
import MeetingScheduleBtn from "./MeetingScheduleBtn";
import PrintBtn from "./PrintBtn";
import EndSessionBtn from "./EndSessionBtn";

export default function AppActionButtons({
  data: { applications, processed, received, recommended, ...quarter },
}) {
  const [url] = useSearchParams(),
    location = url.get("status"),
    printableRoutes = ["approved", "deferred"];

  return (
    <>
      {!quarter ? (
        // Start new session if there is no active session
        <SessionBtn />
      ) : quarter?.finalized ? (
        // If the active session is marked as finalized
        <>
          {!quarter?.tsc ? <MeetingScheduleBtn /> : null}
          <PrintBtn
            data={{ applications: applications, title: quarter.title }}
          />
        </>
      ) : received + recommended === 0 && processed === 0 ? (
        <NewAppBtn />
      ) : (
        <>
          {((location === "received" && received > 0) ||
            (location === "recommended" && recommended > 0) ||
            (printableRoutes.includes(location) && processed > 0)) && (
            <PrintBtn
              data={{ applications: applications, title: quarter.title }}
            />
          )}

          {received + recommended === 0 && processed > 0 && <EndSessionBtn />}
        </>
      )}

      {received > 0 && received === 0 && !quarter?.finalized && (
        <PrepMeetingBtn id={quarter?.id} />
      )}
    </>
  );
}
