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
