import ApplicationForms from "@/pages/Applications/partials/Forms/ApplicationFoms";
import { submitApplication } from "@/lib/submitHandler";
import SessionForm from "@/pages/Applications/partials/Forms/Session";
import MeetingScheduleForm from "@/pages/Applications/partials/buttons/MeetingScheduleBtn/MeetingScheduleForm";
import {
  ApplicantInfoValidation,
  MeetingValidation,
  PreviewDataValidation,
  ScannedDocumentsValidation,
  SessionValidation,
  StructureDetailsValidation,
} from "@/pages/Applications/validation";
import CommitteeForm from "@/pages/Committee/partials/Form";
import { CommitteeMemberValidation } from "@/pages/Committee/validation";
import SectorForm from "@/pages/Locality/Sector/partials/Form";
import LocalityForm from "@/pages/Locality/partials/Form";
import {
  LocalityValidation,
  SectorValidation,
} from "@/pages/Locality/validation";
import SmsForm from "@/pages/Sms/partials/Form";
import { Sms_validation } from "@/pages/Sms/validation";
import { UserForm } from "@/pages/Staff/partials/Form";
import { UserFormValidation } from "@/pages/Staff/partials/validation";


const meetings = {
  form: MeetingScheduleForm,
  validation: MeetingValidation
}

export const forms = {
  user: { form: UserForm, validation: UserFormValidation },
  committee: { form: CommitteeForm, validation: CommitteeMemberValidation },
  locality: { form: LocalityForm, validation: LocalityValidation },
  sector: { form: SectorForm, validation: SectorValidation },
  session: { form: SessionForm, validation: SessionValidation },
  tsc: meetings,
  spc: meetings,
  application: {
    forms: ApplicationForms,
    length: 3,
    submit: submitApplication,
    validations: [
      ApplicantInfoValidation,
      StructureDetailsValidation,
      ScannedDocumentsValidation,
      PreviewDataValidation
    ],
  },
  sms: {form: SmsForm, validation: Sms_validation}
};
