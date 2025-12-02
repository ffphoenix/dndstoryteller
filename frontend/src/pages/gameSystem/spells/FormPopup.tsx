import { Dialog } from "primereact/dialog";
import { observer } from "mobx-react-lite";
import type { Spell } from "../../../../generated/api";
import DataStorage from "./store/Spells";
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
        type: "text",
        label: "School",
        dataKey: "school",
        validators: [],
      },
      {
        type: "text",
        label: "Subschool",
        dataKey: "subschool",
        validators: [],
      },
      {
        type: "text",
        label: "Level",
        dataKey: "level",
        validators: [],
      },
      {
        type: "text",
        label: "Range",
        dataKey: "range",
        validators: [],
      },
      {
        type: "text",
        label: "Duration",
        dataKey: "duration",
        validators: [],
      },
    ],
  };

  return (
    <div>
      <Dialog
        header={DataStorage.isCurrentNew ? "Add Spell" : "Edit Spell"}
        visible={DataStorage.isPopupVisible}
        maximizable
        style={{ width: "50vw" }}
        onHide={() => {
          if (!DataStorage.isPopupVisible) return;
          DataStorage.togglePopup();
        }}
      >
        <CrudForm<Spell> config={formConfig} storageData={DataStorage} />
      </Dialog>
    </div>
  );
});
