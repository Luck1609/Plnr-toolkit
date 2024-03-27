import Actions from "@/components/TableComponent/Actions";
import ToolTips from "@/components/ToolTip";
import { CircleCheckBig, CircleX } from "lucide-react";


export const columns = [
  {
    header: "Name",
    cell: ({
      row: {
        original: { firstname, lastname, title },
      },
    }) => (
      <>
        {title} {firstname} {lastname}
      </>
    ),
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "contact",
    header: "Phone no.",
  },
  {
    accessorKey: "role",
    header: "Role",
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

    cell: ({ row }) => {
      return (
        <div className="flex justify-center">
          <Actions editAction={true} deleteAction={true} data={row.original} />
        </div>
      );
    },
  },
];