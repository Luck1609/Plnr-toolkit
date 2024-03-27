
import {
  CircleCheckBig,
  Eye,
  TrendingUp
} from "lucide-react";
import ToolTips from "@/components/ToolTip";
import Actions from "@/components/TableComponent/Actions";

export const columns = [
  {
    id: "id",
    accessorKey: "quarter_name",
    header: "Quarter name",
  },
  {
    accessorKey: "start_date",
    header: "Start date",
  },
  {
    accessorKey: "end_date",
    header: "End date",
  },
  {
    accessorKey: "approved",
    header: "Approved",
  },
  {
    accessorKey: "deferred",
    header: "Deferred",
  },
  {
    accessorKey: "total",
    header: "Total",
  },
  {
    accessorKey: "finalized",
    header: "Status",
    cell: ({
      row: {
        original: { status },
      },
    }) => (
      <ToolTips
        label={
          status ? (
            <CircleCheckBig size={18} className="text-green-400" />
          ) : (
            <TrendingUp size={18} className="text-amber-400" />
          )
        }
        value={status ? "Completed" : "On-going"}
      />
    ),
  },
  {
    id: "actions",
    enableHiding: false,

    cell: () => {
      return (
        <div className="flex justify-center">
          <Actions options={[
            {
              label: "View details",
              icon: <Eye />,
            }
          ]} />
        </div>
      );
    },
  },
];