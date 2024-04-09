import { useDispatch } from 'react-redux'
import { Button } from '@/components/ui/button'
import { toggleStepModal } from '@/lib/toolkit/reducers/modal'; 

export default function NewAppBtn() {
  const dispatch = useDispatch();

  const toggleForm = () =>
    dispatch(
      toggleStepModal({
        show: true,
        title: "Add new application",
        url: "/application",
        component: "application",
        className: "max-w-[600px]",
        mutation: "/application",
        values: {
          firstname: "",
          lastname: "",
          contact: "",
          title: "",
          locality_id: "",
          sector_id: "",
          block: "",
          plot: "",
          type: "",
          height: 1,
          use: "",
          shelf: "",
          existing: false,
          scanned_app_documents: "",
          other_documents: "",
        },
      })
    );

  return (
    <Button variant="primary" onClick={toggleForm}>
      New application
    </Button>
  );
}
