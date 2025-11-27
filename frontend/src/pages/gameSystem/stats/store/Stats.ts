import type { Stat } from "../../../../../generated/api";
import createDataStorage from "../../../../components/crud/createDataStorage";

const getDefaultStat = () => ({
  id: 0,
  system_id: 0,
  name: "",
  description: "",
  is_hidden: false,
});
const StatsStorage = createDataStorage<Stat>(getDefaultStat);

export default StatsStorage;
