// console.log("hello world");

let iota_counter = 0;

// iota func
function iota(reset: boolean = false) {
  if (reset) {
    iota_counter = 0;
  }
  let result = iota_counter;
  return result;
}

const OP_PUSH = iota(true);
const OP_PLUS = iota();
const OP_DUMP = iota();
const COUNT_OPS = iota();

function push(x: number) {
  return [OP_PUSH, x];
}

function plus() {
  return [OP_PLUS];
}

function dump() {
  return [OP_DUMP];
}

// function simulate_pro

const program = [push(20), push(80), plus(), dump()];
// console.log(program);
