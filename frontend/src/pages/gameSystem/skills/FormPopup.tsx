import { Dialog } from "primereact/dialog";
import { observer } from "mobx-react-lite";
import type { Skill } from "../../../../generated/api";
import DataStorage from "./store/Skills";
import saveCurrent from "./store/actions/saveCurrent";
import CrudForm from "../../../components/crud/form/CrudForm";
import notEmpty from "../../../components/crud/form/validators/notEmpty";
import maxLength from "../../../components/crud/form/validators/maxLength";
import minLength from "../../../components/crud/form/validators/minLength";
import type { FormConfig } from "../../../components/crud/form/crudForm";
import { useSystemIdParam } from "../hooks/useSystemIdParam";

export default observer(() => {
  const systemId = useSystemIdParam();
  const formConfig: FormConfig = {
    onSubmit: () => saveCurrent(systemId),
    fields: [
      {
        type: "text",
        label: "Name",
        dataKey: "name",
        validators: [notEmpty()],
      },
      {
        type: "text",
        label: "Description",
        dataKey: "description",
        validators: [minLength(3), maxLength(255)],
      },
      {
        type: "textarea",
        label: "Check",
        dataKey: "check",
        validators: [],
      },
      {
        type: "textarea",
        label: "Action",
        dataKey: "action",
        validators: [],
      },
      {
        type: "textarea",
        label: "Try Again action (optional)",
        dataKey: "tryAgain",
        validators: [],
      },
    ],
  };

  return (
    <div>
      <Dialog
        header={DataStorage.isCurrentNew ? "Add Skill" : "Edit Skill"}
        visible={DataStorage.isPopupVisible}
        maximizable
        style={{ width: "50vw" }}
        onHide={() => {
          if (!DataStorage.isPopupVisible) return;
          DataStorage.togglePopup();
        }}
      >
        <CrudForm<Skill> config={formConfig} storageData={DataStorage} />
      </Dialog>
    </div>
  );
});
