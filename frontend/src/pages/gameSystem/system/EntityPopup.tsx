import { Dialog } from "primereact/dialog";
import { observer } from "mobx-react-lite";
import getCurrent from "../../../data/systems/reducers/getCurrent";
import getDataHandler from "../../../components/crud/getFormDataHandler";
import type { System } from "../../../../generated/api";
import systemsStorage from "../../../data/systems/Systems";
import CustomInputText from "../../../components/crud/form/CustomInputText";
import CustomInputSwitch from "../../../components/crud/form/CustomInputSwitch";
import { Button } from "primereact/button";
import saveCurrent from "../../../data/systems/actions/saveCurrent";

export default observer(() => {
  const currentSystem = getCurrent();
  const onChange = getDataHandler<System>(systemsStorage);
  return (
    <div>
      <Dialog
        header={currentSystem.id ? "Edit System" : "Add System"}
        visible={systemsStorage.isPopupVisible}
        maximizable
        baseZIndex={10000}
        style={{ width: "50vw" }}
        onHide={() => {
          if (!systemsStorage.isPopupVisible) return;
          systemsStorage.togglePopup();
        }}
      >
        <CustomInputText
          type="text"
          label="Name"
          dataKey="name"
          onChange={onChange}
          value={currentSystem.name}
        />
        <CustomInputText
          type="text"
          label="Description"
          dataKey="description"
          onChange={onChange}
          value={currentSystem.description}
        />
        <CustomInputSwitch
          dataKey="is_public"
          label="Is Puiblic"
          onChange={onChange}
          value={currentSystem.is_public}
        />
        <div className="flex justify-end">
          <Button
            icon={systemsStorage.UI.loading ? "pi pi-spin pi-spinner" : ""}
            label={currentSystem.id ? "Save" : "Add"}
            onClick={() => saveCurrent()}
            disabled={systemsStorage.UI.loading}
          />
        </div>
      </Dialog>
    </div>
  );
});
