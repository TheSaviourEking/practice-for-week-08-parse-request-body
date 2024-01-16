function firstStep(input) {
    // Your code here
    return input.replace("&", " ").split(" ");
}
let pInput = "username=azure+green&password=password%21";
let res = fifthStep(fourthStep(thirdStep(secondStep(firstStep("username=azure+green&password=password%21")))));
console.log(res);

function secondStep(input) {
    // Your code here
    return input.map(pair => pair.split('='));
}

function thirdStep(input) {
    // Your code here
    return input.map(pair => {
	return pair.map(value => value.replace(/\+/g, ' '));
    });
}

function fourthStep(input) {
    // Your code here
    return input.map(pair => pair.map(value => decodeURIComponent(value)))
}

function fifthStep(input) {
    // Your code here
    // console.log(input);
    // return input.reduce((accumulator, currentValue) => {
    // });
    // const res = {};
    // input.forEach(pairs => {
    // 	res[pairs[0]] = pairs[1];
    // });
    
    const res = input.reduce((accumulator, pairs) => {
	accumulator[pairs[0]] = pairs[1];
	return accumulator;
    }, {});
    return res;
}

function parseBody(str) {
    // Your code here
    const reqBody = str;
    const keyValuePairs = firstStep(reqBody);
    const arr2DkeyValuePairs = secondStep(keyValuePairs);
    const replacePlusSigns = thirdStep(arr2DkeyValuePairs);
    const decodedValues = fourthStep(replacePlusSigns);
    const object = fifthStep(decodedValues);
    
    return object;
}

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = {
  firstStep,
  secondStep,
  thirdStep,
  fourthStep,
  fifthStep,
  parseBody
};
