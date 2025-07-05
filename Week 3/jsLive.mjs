const input = ["listen", "silent", "enlist", "eat", "tea", "tan", "nat", "dfg"];

function groupAnagrams(words) {
  const map = new Map();

  for (const word of words) {
    // Sort the word's characters
    const sorted = word.split('').sort().join('');
    
    // Group anagrams by sorted key
    if (!map.has(sorted)) {
      map.set(sorted, []);
    }
    map.get(sorted).push(word);

    console.log("map: ", map);
  }

  // Convert map values to array of arrays
  return Array.from(map.values());
}

const result = groupAnagrams(input);
console.log(result);
