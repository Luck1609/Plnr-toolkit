import { useDispatch } from "react-redux";
import { Button } from "@/components/ui/button";
import { toggleNotice } from "@/lib/toolkit/reducers/notice";
import { useSearchParams } from "react-router-dom";

export default function SelectedApplicationAction({ rows }) {

  const dispatch = useDispatch(),
    [url] = useSearchParams(),
    status = url.get("status"),
    toggleAction = (action) => () =>
      dispatch(
        toggleNotice({
          show: true,
          message: `${rows.length} has been selected for batch ${action}, do you wish to continue with this action`,
          url: "/applications/action",
          mutation: `/application?status=${status}`,
          method: "patch",
          payload: {
            data: rows.reduce((tableRows, row) => ([...tableRows, row.original.id]), []),
            action
          },
        })
      );

  return (
    <div className="flex space-x-3">
      {status === "received" && (
        <>
          <Button
            className="h-8 leading-3"
            variant="success"
            disabled={rows?.length === 0}
            onClick={toggleAction("recommendation")}
          >
            Recommend
          </Button>

          <Button
            className="h-8 leading-3"
            variant="danger"
            disabled={rows?.length === 0}
            onClick={toggleAction("delete")}
          >
            Delete
          </Button>
        </>
      )}

      {status === "recommended" && (
        <>
          <Button
            className="h-8 leading-3 bg-green-500 text-white"
            disabled={rows?.length === 0}
            onClick={toggleAction("approval")}
          >
            Approve
          </Button>

          <Button
            className="h-8 leading-3 bg-amber-600 text-white"
            disabled={rows?.length === 0}
            onClick={toggleAction("deferring")}
          >
            Defer
          </Button>

          {/* <Button
            className="h-8 leading-3"
            variant="danger"
            disabled={rows?.length === 0}
            onClick={toggleAction("rejection")}
          >
            Reject
          </Button> */}
        </>
      )}
    </div>
  );
}
