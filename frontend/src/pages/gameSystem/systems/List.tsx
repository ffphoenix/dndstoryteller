import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Button } from "primereact/button";
import { observer } from "mobx-react-lite";
import SystemsStorage from "./store/Systems";

const dataTableConfig = [
  { header: "ID", key: "id", data: "id", sortable: true },
  { header: "Name", key: "name", data: "name", sortable: true },
  { header: "Description", key: "description", data: "description" },
];

export default observer(() => {
  return (
    <div>
      <DataTable value={SystemsStorage.list} size={"small"} onSort={(e) => console.log(e)}>
        {dataTableConfig.map((column) => (
          <Column key={column.key} field={column.data} header={column.header} sortable={column?.sortable ?? false} />
        ))}
      </DataTable>
    </div>
  );
});
