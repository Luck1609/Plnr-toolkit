import ApplicantInfo from "./ApplicantInfo";
import OtherDocuments from "./OtherDocuments";
import ScannedDocuments from "./ScannedDocuments";
import StructureDetails from "./StructureDetails";


export default function ApplicationForms({step}) {

  // console.log("Application form step", step)

  function switcher () {
    switch (step) {
      case 2:
        return <ApplicantInfo />
      case 1:
        return <StructureDetails />
      case 0:
        return <ScannedDocuments />
      case 3:
        return <OtherDocuments />
      case 4:
        return <OtherDocuments />
    
      default:
        return <ApplicantInfo />;
    }
  }

  return switcher()
}


