

const mergeTimeRanges = (ranges, threshold) => {
  if (!ranges || ranges.length === 0) return [];

 
  const sortedRanges = ranges.sort((a, b) => a[0] - b[0]);

  const merged = [];
  let current = [...sortedRanges[0]]; 

  for (let i = 1; i < sortedRanges.length; i++) {
    const [currStart, currEnd] = sortedRanges[i];
    const [lastStart, lastEnd] = current;

   
    if (currStart <= lastEnd || currStart - lastEnd <= threshold) {
      
      current[1] = Math.max(lastEnd, currEnd);
    } else {
      
      merged.push(current);
      current = [currStart, currEnd];
    }
  }

 
  merged.push(current);

  return merged;
}

module.exports = {
  mergeTimeRanges
}
