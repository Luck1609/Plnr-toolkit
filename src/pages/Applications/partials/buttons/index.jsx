import { Button } from "@/components/ui/button";
import SessionBtn from "./SessionBtn";
import NewAppBtn from "./NewAppBtn";
import EndSessionBtn from "./EndSessionBtn";
import PrepMeetingBtn from "./PrepMeetingBtn";

export default function AppActionButtons({ quarter, applications, isLoading }) {
  return (
    !isLoading ? (
      <>
        {!quarter ? (
          <SessionBtn />
        ) : (
          <NewAppBtn />
        )}

        {
          (applications?.length > 0 && !quarter?.finalized) ? (
            // <EndSessionBtn />
            <PrepMeetingBtn />
          ) : null
        }

        {
          quarter?.finalized ? <Button className="" variant="default">Print</Button> : null
        }
      </>
    ) : (
      <Button variant="default">Loading...</Button>
    )
  );
}
