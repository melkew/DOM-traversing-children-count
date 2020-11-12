console.log("*** Aufgabe 1 ***");
const parentWrapper = document.querySelector('#wrapper');
console.log(parentWrapper.childElementCount);

console.log(parentWrapper.children.length);

for (child of parentWrapper.children) {
    console.log(child)
}



console.log("*** Aufgabe 2 ***");

const highestNumberOfClasses = (element) => {
    const childrenElement = element.children;
    result = {
        element: null,
        classCount:0
    }
    for (child of childrenElement){
        if (child.classList.length>result.classCount) {
            result.element = child.nodeName;
            result.classCount = child.classList.length;
        }

    }
    console.log(result)
   
}

highestNumberOfClasses(parentWrapper);