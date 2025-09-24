class MinHeap {
  constructor() {
    this.items = [];
  }

  size() {
    return this.items.length;
  }

  push(value) {
    this.items.push(value);
    this._bubbleUp(this.items.length - 1);
  }

  pop() {
    if (this.size() === 0) return 0;
    if (this.size() === 1) return this.items.pop();

    const min = this.items[0];
    this.items[0] = this.items.pop();
    this._bubbleDown(0);
    return min;
  }

  _bubbleUp(index) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.items[parentIndex] <= this.items[index]) break;
      this._swap(parentIndex, index);
      index = parentIndex;
    }
  }

  _bubbleDown(index) {
    const n = this.size();
    while (true) {
      const left = index * 2 + 1;
      const right = index * 2 + 2;
      let smallest = index;

      if (left < n && this.items[left] < this.items[smallest]) {
        smallest = left;
      }
      if (right < n && this.items[right] < this.items[smallest]) {
        smallest = right;
      }
      if (smallest === index) break;

      this._swap(index, smallest);
      index = smallest;
    }
  }

  _swap(i, j) {
    [this.items[i], this.items[j]] = [this.items[j], this.items[i]];
  }
}

function solution(input) {
  const N = Number(input[0]);
  const heap = new MinHeap();
  const out = [];

  for (let i = 1; i <= N; i++) {
    const x = Number(input[i]);
    if (x === 0) out.push(heap.pop());
    else heap.push(x);
  }

  console.log(out.join("\n"));
}

const input = [];
require("readline")
  .createInterface({ input: process.stdin, output: process.stdout })
  .on("line", (line) => input.push(line))
  .on("close", () => {
    solution(input);
    process.exit();
  });
