'use script'

import str from './arr.js'



const arrStr = str.trim().split("\n").map(function(numberString) {
   
    return parseInt(numberString, 10); 
});

function maxNumber(arrStr) {
    if (arrStr.length === 0) {
        return undefined; 
    }
    return arrStr.reduce((max, current) => max > current ? max : current);
         
}
function minNumber(arrStr) {
    if (arrStr.length === 0) {
        return undefined; 
    }
    return arrStr.reduce((min, current) => min < current ? min : current);
         
}

function average(arrStr) {
    if (arrStr.length === 0) {
        return undefined; 
    }
    const sum = arrStr.reduce((total, num) => total + num, 0);
    return (sum / arrStr.length).toFixed(4);
         
}

function median(arrStr) {
    const sortedArr = arrStr.toSorted((a,b)=>a-b);
    const middleIndex = Math.floor(sortedArr.length / 2);

    if (sortedArr.length % 2 === 0) {
        return (sortedArr[middleIndex - 1] + sortedArr[middleIndex]) / 2;
    } else {
        return sortedArr[middleIndex];
    }
}

const input = document.querySelectorAll('.input')

input.forEach(inputElement => {
    switch(inputElement.name) {
        case 'maxNumber':
            inputElement.value = maxNumber(arrStr);
            break;
        case 'minNumber':
            inputElement.value = minNumber(arrStr);
            break;
        case 'average':
            inputElement.value = average(arrStr);
            break;
        case 'median':
            inputElement.value = median(arrStr);
            break;
        default:
            inputElement.value = '';
    }
});
