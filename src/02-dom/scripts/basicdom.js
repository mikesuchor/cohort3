const listOfStuff = document.querySelector("#basic-dom-list-of-stuff");
const outputList = document.querySelector("#basic-dom-output-list");

document.querySelector("#basic-dom-add-item").addEventListener("click", () => {
    listOfStuff.appendChild(document.createElement("li"));
});

document.querySelector("#basic-dom-show-items").addEventListener("click", () => {
    outputList.innerText = "";
    document.querySelectorAll("li").forEach((element) => {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(element.innerText));
        outputList.appendChild(li);
    });
});

document.querySelector("#basic-dom-delete-item").addEventListener("click", () => {
    const listItems = listOfStuff.querySelectorAll("li");
    const lastItem = listItems[listItems.length - 1]
    lastItem.parentNode.removeChild(lastItem);
});