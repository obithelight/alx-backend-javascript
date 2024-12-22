const calculateNumber = (type, a, b) => {
  a = Math.round(a);
  b = Math.round(b);

  if (type == 'SUM') {
    return a + b;
  }

  if (type == 'SUBTRACT') {
    return a - b;
  }

  if (type == 'DIVIDE') {
    if (b == 0)
	  return 'Error';
    return a / b;
  }
}

// CommonJS syntax
// module.exports = calculateNumber;

// ES module syntax
export default calculateNumber;

// ES module syntax requires that package.json is updated with "type": "module"
