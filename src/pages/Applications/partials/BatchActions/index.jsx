import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import { CircleCheckBig, CircleX } from "lucide-react";
import { useDispatch } from "react-redux";
import { Button } from "@/components/ui/button";
import ToolTips from "@/components/ToolTip";
import { togglePreviewModal } from "@/lib/toolkit/reducers/modal";
import SelectedApplicationAction from "./SelectedApplicationAction";

const visibleStatus = ["received", "recommended"];

export default function BatchAction({ rows, data: { quarter } }) {
  const dispatch = useDispatch(),
    [url] = useSearchParams(),
    status = url.get("status"),
    toggleMeeting = (panel) => () =>
      dispatch(
        togglePreviewModal({
          show: true,
          title: `${panel.toUpperCase()} meeting details`,
          component: "meeting",
          data: {...quarter?.[panel], panel},
          clasName: "!max-w-2xl",
        })
      );

  return (
    <motion.div className="w-full grid lg:grid-cols-2 py-2 border-b border-slate-500 mb-3">
      <div className="w-full flex items-center space-x-5">
      {visibleStatus.includes(status) ? (
        <>
          <span className="font-semibold">
            {`${rows.length ?? 0} application${
              rows.length > 1 ? "s" : ""
            } selected`}
          </span>

          <SelectedApplicationAction rows={rows} />
        </>
      ) : null}
      </div>

       
      <div className="w-full flex justify-end -space-x-3">
        {(status === "received" || !status) && (
          <ToolTips
            value={
              <Button
                className="bg-slate-200 hover:bg-slate-300 dark:bg-input flex items-center"
                variant="input"
                onClick={toggleMeeting("tsc")}
              >
                <span className="mr-2">
                  {!quarter?.tsc ? "Schedule TSC meeting" : "TSC Meeting"}
                </span>

                {quarter?.tsc ? (
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
                  {!quarter?.spc ? "Schedule SPC meeting" : "SPC Meeting"}
                </span>
                {quarter?.spc ? (
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
