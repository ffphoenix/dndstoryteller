import SelectedSystem from "../../globalStore/selectedSystem/SelectedSystem";
import { observer } from "mobx-react-lite";

export default observer(() => {
  return (
    <div>
      System in use <span className="pi pi-arrow-right" /> {SelectedSystem.name}
    </div>
  );
});
