import useSWR from "swr";
import { columns } from "./partials/table/Columns";
import BaseTable from "@/components/TableComponent";
import DynamicUrl from "../../components/DynamicUrl";
import { TypographySm } from "@/components/Typography";


const urlOptions = [
  {
    label: "Received",
    value: "received",
  },
  {
    label: "Recommended",
    value: "recommended",
  },
  {
    label: "Approved",
    value: "approved",
  },
  {
    label: "Deferred",
    value: "deferred",
  },
  {
    label: "Rejected",
    value: "rejected",
  },
];

export default function Applications() {
  const {data, isLoading} = useSWR("/application");


  return (
    <BaseTable
      // showDetailPanel={true}
      thead={{
        title: "Appliacations Management",
        btn: {
          action: () => {alert("yo fish")},
          text: "Start session"
        },
        component: ActionTab,
        position: "start"
      }}
      data={data?.data ?? []}
      columns={columns}
      isLoading={isLoading}
    />
  );
}


const ActionTab = () => {
  return (
    <div className="flex items-center py-4">
      <div className="flex space-x-3 items-center">
        <div className="flex space-x-2 items-center border border-gray-200 dark:border-input pl-2 rounded-md">
          <TypographySm>Status</TypographySm>
          <DynamicUrl
            defaultValue="Received"
            options={urlOptions}
            className="border-l"
          />
        </div>
        {/* <Filter table={table} /> */}
      </div>
      {/* <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="ml-auto">
            Columns <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end">
          {table
            .getAllColumns()
            .filter((column) => column.getCanHide())
            .map((column) => {
              return (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  className="capitalize"
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) =>
                    column.toggleVisibility(!!value)
                  }
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              );
            })}
        </DropdownMenuContent>
      </DropdownMenu> */}
    </div>
  )
}