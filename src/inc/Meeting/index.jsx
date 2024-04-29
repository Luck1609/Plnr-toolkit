import { ScrollArea } from "@/components/ui/scroll-area";
import MeetingParticipants from "./MeetingParticipants";
import MinutesPreview from "./MinutesPreview";
import MeetingInfor from "./MeetingInfor";

export default function Meeting({ data }) {
  console.log("Meeting modal details", data)

  return (
    <ScrollArea className=" max-h-[70vh] h-full space-y-">
      <MeetingInfor data={data} />
      <MinutesPreview data={data} />
      <MeetingParticipants data={data} />
    </ScrollArea>
  );
}
