import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { observer } from "mobx-react-lite";
import DataStorage from "./store/Stats";
import openPopupForEdit from "./store/actions/openPopupForEdit";
import { useSystemIdParam } from "../hooks/useSystemIdParam";

const dataTableConfig = [
  { header: "Short Name", key: "short_name", data: "short_name" },
  { header: "Name", key: "name", data: "name" },
  { header: "Description", key: "description", data: "description" },
];

export default observer(() => {
  const systemId = useSystemIdParam();
  return (
    <div>
      <DataTable
        reorderableRows
        onRowReorder={(e) => console.log(e)}
        value={DataStorage.list}
        size={"small"}
        onSort={(e) => console.log(e)}
        onRowClick={(e) => openPopupForEdit(e.data.id, systemId)}
      >
        <Column rowReorder style={{ width: "3rem" }} />
        {dataTableConfig.map((column) => (
          <Column key={column.key} field={column.data} header={column.header} />
        ))}
      </DataTable>
    </div>
  );
});
