import type { Stat } from "../../../../../generated/api";
import createDataStorage from "../../../../components/crud/createDataStorage";

const getDefaultStat = () => ({
  id: 0,
  systemId: 0,
  name: "",
  shortName: "",
  description: "",
  isHidden: false,
  displayOrder: 0,
});
const StatsStorage = createDataStorage<Stat>(getDefaultStat);

export default StatsStorage;
