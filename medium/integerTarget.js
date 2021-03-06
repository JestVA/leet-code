/*
	Given an array of integers, n and an integer target k, find if two integers exist in n that have a sum of k
*/

const testingFunction = (fun) =>
{
	if(typeof fun !== "function")
		throw new Error("Could not find a solution function.");

	const givenTests = [
		{
			set: [1, 2, 3, 4, 5, 6, 7, 8, 9],
			target: 12,
			exists: true
		},
		{
			set: [1, 2, 3, 4, 5, 6, 7, 8, 9],
			target: 20,
			exists: false
		},
		{
			set: [3, 6, 9],
			target: 8,
			exists: false
		},
		{
			set: [3, 6, 9],
			target: 9,
			exists: true
		},
		{
			set: [3, 1, 0, -2, 6, 9],
			target: 1,
			exists: true
		}
	];

	console.log("Initialising tests...", givenTests.length);

	givenTests.forEach((test, i) => 
	{
		const assertResult = fun(test.set, test.target);

		if(assertResult === test.exists)
			console.log(`Passing test ${i + 1}, target ${test.target} should be ${test.exists} and was ${assertResult}`);
		else
			console.log(`Test ${i + 1} failed, target ${test.target} should exist: ${test.exists}, value provided was ${assertResult}`);
	});
}

const assertor = fun => testingFunction(fun);

const findIntTargetExists = (intArray, target) =>
{
	let foundT = false;

	for(let i = intArray.length - 1; i >= 0; i--)
	{
		if(foundT)
			break;

		for(let j = 0; j < intArray.length; j++)
		{
			foundT = target === (intArray[j] + intArray[i]);

			if(foundT)
				break;
		}
	}

	return foundT;
};

// run here
assertor(findIntTargetExists);


/*
	DOCS:
	Some day, implement something more clever... 
	e.g. Sliding window: https://stackoverflow.com/questions/8269916/what-is-sliding-window-algorithm-examples
*/