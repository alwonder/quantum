export class QBit {
  private value?: boolean;
  public tangledQBit: QBit;

  constructor(public probability: number = 0) {
    this.probability = probability
  }

  public read(): boolean {
    if (this.value === undefined) {
      this.value = Math.random() < this.probability;

      if (this.tangledQBit) {
        this.tangledQBit.value = !this.value;
      }
    }
    return this.value;
  }

  public tangle(qBit: QBit): void {
    if (this.tangledQBit || qBit.tangledQBit) return;

    this.tangledQBit = qBit;
    qBit.tangledQBit = this;
  }

  public isDetermined(): boolean {
    return this.value !== undefined;
  }
}
