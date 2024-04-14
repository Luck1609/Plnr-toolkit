import { useDispatch, useSelector } from "react-redux";
import {
  Dialog,
  DialogContent,
  // DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { togglePreviewModal } from "@/lib/toolkit/reducers/modal";
import { display } from "@/lib/displayGroup";

export default function Modal() {
  const { previewModal } = useSelector((state) => state.modal),
    dispatch = useDispatch(),
    close = () => dispatch(togglePreviewModal("close"));

    const Component = display[previewModal?.component]

  return (
    <Dialog open={previewModal.show} onOpenChange={close}>
      <DialogContent className="dark:!bg-default w-full max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-center mb-3 border-b dark:border-input pb-3">
            {previewModal.title}
          </DialogTitle>

          <div className="!text-slate-300">{Component ? <Component data={previewModal?.data} /> : null}</div>
        </DialogHeader>

        {/* <DialogFooter className="mt-4">
          
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
}
