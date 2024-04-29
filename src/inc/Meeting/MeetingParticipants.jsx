import { Bell, RefreshCcw } from "lucide-react";
import ToolTips from '@/components/ToolTip';
import { Button } from '@/components/ui/button';

export default function MeetingParticipants() {
  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-3 pb-1 border-b border-default">
        <label className="font-semibold lg:col-span-2 text-lg">
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
  );
}
