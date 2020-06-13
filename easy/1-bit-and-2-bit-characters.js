/*
	Link: https://leetcode.com/problems/1-bit-and-2-bit-characters/
*/

/**
 * @param {number[]} bits
 * @return {boolean}
 */

const isOneBitCharacter = bits => {
	// if only 1 bit then true
	if (bits.length == 1) return true;

	// [1,0,0], [1,1,0]
	// look at bit before last
	if (bits[bits.length - 2] === 1) return false;

	return true;

	// ok so can't do this imperatively,
	// the sequence of bits [] I think has random test cases up to 1,000 length
	if (bits.length > 3) return false;

	// need a decoder function
};
