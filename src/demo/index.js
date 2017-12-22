import Functions from "./../lib";



function immediateFunction(){
    console.log("I am Immediate Function");
}

function frameFunction(){
    console.log("I am Frame Function", functions.executingLaterInNextTickCount);
}

function frameFunctionSecond(){
    console.log("I am Frame Function Second", functions.executingLaterInNextTickCount);
}

function listenersDone(){
	console.log("All Function executed");
}

function frameFunctionDone(){
	console.log("All frame Function executed", functions.executingLaterInNextTickCount);
}
const functions = new Functions(listenersDone,frameFunctionDone);
functions.addListener(window,frameFunctionSecond, true, 1);
functions.addListener(window,frameFunction, true );
functions.addListener(window,immediateFunction);

console.log("trigger 1");

functions.triggerListeners();
// 2 entries
functions.removeListener(window,frameFunctionSecond, functions.triggerListeners.bind(functions));
console.log("Remove frame function");
// 3rd entry
functions.removeListener(window,immediateFunction);
console.log("Remove Immediate function");

console.log("trigger 2");
functions.triggerListeners();
