import { useDispatch } from "react-redux";
import { Button } from "@/components/ui/button";
import { toggleNotice } from "@/lib/toolkit/reducers/notice";

export default function PrepMeetingBtn({ id }) {
  const dispatch = useDispatch();

  console.log("Preparation id", id);

  const toggleForm = () =>
    dispatch(
      toggleNotice({
        show: true,
        title: "End Session",
        url: `/finalize-session/${id}`,
        message:
          "You want to end this session? You cannot recieve any application if you proceed with this action. Do you still want to continue with this action?",
        mutation: `/application`,
        method: "patch",
      })
    );

  return (
    <Button variant="danger" onClick={toggleForm}>
      Prep for meeting
    </Button>
  );
}
