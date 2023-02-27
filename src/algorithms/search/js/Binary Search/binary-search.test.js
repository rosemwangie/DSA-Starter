const BinarySearch = require('./binary-search-implementation');

describe('binarySearch', () => {
  const binarySearch = new BinarySearch();

  test('should search number in sorted array', () => {
    expect(binarySearch.search([], 1)).toBe(-1);
    expect(binarySearch.search([1], 1)).toBe(0);
    expect(binarySearch.search([1, 2], 1)).toBe(0);
    expect(binarySearch.search([1, 2], 2)).toBe(1);
    expect(binarySearch.search([1, 5, 10, 12], 1)).toBe(0);
    expect(binarySearch.search([1, 2, 19, 29, 34, 37, 42, 104], 37)).toBe(5);
    expect(binarySearch.search([1, 2, 19, 29, 34, 37, 42, 104], 1)).toBe(0);
    expect(binarySearch.search([1, 2, 19, 29, 34, 37, 42, 104], 104)).toBe(7);
    expect(binarySearch.search([1, 2, 19, 29, 34, 37, 42, 104], 0)).toBe(-1);
  });

  test('should search object in sorted array', () => {
    const sortedArrayOfObjects = [
      { key: 1, value: 'value1' },
      { key: 2, value: 'value2' },
      { key: 3, value: 'value3' },
    ];

    const comparator = (a, b) => {
      if (a.key === b.key) return 0;
      return a.key < b.key ? -1 : 1;
    };

    expect(binarySearch.search([], { key: 1 })).toBe(-1);
    expect(
      binarySearch.search(sortedArrayOfObjects, { key: 4 }, comparator)
    ).toBe(-1);
    expect(
      binarySearch.search(sortedArrayOfObjects, { key: 1 }, comparator)
    ).toBe(0);
    expect(
      binarySearch.search(sortedArrayOfObjects, { key: 2 }, comparator)
    ).toBe(1);
    expect(
      binarySearch.search(sortedArrayOfObjects, { key: 3 }, comparator)
    ).toBe(2);
  });
});
