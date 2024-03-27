import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from "@/components/ui/alert-dialog";
import { useSelector } from "react-redux";


export default function FormModal() {
  const {modal} = useSelector(state => state.modal)

  return (
    <AlertDialog open={modal.show}>
      <AlertDialogContent className="dark:!bg-default">
        <AlertDialogHeader>
          <AlertDialogTitle>{modal.title}</AlertDialogTitle>
          <div className="!text-slate-300">
            {/* { notice.message } */}
          </div>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={close} className="bg-danger text-white">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction className="bg-primary text-white">Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
