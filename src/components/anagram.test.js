const isAnagram = require('./anagram');

test('isAnagram function exists', () => {
    expect(typeof isAnagram).toEqual('function')
});

test('"cinema" is an anagram of "iceman"', () => {
    expect(isAnagram('cinema', 'iceman')).toBeTruthy();
});

test('"dormitory" is an anagram of "dirty room##"', () => {
    expect(isAnagram('dormitory', 'dirty room##')).toBeTruthy();
});

test('"hello" is NOT an anagram of "ahola"', () => {
    expect(isAnagram('hello', 'ahola')).toBeFalsy();
});
