import { QBit } from "../QBit";

export const cAndGate = (bit1: QBit, bit2: QBit): void => {
  const bit1Value = bit1.read();
  if (bit1Value) {
    bit2.probability = 1 - bit2.probability;
  }
}
