import type { System } from "../../../../../generated/api";
import createDataStorage from "../../../../components/crud/createDataStorage";

const getDefaultSystem = () => ({
  id: 0,
  user_id: 0,
  name: "",
  description: "",
  is_public: false,
});
const systemsStorage = createDataStorage<System>(getDefaultSystem);

export default systemsStorage;
