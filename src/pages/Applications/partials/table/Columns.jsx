import Actions from "@/components/TableComponent/Actions";
import { Checkbox } from "@/components/ui/checkbox";



export const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <>
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      </>
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: "Applicant name",
    cell: ({
      row: {
        original: { title, firstname, lastname },
      },
    }) => (
      <div className="">
        {title} {firstname} {lastname}
      </div>
    ),
  },
  {
    accessorKey: "application_num",
    header: "Appl. no.",
  },
  {
    accessorKey: "amount",
    header: "Phone no.",
  },
  {
    accessorKey: "use",
    header: "Use",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    header: "Plot info",
    cell: ({
      row: {
        original: { locality, sector, block, plot },
      },
    }) => <>{locality?.name} {sector?.name} {block} {plot}</>,
  },
  {
    accessorKey: "shelf",
    header: "Shelf no.",
  },
  {
    id: "actions",
    enableHiding: false,

    cell: ({ row: { original: { id } } }) => {
      return (
        <Actions 
          editAction={{
            show: true,
            data: {
              url: `/application/${id}`,
              method: "patch",
              mutation: `/application`,
              content: "application",
              values: {

              }
            }
          }}
        />
      );
    },
  },
];
