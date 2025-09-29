class MaxHeap {
  constructor() {
    this.items = [];
  }

  size() {
    return this.items.length;
  }

  push(value) {
    this.items.push(value);
    this.bubbleUp(this.items.length - 1);
  }

  pop() {
    if (this.items.length === 0) return 0;
    if (this.items.length === 1) return this.items.pop();

    const max = this.items[0];
    this.items[0] = this.items.pop();
    this.bubbleDown(0);
    return max;
  }

  bubbleUp(index) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.items[index] <= this.items[parentIndex]) break;
      this.swap(parentIndex, index);
      index = parentIndex;
    }
  }

  bubbleDown(index) {
    const n = this.size();

    while (true) {
      const left = index * 2 + 1;
      const right = index * 2 + 2;
      let largest = index;

      if (left < n && this.items[left] > this.items[largest]) largest = left;
      if (right < n && this.items[right] > this.items[largest]) largest = right;

      if (largest === index) break;
      this.swap(index, largest);
      index = largest;
    }
  }

  swap(a, b) {
    [this.items[a], this.items[b]] = [this.items[b], this.items[a]];
  }
}

function solution(input) {
  const [N, M] = input[0].split(" ").map(Number);
  const gifts = input[1].split(" ").map(Number);
  const wishes = input[2].split(" ").map(Number);
  const heap = new MaxHeap();

  for (let i = 0; i < N; i++) heap.push(gifts[i]);

  for (let j = 0; j < M; j++) {
    const nowWish = wishes[j];
    const maxGift = heap.pop();

    if (maxGift < nowWish) {
      console.log(0);
      return;
    }
    const remain = maxGift - nowWish;
    if (remain > 0) heap.push(remain);
  }

  console.log(1);
}

const input = [];
require("readline")
  .createInterface({ input: process.stdin, output: process.stdout })
  .on("line", (line) => input.push(line))
  .on("close", () => {
    solution(input);
    process.exit();
  });
