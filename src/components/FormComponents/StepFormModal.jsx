import { useEffect, useState } from "react";
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
import { toggleStepModal } from "@/lib/toolkit/reducers/modal";
import useAPI from "@/hooks/useAPI";
import FormBtn from "./FormBtn";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import SuspenseLoader from "../Suspense";

export default function StepFormModal() {
  const { stepModal } = useSelector((state) => state.modal);
  const [step, setStep] = useState(0),
    dispatch = useDispatch(),
    close = () => {
      dispatch(toggleStepModal("close"));
      setStep(0);
    },
    form = forms?.[stepModal.component],
    validation = stepModal.show ? yupResolver(form.validations[step]) : "",
    method = useForm({ mode: "all", resolver: validation }),
    Form = form?.forms,
    {
      handleSubmit,
      reset,
      // watch,
      // errors,
      formState: { isDirty, isValid },
    } = method,
    { makeRequest } = useAPI();

  useEffect(() => {
    if (stepModal.show) reset(stepModal.values);
  }, [stepModal, reset]);

  // console.log("stepModal fields", watch(), "form errors =>", errors);

  const submit = (payload) => {
    makeRequest({
      url: stepModal.url,
      method: stepModal.method ?? "post",
      payload,
      mutation: stepModal.mutation,
      action: () => {
        if (stepModal.action) stepModal.action();
        close();
      },
    });
  };

  const formStep = (action) => () =>
    setStep((prev) =>
      action === "next" ? prev + 1 : prev === 0 ? prev : prev - 1
    );

  return (
    <Dialog open={stepModal.show} onOpenChange={close}>
      <DialogContent className={cn("dark:!bg-default", stepModal?.className)}>
        <FormProvider {...method}>
          <form onSubmit={handleSubmit(submit)} className="">
            <DialogHeader>
              <DialogTitle className="text-center mb-3 border-b dark:border-input pb-3">
                {stepModal.title}
              </DialogTitle>

              
              <div className="!text-slate-300">
                <SuspenseLoader className="h-auto py-4">
                  {Form && <Form step={step} />}
                </SuspenseLoader>
              </div>
            </DialogHeader>

            <DialogFooter className="mt-4 flex !justify-between items-center">
              <label className="font-semibold dark:text-teal-300 block">
                Step {step + 1} out of {form?.length}
              </label>
              <div className="space-x-4">
                <Button
                  variant="secondary"
                  disabled={step === 0}
                  onClick={formStep("prev")}
                  type="button"
                >
                  Back
                </Button>

                {step + 1 < form?.length ? (
                  <Button
                    onClick={formStep("next")}
                    disabled={!isValid || !isDirty}
                    variant="primary"
                    type="button"
                  >
                    Next
                  </Button>
                ) : step === form?.length - 1 ? (
                  <Button onClick={formStep("next")} type="button">
                    Preview
                  </Button>
                ) : (
                  <FormBtn className="w-44" disabled={!isValid || !isDirty}>
                    Submit
                  </FormBtn>
                )}
              </div>
            </DialogFooter>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
}
