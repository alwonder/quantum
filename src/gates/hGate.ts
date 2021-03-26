import { QBit } from "../QBit";

export const hGate = (bit: QBit): void => {
  bit.probability = 0.5;
}
