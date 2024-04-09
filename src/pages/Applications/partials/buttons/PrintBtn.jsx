import { useDispatch } from 'react-redux'
import { Button } from '@/components/ui/button'
import { toggleModal } from '@/lib/toolkit/reducers/modal'; 

export default function PrintBtn() {
  const dispatch = useDispatch();

  const toggleForm = () =>
    dispatch(
      toggleModal({
        show: true,
        title: "Start new permit session",
        url: "/quarter",
        component: "session",
        mutation: "/application",
        values: {
          name: "",
          start_date: "",
          end_date: "",
        },
      })
    );

  return (
    <Button variant="success" onClick={toggleForm}>
      Print
    </Button>
  );
}
