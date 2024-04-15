import { CircleCheckBig, CircleX } from "lucide-react";
import { useDispatch } from "react-redux";
import { Button } from "@/components/ui/button";
import ToolTips from "@/components/ToolTip";
import { togglePreviewModal } from "@/lib/toolkit/reducers/modal";

export default function BatchAction({ rows, data }) {

  const dispatch = useDispatch(), toggleMeeting = (panel) => () => dispatch(togglePreviewModal({
    show: true,
    title: `${panel.toUpperCase()} meeting details`,
    component: 'meeting',
    data: data?.[panel],
    clasName: "!max-w-2xl"
  }))

  return (
    <div className="w-full grid lg:grid-cols-2 py-2 border-b border-slate-500 mb-3">
      <div className="w-full flex items-center space-x-5">
        <span className="font-semibold">
          {`${rows.length ?? 0} application${
            rows.length > 1 ? "s" : ""
          } selected`}
        </span>
        <div className="flex space-x-3">
          <Button
            className="h-8 leading-3"
            variant="success"
            disabled={rows?.length === 0}
          >
            Recommend
          </Button>
          <Button
            className="h-8 leading-3"
            variant="danger"
            disabled={rows?.length === 0}
          >
            Delete
          </Button>
        </div>
      </div>

      <div className="w-full flex justify-end -space-x-3">
        <ToolTips
          value={
            <Button className="bg-input flex items-center" variant="" onClick={toggleMeeting("tsc")}>
              <span className="mr-2">
                {!data?.tsc ? "Schedule TSC meeting" : "TSC Meeting"}
              </span>
              {data?.tsc ? (
                <CircleCheckBig size={18} className="text-success" />
              ) : (
                <CircleX size={18} className="text-danger" />
              )}
            </Button>
          }
          label="Technical Sub-Committee Meeting"
        />

        <ToolTips
          value={
            <Button className="bg-input flex items-center" variant="" onClick={toggleMeeting("spc")}>
              <span className="mr-2">
                {!data?.spc ? "Schedule SPC meeting" : "SPC Meeting"}
              </span>
              {data?.spc ? (
                <CircleCheckBig size={18} className="text-success" />
              ) : (
                <CircleX size={18} className="text-danger" />
              )}
            </Button>
          }
          label="Spatial Committee Meeting"
        />
      </div>
    </div>
  );
}
