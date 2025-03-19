function sol(input) {
  const n = parseInt(input[0]);
  const tree = {};

  for (let i = 1; i <= n; i++) {
    const [node, left, right] = input[i].split(" ");
    tree[node] = { left, right };
  }

  function preorder(node) {
    if (node === ".") return "";
    let ret = `${node}`;
    ret += preorder(tree[node].left);
    ret += preorder(tree[node].right);
    return ret;
  }

  function inorder(node) {
    if (node === ".") return "";
    let ret = "";
    ret += inorder(tree[node].left);
    ret += `${node}`;
    ret += inorder(tree[node].right);
    return ret;
  }

  function postorder(node) {
    if (node === ".") return "";
    let ret = "";
    ret += postorder(tree[node].left);
    ret += postorder(tree[node].right);
    ret += `${node}`;
    return ret;
  }

  const pre = preorder("A");
  const ino = inorder("A");
  const post = postorder("A");

  return pre + "\n" + ino + "\n" + post;
}

const input = [];
require("readline")
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (line) => {
    input.push(line);
  })
  .on("close", () => {
    console.log(sol(input));
    process.exit();
  });
