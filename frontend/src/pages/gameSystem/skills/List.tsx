import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { observer } from "mobx-react-lite";
import DataStorage from "./store/Skills";
import openPopupForEdit from "./store/actions/openPopupForEdit";
import { useSystemIdParam } from "../hooks/useSystemIdParam";

const dataTableConfig = [
  { header: "Name", key: "name", data: "name" },
  { header: "Description", key: "description", data: "description" },
];

export default observer(() => {
  const systemId = useSystemIdParam();
  return (
    <div>
      <DataTable
        value={DataStorage.list}
        size={"small"}
        onSort={(e) => console.log(e)}
        onRowClick={(e) => openPopupForEdit(e.data.id, systemId)}
      >
        {dataTableConfig.map((column) => (
          <Column key={column.key} field={column.data} header={column.header} />
        ))}
      </DataTable>
    </div>
  );
});
