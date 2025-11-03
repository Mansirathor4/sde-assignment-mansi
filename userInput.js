const readline = require('readline');
const { mergeTimeRanges } = require('./mergeTimeRanges');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter ranges (e.g. [[1000,2000],[2500,4000]]): ", (rangesInput) => {
  rl.question("Enter threshold value: ", (thresholdInput) => {
    try {
      const ranges = JSON.parse(rangesInput);
      const threshold = Number(thresholdInput);

      if (!Array.isArray(ranges)) {
        console.log(" Invalid input! Ranges must be an array.");
      } else {
        const result = mergeTimeRanges(ranges, threshold);
        console.log("\n Merged Output:");
        console.log(result);
      }
    } catch (error) {
      console.log("Invalid JSON format! Please try again.");
    }

    rl.close();
  });
});
