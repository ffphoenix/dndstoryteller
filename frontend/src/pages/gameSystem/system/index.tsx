import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";

const dataTableConfig = [
  { header: "ID", key: "id", data: "id" },
  { header: "Name", key: "name", data: "name" },
  { header: "Description", key: "description", data: "description" },
];

const systems = [{ id: 1, name: "System 1", description: "Description 1" }];

export default () => {
  return (
    <div className="card">
      <DataTable value={systems} tableStyle={{ minWidth: "50rem" }}>
        {dataTableConfig.map((column) => (
          <Column key={column.key} field={column.data} header={column.header} />
        ))}
      </DataTable>
    </div>
  );
};
