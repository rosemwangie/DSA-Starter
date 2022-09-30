/*You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.
Letters are case sensitive, so "a" is considered a different type of stone from "A". */


const numJewelsInStones = (J, S) =>  {
  let count = 0;
  const jewelHashMap = {};

  for (const jewels of J){
    jewelHashMap[jewels] = true;
  }

  for(const stones of S) {
      if (stones in jewelHashMap) count++;
  }
  return count;
};