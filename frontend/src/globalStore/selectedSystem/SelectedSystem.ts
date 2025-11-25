import { observable } from "mobx";
import type { System } from "../../../generated/api";

export default observable({
  id: null,
  name: null,
  description: null,
} as unknown as System);
