import { CircleCheckBig, CircleX } from "lucide-react";
import ToolTips from "@/components/ToolTip";
import Actions from "@/components/TableComponent/Actions";

export const columns = [
  {
    // accessorKey: "name",
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
    header: "Phone No.",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    accessorKey: "designation",
    header: "Designation",
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

    cell: ({ row: { original: { id, name, email, contact, role, designation } } }) => {
      return (
        <Actions
          editAction={{
            show: true,
            data: {
              component: "committee",
              url: "/committee",
              mutation: "/committee",
              show: true,
              values: {
                name,
                email,
                contact,
                role,
                designation,
              },
            },
          }}
          deleteAction={{
            show: true,
            data: {
              url: `/application/${id}`,
              message: "",
              mutation: `/application`,
              method: "delete"
            }
          }}
        />
      );
    },
  },
];
