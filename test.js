const add = require('./index');

if (add(2, 3) === 5) {
  console.log("✅ Test Passed!");
  process.exit(0); // Success
} else {
  console.log("❌ Test Failed!");
  process.exit(1); // Failure (This stops the CI pipeline)
}
