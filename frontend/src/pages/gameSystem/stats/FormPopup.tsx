import { Dialog } from "primereact/dialog";
import { observer } from "mobx-react-lite";
import type { Stat } from "../../../../generated/api";
import DataStorage from "./store/Stats";
import saveCurrent from "./store/actions/saveCurrent";
import CrudForm from "../../../components/crud/form/CrudForm";
import notEmpty from "../../../components/crud/form/validators/notEmpty";
import maxLength from "../../../components/crud/form/validators/maxLength";
import minLength from "../../../components/crud/form/validators/minLength";
import type { FormConfig } from "../../../components/crud/form/crudForm";
import { useParams } from "react-router";

export default observer(() => {
  const param = useParams();
  const formConfig: FormConfig = {
    onSubmit: () => saveCurrent(parseInt(param?.systemId ?? "")),
    fields: [
      {
        type: "text",
        label: "Name",
        dataKey: "name",
        validators: [notEmpty()],
      },
      {
        type: "text",
        label: "Short Name",
        dataKey: "shortName",
        validators: [notEmpty(), maxLength(3)],
      },
      {
        type: "text",
        label: "Description",
        dataKey: "description",
        validators: [minLength(3), maxLength(255)],
      },
      {
        type: "switch",
        label: "Is Hidden?",
        dataKey: "isHidden",
      },
    ],
  };

  return (
    <div>
      <Dialog
        header={DataStorage.isCurrentNew ? "Add System" : "Edit System"}
        visible={DataStorage.isPopupVisible}
        maximizable
        style={{ width: "50vw" }}
        onHide={() => {
          if (!DataStorage.isPopupVisible) return;
          DataStorage.togglePopup();
        }}
      >
        <CrudForm<Stat> config={formConfig} storageData={DataStorage} />
      </Dialog>
    </div>
  );
});
