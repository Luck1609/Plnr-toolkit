import { ExternalLink, CircleX } from "lucide-react";
import ToolTips from "@/components/ToolTip";
import Actions from "@/components/TableComponent/Actions";
import Helper from "@/helper";


const { isJsonString } = Helper;

export const columns = [
  {
    // accessorKey: "name",
    header: "Senders name",
    cell: ({
      row: {
        original: {
          user: { firstname, lastname, title },
        },
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
    id: "contact",
    header: <div className="text-center">Recipient(s)</div>,
    cell: ({
      row: {
        original: { contacts },
      },
    }) => <div className="text-center">{isJsonString(contacts)?.length}</div>,
  },
  {
    id: "units_used",
    header: <div className="text-center">Units used</div>,
    cell: ({
      row: {
        original: { units_used },
      },
    }) => <div className="text-center">{units_used}</div>,
  },
  {
    id: "sent_date",
    header: <div className="text-center">Sent date</div>,
    cell: ({
      row: {
        original: { sent_date },
      },
    }) => <div className="text-center">{sent_date}</div>,
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
        value={
          status ? (
            <ExternalLink size={18} className="text-green-400" />
          ) : (
            <CircleX size={18} className="text-amber-400" />
          )
        }
        label={status ? "Sent" : "Not sent"}
      />
    ),
  },

  {
    id: "actions",
    enableHiding: false,

    cell: () => {
      return <Actions editAction={true} deleteAction={true} />;
    },
  },
];
