import { CBit } from "./CBit";
import { cAndGate } from "./gates/cAndGate";
import { hGate } from "./gates/hGate";
import { readGate } from "./gates/readGate";
import { QBit } from "./QBit";

export class QCircuit {
  private qBits: QBit[] = [];
  private cBits: CBit[] = [];

  private commandsQueue: ((...args: any[]) => void)[] = [];

  constructor(public qBitsCount: number, public cBitsCount: number) {}

  public run(): void {
    this.qBits = [];
    this.cBits = [];
    for (let i = 0; i < this.qBitsCount; i++) {
      this.qBits.push(new QBit(0));
    }
    for (let i = 0; i < this.cBitsCount; i++) {
      this.cBits.push(new CBit());
    }

    this.commandsQueue.forEach((command) => command());
    console.log(this.cBits.map((bit) => bit.value ? '1' : '0').join(' '))
  }

  public h(qBitIndex: number): this {
    this.commandsQueue.push(() => hGate(this.qBits[qBitIndex]));
    return this;
  }

  public cAnd(qBit1Index: number, qBit2Index: number): this {
    this.commandsQueue.push(() => cAndGate(this.qBits[qBit1Index], this.qBits[qBit2Index]));
    return this;
  }

  public read(qBitIndex: number, cBitIndex: number): this {
    this.commandsQueue.push(() => readGate(this.qBits[qBitIndex], this.cBits[cBitIndex]));
    return this;
  }
}
