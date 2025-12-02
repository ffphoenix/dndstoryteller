import type { Spell } from "../../../../../generated/api";
import createDataStorage from "../../../../components/crud/createDataStorage";

const getDefaultSpell = () => ({
  id: 0,
  systemId: 0,
  name: "",
  description: "",
  school: "",
  subschool: "",
  level: "",
  range: "",
  duration: "",
});
const SpellsStorage = createDataStorage<Spell>(getDefaultSpell);

export default SpellsStorage;
