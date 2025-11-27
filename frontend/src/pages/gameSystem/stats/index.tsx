import { Card } from "primereact/card";
import { Button } from "primereact/button";
import EntityPopup from "./FormPopup";
import { observer } from "mobx-react-lite";
import SystemsStorage from "./store/Stats";
import List from "./List";
import { useNavigate } from "react-router";

export default observer(() => {
  const navigate = useNavigate();
  return (
    <Card>
      <div className="flex justify-between content-center mb-2">
        <Button className="pi pi-arrow-left" label="Back" onClick={() => navigate(-1)} />
        <Button label="Add" icon="pi pi-plus" onClick={() => SystemsStorage.togglePopup()} />
      </div>
      <List />
      <EntityPopup />
    </Card>
  );
});
