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

  peek() {
    return this.items[0];
  }
}

function solution(input) {
  const [giantNum, sentiHeight, hammerCountLimit] = input[0]
    .split(" ")
    .map(Number);
  const giantsHeight = input.slice(1).map(Number);
  let hammerCount = 0;
  const heap = new MaxHeap();

  for (let i = 0; i < giantNum; i++) {
    heap.push(giantsHeight[i]);
  }

  while (
    hammerCount < hammerCountLimit &&
    sentiHeight <= heap.peek() &&
    1 < heap.peek()
  ) {
    let tallestGiant = heap.peek();

    if (tallestGiant < sentiHeight) {
      console.log("YES");
      console.log(hammerCount);

      return;
    }

    const top = Math.floor(heap.pop() / 2);
    heap.push(top);
    hammerCount++;
  }

  if (heap.peek() < sentiHeight) {
    console.log("YES");
    console.log(hammerCount);
  } else {
    console.log("NO");
    console.log(heap.peek());
  }
}

const input = [];
require("readline")
  .createInterface({ input: process.stdin, output: process.stdout })
  .on("line", (line) => input.push(line))
  .on("close", () => {
    solution(input);
    process.exit();
  });
