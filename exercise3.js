function dupeList(list) {
    newList = [];
    for (var i = 0; i < list.length; i++) {
        // console.log("this is i at the OUTER for loop: " + i);
        // console.log("this is the list item at the OUTER for loop: " + list[i]);
        for (var x = i+1; x < list.length; x++) {
            // console.log('this is x in the INNER for loop: ' + x);
            // console.log('this is the comparison item in the INNER for loop: ' + list[x]);
            if (list[i] === list[x]) {
                // console.log("print something");
                if (newList.indexOf(list[i]) < 0) {
                    newList.push(list[i]);
                    // console.log(newList);
                }
            }
        }
    }
    return newList;
}


var votesToGoEatCake = [true, true, true, true];
var hackbrightStudents = ["katie", "amy", "jenny", "katie", "kelley", "katie", "amy"];
var randomJunkIFound = ["katie", "true",  true, 19, "gargoyles", "!", 2 + 3, "2 + 3", 19, "19", 19 === "19", 6, false, false];

// var classroomIds = [47, 12, 19, 22, 26, 99, 30, 50, 324, 003, 44, 33, 346, 354, 44, 235, 45, 34, 44, 590, 09, 099, 0, 1, 3, 33, 999, 9];
// returns: [44, 33, 9, 3, 99]
// should be: [44, 33 ]
// T: 44, 9, 3 (should have 33, correctly doesn't have 99)

console.log(dupeList(classroomIds));