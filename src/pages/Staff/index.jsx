// import { useState } from "react";
import useSWR from "swr";
import BaseTable from "@/components/TableComponent";
// import Helper from "@/helper";
import { columns } from "./partials/columns";
import { useDispatch } from "react-redux";
import { toggleModal } from "@/lib/toolkit/reducers/modal";

// const { isJsonString } = Helper;

export default function Staff() {
  const dispatch = useDispatch(),
    { data, isLoading } = useSWR("/staff");

  console.log("Staff data", data)

  return (
    <BaseTable
      data={data?.data ?? []}
      columns={columns}
      thead={{
        title: "Staff Management",
        btn: {
          text: "Add new staff",
          action: () =>
            dispatch(
              toggleModal({
                show: true,
                title: "Add new staff member",
                component: "user",
                mutation: "/staff",
                url: "/staff",
                method: "post",
                values: {
                  firstname: "",
                  lastname: "",
                  email: "",
                  contact: "",
                  role: "",
                  title: "",
                },
                // action: () => {},
              })
            ),
        },
      }}
      isLoading={isLoading}
    />
  );
}
