import { QCircuit } from "./QCircuit";

const circuit = new QCircuit(2, 2);
circuit
  .h(0)
  .cAnd(0, 1)
  .read(0, 0)
  .read(1, 1)
  .run();
