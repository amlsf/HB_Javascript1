function returnDuplicates(list) {
    var countDict = {};
    for (var index = 0; index < list.length; index++) {
        var potentialKey = list[index];
        var type = typeof potentialKey;
        var len = potentialKey.toString().length;
        if (countDict[potentialKey]) {
            for (var key in countDict) {
                var keyLen = key.toString().length;
                // console.log("type of key: " +typeof key);
                // console.log("type of potential key: " + type);
                // console.log("length of key: " + keyLen);
                // console.log("length of potential key: " + len);
                if (typeof key == type  && len == keyLen ) {
                    countDict[potentialKey] +=1;
                }
               else {
                countDict[potentialKey] = 1;
               }
            }
        }
        else {
            countDict[potentialKey] = 1;
        }
    }

    console.log(countDict);
    
    var dupList = [];
    for (var k in countDict) {
        if (countDict[k] > 1) {
            dupList.push(k);
        }
    }
    return dupList;
}

var votesToGoEatCake = [true, true, true, true];
var hackbrightStudents = ["katie", "amy", "jenny", "katie", "kelley", "katie", "amy"];
var classroomIds = [47, 12, 19, 22, 26, 99, 30, 50, 324, 003, 44, 33, 346, 354, 44, 235, 45, 34, 44, 590, 09, 099, 0, 1, 3, 33, 999, 9];
var randomJunkIFound = ["katie", "true",  true, 19, "gargoyles", "!", 2 + 3, "2 + 3", 19, "19", 19 === "19", 6, false, false];
// TODO try with 5 (vs. 2+3)

console.log(returnDuplicates(votesToGoEatCake));
//console.log(returnDuplicates(hackbrightStudents));
//console.log(returnDuplicates(classroomIds));
//console.log(returnDuplicates(randomJunkIFound));

// dict.key returns value only, didn't work above in if stmt because not set yet
// dict[key] can set value