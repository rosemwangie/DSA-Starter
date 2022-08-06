const longestSubstring = (s) => {
  let len = s.length;
  if (len <= 0) return 0;
  let startIdx = 0;
  let longestSub = 0;
  const hash = {};
  for(let lastIdx = 0; lastIdx < len; lastIdx++){
    const currentIdx = s[lastIdx];
    const prevSeenChar =hash[currentIdx];
    if (prevSeenChar >= startIdx){
      startIdx = prevSeenChar + 1;
    }
    hash[currentIdx] = lastIdx;
    longestSub = Math.max(lastIdx - startIdx + 1)
  }
  return longestSub;
}