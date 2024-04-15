import dayjs from "dayjs";
import { Bell, RefreshCcw, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import ToolTips from "@/components/ToolTip";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Meeting({ data }) {
  console.log("Meeting modal details", data)

  return (
    <ScrollArea className=" max-h-[70vh] h-full">
      <div className="space-y-4">
        <div className="w-full  bg-default flex justify-between items-center">
          <label className="font-semibold pl-1 rounded">Update meeting info</label>

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

      <div className="mt-8">
        <div className="flex justify-between items-center mb-3 pb-1 border-b border-default">
          <label className="font-semibold lg:col-span-2">
            Meeting Participants
          </label>

          <div className="flex -space-x-5">
            <ToolTips
              label="Update meeting participants"
              value={
                <Button className="h-8 p-2" variant="success">
                  <RefreshCcw size={18} />
                </Button>
              }
            />

            <ToolTips
              label="Notify participants"
              value={
                <Button className="h-8 p-2" variant="primary">
                  <Bell size={18} />
                </Button>
              }
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 w-full rounded gap-4">
          <div className="w-full p-2 rounded bg-input px-4">
            <label className="text-sm font-semibold block mb-1">
              <span className="font-bold mr-2">Designation:</span>
              <span className="">PPD</span>
            </label>
            <p className="">Nathaniel Febiri Obeng Kwaku Lucky</p>
            <p className="">0249149420</p>
          </div>

          <div className="w-full p-2 rounded bg-input px-4">
            <label className="text-sm font-semibold block mb-1">
              <span className="font-bold mr-2">Designation:</span>
              <span className="">PPD</span>
            </label>
            <p className="">Nathaniel Febiri Obeng Kwaku Lucky</p>
            <p className="">0249149420</p>
          </div>

          <div className="w-full p-2 rounded bg-input px-4">
            <label className="text-sm font-semibold block mb-1">
              <span className="font-bold mr-2">Designation:</span>
              <span className="">PPD</span>
            </label>
            <p className="">Nathaniel Febiri Obeng Kwaku Lucky</p>
            <p className="">0249149420</p>
          </div>

          <div className="w-full p-2 rounded bg-input px-4">
            <label className="text-sm font-semibold block mb-1">
              <span className="font-bold mr-2">Designation:</span>
              <span className="">PPD</span>
            </label>
            <p className="">Nathaniel Febiri Obeng Kwaku Lucky</p>
            <p className="">0249149420</p>
          </div>

          <div className="w-full p-2 rounded bg-input px-4">
            <label className="text-sm font-semibold block mb-1">
              <span className="font-bold mr-2">Designation:</span>
              <span className="">PPD</span>
            </label>
            <p className="">Nathaniel Febiri Obeng Kwaku Lucky</p>
            <p className="">0249149420</p>
          </div>

          <div className="w-full p-2 rounded bg-input px-4">
            <label className="text-sm font-semibold block mb-1">
              <span className="font-bold mr-2">Designation:</span>
              <span className="">PPD</span>
            </label>
            <p className="">Nathaniel Febiri Obeng Kwaku Lucky</p>
            <p className="">0249149420</p>
          </div>

          <div className="w-full p-2 rounded bg-input px-4">
            <label className="text-sm font-semibold block mb-1">
              <span className="font-bold mr-2">Designation:</span>
              <span className="">PPD</span>
            </label>
            <p className="">Nathaniel Febiri Obeng Kwaku Lucky</p>
            <p className="">0249149420</p>
          </div>

          <div className="w-full p-2 rounded bg-input px-4">
            <label className="text-sm font-semibold block mb-1">
              <span className="font-bold mr-2">Designation:</span>
              <span className="">PPD</span>
            </label>
            <p className="">Nathaniel Febiri Obeng Kwaku Lucky</p>
            <p className="">0249149420</p>
          </div>

          <div className="w-full p-2 rounded bg-input px-4">
            <label className="text-sm font-semibold block mb-1">
              <span className="font-bold mr-2">Designation:</span>
              <span className="">PPD</span>
            </label>
            <p className="">Nathaniel Febiri Obeng Kwaku Lucky</p>
            <p className="">0249149420</p>
          </div>

          <div className="w-full p-2 rounded bg-input px-4">
            <label className="text-sm font-semibold block mb-1">
              <span className="font-bold mr-2">Designation:</span>
              <span className="">PPD</span>
            </label>
            <p className="">Nathaniel Febiri Obeng Kwaku Lucky</p>
            <p className="">0249149420</p>
          </div>

          <div className="w-full p-2 rounded bg-input px-4">
            <label className="text-sm font-semibold block mb-1">
              <span className="font-bold mr-2">Designation:</span>
              <span className="">PPD</span>
            </label>
            <p className="">Nathaniel Febiri Obeng Kwaku Lucky</p>
            <p className="">0249149420</p>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}
