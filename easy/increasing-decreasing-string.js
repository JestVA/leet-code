// https://leetcode.com/problems/increasing-decreasing-string/

/**
 * @param {string} s
 * @return {string}
 */
const sortString = s => {

// TODO: implement algorithm
	//	Pick the smallest character from s and append it to the result.
	//	Pick the smallest character from s which is greater than the last appended character to the result and append it.
	//	Repeat step 2 until you cannot pick more characters.
	//	Pick the largest character from s and append it to the result.
	//	Pick the largest character from s which is smaller than the last appended character to the result and append it.
	//	Repeat step 5 until you cannot pick more characters.
	//	Repeat the steps from 1 to 6 until you pick all characters from s.
	const charCodes = s.split(',').map(c => c.charCodeAt());

	



};