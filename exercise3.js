function returnDuplicates(list) {
    var countDict = {};
    for (var index = 0; index < list.length; index++) {
        potentialKey = list[index];
        if (countDict[potentialKey]) {
            countDict[potentialKey] += 1;
        }
        else {
            countDict[potentialKey] = 1;
        }
    }
    return countDict;
}

var x = ['panther', 'frog', 'panther', 'cat', 2, 3, 2, 1];

console.log(returnDuplicates(x));

// dict.key returns value only, didn't work above in if stmt because not set yet
// dict[key] can set value