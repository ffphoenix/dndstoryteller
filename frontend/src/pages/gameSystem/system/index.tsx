import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import EntityPopup from "./FormPopup";
import { observer } from "mobx-react-lite";
import systemsStorage from "../../../data/systems/Systems";

const dataTableConfig = [
  { header: "ID", key: "id", data: "id", sortable: true },
  { header: "Name", key: "name", data: "name", sortable: true },
  { header: "Description", key: "description", data: "description" },
];

export default observer(() => {
  return (
    <Card>
      <div className="flex justify-between content-center mb-2">
        <h1 className="text-2xl font-bold mb-4">Systems</h1>
        <Button label="Add" icon="pi pi-plus" onClick={() => systemsStorage.togglePopup()} />
      </div>
      <DataTable value={systemsStorage.list} size={"small"} onSort={(e) => console.log(e)}>
        {dataTableConfig.map((column) => (
          <Column key={column.key} field={column.data} header={column.header} sortable={column?.sortable ?? false} />
        ))}
      </DataTable>
      <EntityPopup />
    </Card>
  );
});
