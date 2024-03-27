import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from "@/components/ui/alert-dialog";
import useAPI from "@/hooks/useAPI";
import { toggleNotice } from "@/lib/toolkit/reducers/notice";
import { useDispatch, useSelector } from "react-redux";

export function NoticeModal() {
  const { notice } = useSelector(state => state.notice), dispatch = useDispatch(), {makeRequest} = useAPI();

  const close = () => dispatch(toggleNotice("close"));

  const submit = () => {
    makeRequest({
      url: notice.url,
      method: notice.method,
      payload: notice?.payload,
      mutation: notice.mutation,
      action: () => {
        close()
      }
    })
  }

  return (
    <AlertDialog open={notice.show}>
      <AlertDialogContent className="dark:!bg-default">
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription className="!text-slate-300">
            { notice.message }
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={close} className="bg-danger text-white">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction className="bg-primary text-white" onClick={submit}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
