/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

const palindromes = [];

const determineIsPalindromeProduct = (n1, n2) =>
{
	const productArr = [...`${n1 * n2}`];

	const hasOddMiddle = !!(productArr.length % 2);
	
	const sliceIndexStart = Math.ceil(productArr.length / 2);

	const [a,b] = [productArr.slice(0, hasOddMiddle ? sliceIndexStart - 1 : sliceIndexStart), productArr.slice(sliceIndexStart)]; 

	if(a.join`` === b.reverse().join``)
	{
		palindromes.push({ palindrome: (n1 * n2), n1, n2 });
	}

	return false;
}

for(let n1 = 100; n1 < 1000; n1++)
{
 	for(let n2 = 100; n2 < 1000; n2++)
 	{
 		determineIsPalindromeProduct(n1, n2);
 	}
};

if(! palindromes.length)
	return console.log("No palindromes found.")

const sortedPals = palindromes.sort((p1, p2) => p2.palindrome - p1.palindrome);

console.log(`Largest palindrome is ${sortedPals[0].palindrome}, product of ${sortedPals[0].n1} and ${sortedPals[0].n2}. From a total number of ${palindromes.length} palindromes found`);