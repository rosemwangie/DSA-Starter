function isValidSubsequence(array, sequence) {
  let arrayIndex = 0;  
  let sequenceIndex = 0; 
  const lenSequence = sequence.length;
  const lenArray = array.length;
  while(arrayIndex < lenArray && sequenceIndex < lenSequence ){
    if (array[arrayIndex] === sequence[sequenceIndex]) 
      sequenceIndex++; 
      arrayIndex++;
  }
    return sequenceIndex === lenSequence;
}