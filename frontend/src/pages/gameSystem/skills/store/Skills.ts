import type { Skill } from "../../../../../generated/api";
import createDataStorage from "../../../../components/crud/createDataStorage";

const getDefaultStat = () => ({
  id: 0,
  systemId: 0,
  name: "",
  description: "",
  check: "",
  tryAgain: "",
  action: "",
});
const StatsStorage = createDataStorage<Skill>(getDefaultStat);

export default StatsStorage;
