import { MoreHorizontal, Pencil, Trash } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useDispatch } from "react-redux";
import propTypes from "prop-types";
import { toggleNotice } from "@/lib/toolkit/reducers/notice";
import { toggleModal } from "@/lib/toolkit/reducers/modal";



export default function Actions({
  editAction,
  deleteAction = null,
  options = [],
}) {
  const dispatch = useDispatch();

  const processDelete = () =>
    dispatch(
      toggleNotice({
        ...deleteAction,
        message: `Do you want to delete this ${deleteAction.name}? this action cannot be reversed. Do you wish to continue?`
      })
    );

  const toggleEdit = () => {
    console.log("Edit actions", editAction)
    dispatch(
      toggleModal({
        show: true,
        ...editAction?.data?.options
      })
    );
  }

  return (
    <div className="flex justify-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="h-8 w-8 p-0 dark:text-slate-200">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="dark:!bg-input dark:!border-input">
          {options?.map(({ label, icon, action = () => {} }, index) => (
            <DropdownMenuItem
              className="hover:bg-slate-100 cursor-pointer space-x-2"
              key={index.toString()}
              onClick={action}
            >
              {icon} <span className="">{label}</span>
            </DropdownMenuItem>
          ))}
          {editAction?.show && (
            <DropdownMenuItem className="hover:bg-slate-100 cursor-pointer hover:text-primary" onClick={toggleEdit}>
              <Pencil className="h-4 mr-2" /> <span className="">Edit</span>
            </DropdownMenuItem>
          )}
          {deleteAction?.show && (
            <DropdownMenuItem
              className="hover:bg-slate-100 cursor-pointer hover:text-danger"
              onClick={processDelete}
              role="button"
            >
              <Trash className="h-4 mr-2" /> <span className="">Delete</span>
            </DropdownMenuItem>
          )}
          {/* <DropdownMenuItem className="hover:bg-slate-100 cursor-pointer"
                  onClick={() => navigator.clipboard.writeText(payment.id)}
                >
                  Copy payment ID 
                </DropdownMenuItem> */}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}


Actions.propTypes = {
  editAction: propTypes.bool,
  deleteAction: propTypes.bool,
  options: propTypes.array,
  data: propTypes.object
};