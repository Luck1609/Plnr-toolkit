import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  CircleCheckBig,
  CircleX,
  MoreHorizontal,
  Pencil,
  Trash,
} from "lucide-react";
import ToolTips from "@/components/ToolTip";
import Actions from "@/components/TableComponent/Actions";

export const columns = [
  {
    // accessorKey: "name",
    header: "Senders name",
    cell: ({
      row: {
        original: { user: {firstname, lastname, title} },
      },
    }) => (
      <>
        {title} {firstname} {lastname}
      </>
    ),
  },
  {
    accessorKey: "display_name",
    header: "Type",
  },
  {
    accessorKey: "contact",
    header: "Phone No.",
  },
  {
    accessorKey: "units_used",
    header: "Units",
  },
  {
    accessorKey: "sent_date",
    header: "Sent date",
  },
  {
    accessorKey: "status",
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
            <CircleX size={18} className="text-red-400" />
          )
        }
        value={status ? "Active" : "Inactive"}
      />
    ),
  },

  {
    id: "actions",
    enableHiding: false,

    cell: () => {
      return (
        <Actions editAction={true} deleteAction={true} />
      );
    },
  },
];
