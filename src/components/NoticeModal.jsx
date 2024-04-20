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
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export function NoticeModal() {
  const { notice } = useSelector(state => state.notice), dispatch = useDispatch(), {makeRequest} = useAPI(), [submitting, setSubmitting] = useState(false)

  const close = () => dispatch(toggleNotice("close")), toggleSubmit = (state) => setSubmitting(state);

  const submit = () => {
    toggleSubmit(true)
    makeRequest({
      url: notice.url,
      method: notice.method,
      payload: notice?.payload,
      mutation: notice.mutation,
      action: () => {
        close()
        toggleSubmit(false)
      },
      errAction: () => {
        toggleSubmit(false)
      }
    })
  }

  // console.log("Notice info", notice)

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
          <AlertDialogCancel onClick={close} className="bg-danger text-white" disabled={submitting}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction className="bg-primary text-white" onClick={submit} disabled={submitting}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
