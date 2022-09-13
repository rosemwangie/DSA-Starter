# Hash Tables
A **hash table** (hash map) is a data structure which implements an _associative array_ abstract data type, a structure that can _map keys
to values_. A hash table uses a _hash function_ to compute an index into an array of buckets or slots, from which the desired value can be found.
Ideally, the hash function will assign each key to a unique bucket, but most hash table designs employ an imperfect hash function, which might cause hash
collisions where the hash function generates the same index for more than one key. Such collisions must be accommodated in some way.

Hash collision resolved by separate chaining.

<aside>
💡 Overview : Hashing is the most common example of a space-time tradeoff(better than array). Instead of linearly searching an array every time to determine if an element is present, which takes O(n) T. We can traverse the array once and hash all the elements into hash table. Accessing the values is O(1) time.
</aside>

### Definition
  - It’s a data structure that implements an associative array abstract data type.
  - A map uses a hash function on an element to compute an index(hashcode), into an array of buckets/slots where a desired value can be found
### Pros and cons
  **pros**
    - Search - O(1)
    - Insert - O(1)
    - Remove - O(1)
  **cons**
    - **Collisions**
      - Separate chaining - A linked list in used for each value, so that it stores all the collided items
      - Open addressing - All entry records are stored in the bucket array itself. When a new entry has to be inserted, the buckets are examined, starting with the hashed-to slot and proceeding in some probe sequence until an unoccupied slot is found.
### Resources (to help better understand maps)
  1. [Taking hash tables off the shelf](https://medium.com/basecs/taking-hash-tables-off-the-shelf-139cbf4752f0)
  2. [**Hashing out functions**](https://medium.com/basecs/hashing-out-hash-functions-ea5dd8beb4dd)
  3. [Hash tables: coursera](https://www.coursera.org/lecture/data-structures-optimizing-performance/core-hash-tables-m7UuP)
### Sample General questions
  1. Describe an implementation of at least- used cache, and big-O notation of it
  2. A question involving an API’s integration with hash map where the buckets of a hash map are made up of linked lists.
### Check below leetcode questions (to enhance understanding)
  1. [two sum](https://leetcode.com/problems/two-sum/) [solution in JavaScript](https://github.com/RWambui/Data-structure-JS-and-Psuedo/blob/main/src/leetcode/1.TwoSum.js) <b style='color:green'>Easy</b>
  2. [Ransom note](https://leetcode.com/problems/ransom-note/) <b style='color:orange'>Meduim</b>
  3. [Group Anagrams](https://leetcode.com/problems/group-anagrams/) <b style='color:green'>Medium</b>
  4. [Insert Delete GetRandom O(1)](https://leetcode.com/problems/insert-delete-getrandom-o1/) <b style='color:orange'>Medium</b>
  5. [First Missing Positive](https://leetcode.com/problems/first-missing-positive/) <b style='color:orange'>Medium</b>
  6. [LRU Cache**](https://leetcode.com/problems/lru-cache/) <b style='color:orange'>Medium</b>
  7. [All O one Data Structure](https://leetcode.com/problems/all-oone-data-structure/) <b style='color:red'>Hard</b>

### References
