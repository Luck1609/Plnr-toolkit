import Actions from "@/components/TableComponent/Actions";
import Helper from "@/helper";

const { isJsonString } = Helper;

export const columns = [
  {
    accessorKey: "name",
    header: "Locality name",
  },
  {
    accessorKey: "initials",
    header: "Initials",
  },
  {
    // accessorKey: "blocks",
    header: "Blocks",
    cell: ({
      row: {
        original: { blocks },
      },
    }) => <>{isJsonString(blocks)?.length}</>,
  },
  {
    accessorKey: "action",
    header: () => <></>,
    cell: ({
      row: {
        original: { id, name, initials, blocks, locality_id },
      },
    }) => (
      <Actions
        editAction={{
          show: true,
          data: {
            show: true,
            options: {
              title: "Edit sector",
              component: "sector",
              mutation: "/sector",
              url: `/sector/${id}`,
              method: "patch",
              values: {
                name,
                initials,
                blocks: isJsonString(blocks),
                locality_id,
              },
            },
          },
        }}
        deleteAction={{
          show: true,
          options: {
            title: "Delete sector",
            message:
              "You are about to delete this section. This action cannot be reversed. Do you want to continue with this action?",
            url: `/sector/${id}`,
            mutation: `/sector`,
          },
        }}
      />
    ),
  },
];
