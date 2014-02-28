var votesToGoEatCake = [true, true, true, true];
var hackbrightStudents = ["katie", "amy", "jenny", "katie", "kelley", "katie", "amy"];
var classroomIds = [47, 12, 19, 22, 26, 99, 30, 50, 324, 003, 44, 33, 346, 354, 44, 235, 45, 34, 44, 590, 09, 099, 0, 1, 3, 33, 999, 9];
var randomJunkIFound = ["katie", "true",  true, 19, "gargoyles", "!", 2 + 3, "2 + 3", 19, "19", 19 === "19", 6, false, false];
// TODO try with 5 (vs. 2+3)
// NOTE dict.key returns value only, didn't work above in if stmt because not set yet
// dict[key] can set value

console.log(returnDuplicates(votesToGoEatCake));
//console.log(returnDuplicates(hackbrightStudents));
//console.log(returnDuplicates(classroomIds));
//console.log(returnDuplicates(randomJunkIFound));



// try with splicing
function duplicates(list):
    var dupl = []
    for (var i = 0; i < list.length -1; i++) {
        for (var x = i+1; x < list.length; x++) {
            if (list[i] === list[x]) {
                delete list[i]
                break
            }
        }
    }



// Creating funtions to check for length and type and find in 

// function checkTypeLen(a, b) {
//     var aLen = a.toString().length;
//     var bLen = b.toString().length;
//     if ((typeof a === typeof b) && (aLen === bLen)) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// console.log(checkTypeLen(003,3));


// function findInList(item,list) {
//     var tab = false;
//     i = 0;
//     for (var i = 0; i < list.length; i++) {
//         if (item === list[i]) {
//             tab = true;
//             }
//         }
//         return tab;
//     }


// function dupeList(list) {
//     newList = [];
//     for (var i = 0; i < list.length; i++) {
//         if findInList(list[i], list.splice(i+1)) {
//             newList.push(list[i]);
//             }
//         }
//     }



function returnDuplicates(list) {
    returnList = [];
    for (var i = 0; i < list.length - 1 ; i++) {
        if (list[i] === list[i+1]) {
            for (var x = 0; x < returnList.length; x++) {
                if (list[i] !== returnList[x] && x == returnList.length -1) {
        else:             
                }
            }
        }
    }
   
    return returnList;
}


function returnDuplicates(list) {
dupList = []
len = list.length 
var iter = 1
for (i = 1; i < list.length - 1; i++) {
    if (list[i] === list[iter])
        for (x = 1; x < dup.length - 1; x++) {
            if list[0] === dupList[x]
                delete list[0]
            else: 
    
    dlete list[0]

    }            append to dupList


        append item to new list
}

