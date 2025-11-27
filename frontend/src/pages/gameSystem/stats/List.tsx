import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { observer } from "mobx-react-lite";
import Storage from "./store/Stats";

const dataTableConfig = [
  { header: "ID", key: "id", data: "id", sortable: true },
  { header: "Name", key: "name", data: "name", sortable: true },
  { header: "Description", key: "description", data: "description" },
];

export default observer(() => {
  return (
    <div>
      <DataTable value={Storage.list} size={"small"} onSort={(e) => console.log(e)}>
        {dataTableConfig.map((column) => (
          <Column key={column.key} field={column.data} header={column.header} sortable={column?.sortable ?? false} />
        ))}
      </DataTable>
    </div>
  );
});
