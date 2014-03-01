/* take a list
for list[i] in the list
loop through and
if list[i] == list[j]
newList.push()*/

myList = ["apple","apple","orange","pig","brie","apple","brie"];
classroomIds = [47, 12, 19, 22, 26, 99, 30, 50, 324, 003, 44, 33, 346, 354, 44, 235, 45, 34, 44, 590, 09, 099, 0, 1, 3, 33, 999, 9];

// Should return in no particular order:
// [44, 33]

function createDupList(aList){
    var dupList = [];
    truthy = false;
    for(j = 0; j < aList.length; j++){
        //console.log("I'm going to be looking for matches of"+aList[j]);
        lookingfor = aList[j];
        searchList = myList;
        searchList.splice(j,1);
        for(var i = searchList.length-1; i >=0; i--){
            //console.log("Does "+lookingfor+" match "+searchList[i]+"?");
            if(searchList[i] == lookingfor){
                //console.log("The list looks like"+aList);
                searchList.splice(i,1);
                //console.log("I just tried to splice"+aList);
                truthy = true;
                //console.log("I found a match so I set truthy to"+truthy);
            }
        }
        if (truthy === true){
            //console.log("Truthy was true, dupList right now"+dupList);
            dupList.push(lookingfor);
            //console.log("I added it to the dupList"+dupList);
        }
        truthy = false;
    }return dupList;
}
//function dupList(aList)
console.log(createDupList(myList));