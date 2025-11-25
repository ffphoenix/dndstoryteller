import React from "react";
import { Button } from "primereact/button";
import { DataView } from "primereact/dataview";
import { Tag } from "primereact/tag";
import type { System } from "../../../../generated/api";
import systemsStorage from "./store/Systems";
import openPopupForEdit from "./store/actions/openPopupForEdit";
import { observer } from "mobx-react-lite";

export default observer(() => {
  const gridItem = (system: System) => {
    return (
      <div className="col-12 sm:col-6 lg:col-12 xl:col-4 p-2 min-w-1/4" key={system.id}>
        <div className="p-4 border-1 surface-border surface-card border-round">
          <div className="flex flex-wrap align-items-center justify-content-between gap-2">
            <Tag value={system.is_public ? "public" : "private"} severity={"info"} />
          </div>
          <div className="flex flex-column align-items-center gap-3 py-5">
            <div className="text-2xl font-bold">{system.name}</div>
          </div>
          <div className="flex flex-column align-items-center gap-3 py-5">
            <div className="text-2xl font-bold">{system.description}</div>
          </div>
          <div className="flex align-items-center justify-content-center gap-2">
            <Button label="Select" icon="pi pi-check" onClick={() => null} />
            <Button label="Edit" icon="pi pi-pencil" onClick={() => openPopupForEdit(system.id)} />
          </div>
        </div>
      </div>
    );
  };

  const listTemplate = (listItems: System[]) => {
    return <div className="grid grid-nogutter">{listItems.map((system: System) => gridItem(system))}</div>;
  };

  return (
    <div className="card">
      <DataView value={systemsStorage.list} listTemplate={listTemplate} layout={"grid"} />
    </div>
  );
});
