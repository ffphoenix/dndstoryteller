import { Dialog } from "primereact/dialog";
import { observer } from "mobx-react-lite";
import type { System } from "../../../../generated/api";
import systemsStorage from "./store/Systems";
import saveCurrent from "./store/actions/saveCurrent";
import CrudForm from "../../../components/crud/form/CrudForm";
import notEmpty from "../../../components/crud/form/validators/notEmpty";
import maxLength from "../../../components/crud/form/validators/maxLength";
import minLength from "../../../components/crud/form/validators/minLength";
import type { FormConfig } from "../../../components/crud/form/crudForm";

export default observer(() => {
  const formConfig: FormConfig = {
    onSubmit: () => saveCurrent(),
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
        validators: [minLength(3), maxLength(50)],
      },
      {
        type: "switch",
        label: "Is Public",
        dataKey: "is_public",
      },
    ],
  };

  return (
    <div>
      <Dialog
        header={systemsStorage.isCurrentNew ? "Add System" : "Edit System"}
        visible={systemsStorage.isPopupVisible}
        maximizable
        style={{ width: "50vw" }}
        onHide={() => {
          if (!systemsStorage.isPopupVisible) return;
          systemsStorage.togglePopup();
        }}
      >
        <CrudForm<System> config={formConfig} storageData={systemsStorage} />
      </Dialog>
    </div>
  );
});
