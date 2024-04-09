import { Button } from '../ui/button'
import { useSelector } from 'react-redux'
import { cn } from '@/lib/utils';
import Loader from '../Loader';
import { useFormContext } from 'react-hook-form';

export default function FormBtn({ children, className }) {
  const { formLoading } = useSelector((state) => state.misc), { formState: {isDirty, isValid} } = useFormContext();

  return (
    <Button
      className={cn("", className)}
      variant="success"
      type="submit"
      disabled={formLoading || !isValid || !isDirty}
    >
      {
        formLoading ? (
        <Loader text="Please wait..." />
        ) : children
      }
    </Button>
  );
}
