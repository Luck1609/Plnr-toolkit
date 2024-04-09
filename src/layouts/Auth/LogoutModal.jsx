import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useDispatch, useSelector } from "react-redux";
import useAPI from "@/hooks/useAPI";
import { toggleLogoutNotice } from "@/lib/toolkit/reducers/notice";

export function LogoutModal() {
  const { logout } = useSelector((state) => state.notice),
    dispatch = useDispatch(),
    { makeRequest } = useAPI();

  const close = () => dispatch(toggleLogoutNotice("close"));

  const submit = () => {
    makeRequest({
      url: "/logout",
      method: "post",
      action: () => window.location.href = "/"
    });
  };

  return (
    <AlertDialog open={logout}>
      <AlertDialogContent className="dark:!bg-default">
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription className="!text-slate-300">
            Do you wish to logout of the application?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={close} className="bg-danger text-white">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction className="bg-primary text-white" onClick={submit}>
            Yes, logout
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
