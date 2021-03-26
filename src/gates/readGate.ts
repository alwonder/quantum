import { CBit } from "../CBit";
import { QBit } from "../QBit";

export const readGate = (qBit: QBit, cBit: CBit): void => {
  cBit.value = qBit.read();
}
