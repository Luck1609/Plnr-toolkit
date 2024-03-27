import useSWR from "swr";
import BaseTable from "@/components/TableComponent";
import { useDispatch } from "react-redux";
import { toggleModal } from "@/lib/toolkit/reducers/modal";
import { useLocalityColumns } from "./partials/useColumns";

export default function Locality() {
  const { data, isLoading } = useSWR("/locality"), dispatch = useDispatch(), { columns } = useLocalityColumns();

  
  const addLocality = () =>
    dispatch(
      toggleModal({
        title: "Add Locality",
        component: "locality",
        url: "/locality",
        mutation: "/locality",
        show: true,
        values: {
          name: "",
          initials: "",
        },
      })
    );

  return (
    <BaseTable
      isLoading={isLoading}
      data={data?.data ?? []}
      columns={columns}
      thead={{
        title: "Locality Management",
        btn: {
          text: "Add Locality",
          action: addLocality,
        },
      }}
    />
  );
}
