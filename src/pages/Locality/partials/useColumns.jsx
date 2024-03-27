import Actions from "@/components/TableComponent/Actions";
import Helper from "@/helper";
import { Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

const { isJsonString } = Helper;

export const useLocalityColumns = () => {
  const navigate = useNavigate();

  const viewSectors = (id) => () => navigate(`sectors/${id}`)

  const columns = [
    {
      accessorKey: "name",
      header: "Locality name",
    },
    {
      accessorKey: "initials",
      header: "Initials",
    },
    {
      accessorKey: "sectors",
      header: "Sectors",
      cell: ({ row }) => <>{row.getValue("sectors").length}</>,
    },
    {
      accessorKey: "blocks",
      header: "Blocks",
      cell: ({ row }) => (
        <>
          {row
            .getValue("sectors")
            .reduce(
              (sectorBlocks, { blocks }) =>
                isJsonString(blocks)?.length + sectorBlocks,
              0
            )}
        </>
      ),
    },
    {
      accessorKey: "action",
      header: () => <></>,
      cell: ({
        row: {
          original: { id, name, initials, sectors },
        },
      }) => (
        <>
          <Actions
            options={[
              {
                label: "View",
                icon: <Eye className="h-4" />,
                action: viewSectors(id),
              },
            ]}
            editAction={{
              show: true,
              data: {
                options: {
                  title: "Edit locality",
                  component: "locality",
                  mutation: "/locality",
                  url: `/locality/${id}`,
                  method: "patch",
                  values: {
                    name,
                    initials,
                  },
                },
              },
            }}
            deleteAction={{
              show: sectors.length === 0,
              options: {
                title: "Delete locality",
                message:
                  "Are you sure you want to delete this locality? This action cannot be reversed. Do you want to continue with this action?",
                url: `/locality/${id}`,
                mutation: `/locality`,
              },
            }}
          />
        </>
      ),
    },
  ];

  return {columns}
};
