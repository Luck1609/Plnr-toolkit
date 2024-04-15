import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import { CircleCheckBig, CircleX } from "lucide-react";
import { useDispatch } from "react-redux";
import { Button } from "@/components/ui/button";
import ToolTips from "@/components/ToolTip";
import { togglePreviewModal } from "@/lib/toolkit/reducers/modal";
import SelectedApplicationAction from "./SelectedApplicationAction";

const visibleStatus = ["received", "recommended"];

export default function BatchAction({ rows, data }) {
  const dispatch = useDispatch(),
    [url] = useSearchParams(),
    status = url.get("status"),
    toggleMeeting = (panel) => () =>
      dispatch(
        togglePreviewModal({
          show: true,
          title: `${panel.toUpperCase()} meeting details`,
          component: "meeting",
          data: data?.[panel],
          clasName: "!max-w-2xl",
        })
      );

  return (
    <motion.div className="w-full grid lg:grid-cols-2 py-2 border-b border-slate-500 mb-3">
      {visibleStatus.includes(status) ? (
        <div className="w-full flex items-center space-x-5">
          <span className="font-semibold">
            {`${rows.length ?? 0} application${
              rows.length > 1 ? "s" : ""
            } selected`}
          </span>

          <SelectedApplicationAction rows={rows} />
        </div>
      ) : null}

      <div
        className={`w-full flex ${
          !visibleStatus.includes(status) ? "justify-start" : "justify-end"
        } -space-x-3`}
      >
        {status === "received" && (
          <ToolTips
            value={
              <Button
                className="bg-slate-200 hover:bg-slate-300 dark:bg-input flex items-center"
                variant="input"
                onClick={toggleMeeting("tsc")}
              >
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
        )}

        {status === "recommended" && (
          <ToolTips
            value={
              <Button
                className="flex items-center"
                variant="input"
                onClick={toggleMeeting("spc")}
              >
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
        )}
      </div>
    </motion.div>
  );
}
