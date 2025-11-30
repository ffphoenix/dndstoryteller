import ApiClient from "../../../../../utils/apiClient";
import DataStorage from "../Skills";
import fetchList from "./fetchList";
import saveCurrent from "../../../../../components/crud/form/actions/saveCurrent";

export default (systemId: number) => {
  const current = {
    ...DataStorage.current,
    systemId,
  };
  saveCurrent(
    DataStorage,
    () => ApiClient.skills.create(systemId, current),
    () => ApiClient.skills.update(current.id, systemId, current),
    () => fetchList(systemId),
  );
};
