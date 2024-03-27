import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { forms } from "@/lib/formGroup";
import { toggleModal } from "@/lib/toolkit/reducers/modal";
import useAPI from "@/hooks/useAPI";

export default function FormModal() {
  const { modal } = useSelector((state) => state.modal),
    dispatch = useDispatch(),
    close = () => dispatch(toggleModal("close")),
    validation = modal.show ? yupResolver(forms[modal.component]?.validation) : "",
    method = useForm({ mode: "all", resolver: validation }),
    Form = forms?.[modal.component]?.form,
    {
      handleSubmit,
      reset,
      watch,
      formState: { isDirty, isValid },
    } = method, { makeRequest } = useAPI();

  useEffect(() => {
    if (modal.show) reset(modal.values);
  }, [modal, reset]);


  console.log("modal fields", watch())

  const submit = (payload) => {
    makeRequest({
      url: modal.url,
      method: modal.method ?? "post",
      payload,
      action: () => {
        if (modal.action) modal.action()
      }
    })
  };

  return (
    <Dialog open={modal.show} onOpenChange={close}>
      <DialogContent className="dark:!bg-default">
        <FormProvider {...method}>
          <form onSubmit={handleSubmit(submit)}>
            <DialogHeader>
              <DialogTitle className="text-center mb-3 border-b dark:border-input pb-3">
                {modal.title}
              </DialogTitle>

              <div className="!text-slate-300">{Form && <Form />}</div>
            </DialogHeader>

            <DialogFooter className="mt-4">
              <Button
                className="bg-success text-white"
                disabled={!isValid || !isDirty}
              >
                Continue
              </Button>
            </DialogFooter>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
}
