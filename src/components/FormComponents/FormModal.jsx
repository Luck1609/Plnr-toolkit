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
import { forms } from "@/lib/formGroup";
import { toggleModal } from "@/lib/toolkit/reducers/modal";
import useAPI from "@/hooks/useAPI";
import FormBtn from "./FormBtn";

export default function FormModal() {
  const { modal } = useSelector((state) => state.modal),
    dispatch = useDispatch(),
    close = () => dispatch(toggleModal("close")),
    formGroup = forms?.[modal.component],
    validation = modal.show ? yupResolver(formGroup?.validation) : "",
    method = useForm({ mode: "all", resolver: validation }),
    Form = formGroup?.form,
    {
      handleSubmit,
      reset,
      // watch,
      // errors,
      formState: { isDirty, isValid },
    } = method,
    { makeRequest } = useAPI();

  useEffect(() => {
    if (modal.show) reset(modal.values);
  }, [modal, reset]);



  const submit = (payload) => {
    payload = formGroup?.submit ? formGroup.submit() : payload;

    makeRequest({
      url: modal.url,
      method: modal.method ?? "post",
      payload,
      mutation: modal.mutation,
      action: () => {
        if (modal.action) modal.action()
        close()
      }
    })
  };

  // console.log("Watching files for errors", errors, "formn values =>", watch())

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
              <FormBtn className="w-44" disabled={!isValid || !isDirty}>
                Submit
              </FormBtn>
            </DialogFooter>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
}
