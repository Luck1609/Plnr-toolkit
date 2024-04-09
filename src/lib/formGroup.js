import ApplicationForms from "@/pages/Applications/partials/Forms/ApplicationFoms";
import SessionForm from "@/pages/Applications/partials/Forms/Session";
import {
  ApplicantInfoValidation,
  OtherDocumentsValidation,
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
import { UserForm } from "@/pages/Staff/partials/Form";
import { UserFormValidation } from "@/pages/Staff/partials/validation";




export const forms = {
  user: { form: UserForm, validation: UserFormValidation },
  committee: { form: CommitteeForm, validation: CommitteeMemberValidation },
  locality: { form: LocalityForm, validation: LocalityValidation },
  sector: { form: SectorForm, validation: SectorValidation },
  session: { form: SessionForm, validation: SessionValidation },
  application: {
    forms: ApplicationForms,
    length: 4,
    validations: [
      ApplicantInfoValidation,
      StructureDetailsValidation,
      ScannedDocumentsValidation,
      OtherDocumentsValidation,
    ],
  },
};
