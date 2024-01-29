let iota_counter = 0;

/* 
// iota func
function iota(reset: boolean = false) {
  if (reset) {
    iota_counter = 0;
  }
  let result = iota_counter;
  iota_counter++;
  return result;
}

// iota operations declarations
const OP_PUSH: number = iota(true); // 0
const OP_PLUS: number = iota(); // 1
const OP_DUMP: number = iota(); // 2
const COUNT_OPS: number = iota(); // 3 
*/

// instead of using iota we can use this
enum OPS {
  OP_PUSH,
  OP_PLUS,
  OP_DUMP,
  COUNT_OPS,
}

// just the operation type
type OP_Type = number[];

// what the operations do

function push(x: number) {
  return [OPS.OP_PUSH, x];
}

function plus() {
  return [OPS.OP_PLUS];
}

function dump() {
  return [OPS.OP_DUMP];
}

function simulate_program(program: OP_Type[]) {
  let stack: number[] = [];

  program.map((op: OP_Type) => {
    if (OPS.COUNT_OPS > 3) {
      throw new Error("Exhaustive handling of operations in simulation");
    }

    if (op[0] === OPS.OP_PUSH) {
      stack.push(op[1] as number);
    } else if (op[0] === OPS.OP_PLUS) {
      let a = stack.pop();
      let b = stack.pop();
      if (a !== undefined && b !== undefined) {
        stack.push(a + b);
      }
    } else if (op[0] == OPS.OP_DUMP) {
      let a = stack.pop();
      console.log(a);
    } else {
      throw new Error("ERROR: Unreachable!");
    }
  });
}

const program: OP_Type[] = [push(22), push(80), plus(), dump()];
simulate_program(program);
