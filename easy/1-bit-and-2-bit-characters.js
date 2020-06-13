/*
	Link: https://leetcode.com/problems/1-bit-and-2-bit-characters/
*/

/**
 * @param {number[]} bits
 * @return {boolean}
 */

const isOneBitCharacter = bits => {
	let l = bits.length;
	let isBit = false;

	while (bits.length > 0) {
		for (let i = 0; i < bits.length; i++) {
			if (bits[i] === 0 && i === 0) {
				bits.splice(i, 1);
				isBit = true;
				break;
			}

			if ((bits[i] === 1 && bits[i + 1] === 0) || bits[i + 1] === 1) {
				bits.splice(i, 2);
				if (bits.length === 0) isBit = false;
				break;
			}
		}
	}

	return isBit;
};
