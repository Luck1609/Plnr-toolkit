import { Button } from "@/components/ui/button";
import dayjs from "dayjs";
import { Pencil } from "lucide-react";

export default function MeetingInfor() {
  return (
    <div className="space-y-4">
      <div className="w-full bg-default flex justify-between items-center">
        <label className="font-semibold pl-1 rounded text-lg">
          Update meeting info
        </label>

        <Button variant="primary" className="space-x-1 h-8">
          <Pencil size={18} />
          <span className="">Edit</span>
        </Button>
      </div>
      <div className="w-full p-2 rounded bg-input px-4">
        <label className="text-sm font-semibold block mb-1">
          Meeting title
        </label>
        <p className="">2nd Quarter Technical Sub-Committee Meeting</p>
      </div>

      <div className="grid lg:grid-cols-2 w-full rounded gap-4">
        <div className="w-full p-2 rounded bg-input px-4">
          <label className="text-sm font-semibold block mb-1">Venue</label>
          <p className="">Mini Confrence Room</p>
        </div>

        <div className="w-full p-2 rounded bg-input px-4">
          <label className="text-sm font-semibold block mb-1">Venue</label>
          <p className="">{dayjs().format("MMM DD, YYYY")}</p>
        </div>
      </div>
    </div>
  );
}
