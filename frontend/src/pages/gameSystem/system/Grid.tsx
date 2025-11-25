import React from "react";
import { Button } from "primereact/button";
import { Tag } from "primereact/tag";
import type { System } from "../../../../generated/api";
import SystemsStorage from "./store/Systems";
import openPopupForEdit from "./store/actions/openPopupForEdit";
import { observer } from "mobx-react-lite";
import selectSystem from "../../../globalStore/selectedSystem/actions/selectAndMemorize";
import SelectedSystem from "../../../globalStore/selectedSystem/SelectedSystem";

export default observer(() => {
  const gridItem = (system: System, selectedSystem: { id: number }) => {
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
            <Button
              label="Select"
              icon="pi pi-check"
              onClick={() => selectSystem(system.id)}
              className={selectedSystem?.id === system.id ? "p-button-success" : ""}
            />
            <Button label="Edit" icon="pi pi-pencil" onClick={() => openPopupForEdit(system.id)} />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="card">
      <div className="p-dataview p-component p-dataview-grid" data-pc-name="dataview" data-pc-section="root">
        <div className="p-dataview-content" data-pc-section="content">
          <div className="grid grid-nogutter">
            {SystemsStorage.list.map((system: System) => gridItem(system, SelectedSystem))}
          </div>
        </div>
      </div>
    </div>
  );
});
