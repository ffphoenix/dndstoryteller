import ApiClient from "../../../../../utils/apiClient";
import DataStorage from "../Spells";
import fetchList from "./fetchList";
import saveCurrent from "../../../../../components/crud/form/actions/saveCurrent";

export default (systemId: number) => {
  const current = {
    ...DataStorage.current,
    systemId,
  };
  saveCurrent(
    DataStorage,
    () => ApiClient.spells.create(systemId, current),
    () => ApiClient.spells.update(current.id, systemId, current),
    () => fetchList(systemId),
  );
};
