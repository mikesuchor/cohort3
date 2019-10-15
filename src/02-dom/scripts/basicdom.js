const listOfStuff = document.querySelector("#list-of-stuff");
const outputList = document.querySelector("#output-list");

document.querySelector("#add-item").addEventListener("click", () => {
    listOfStuff.appendChild(document.createElement("li"));
});

document.querySelector("#show-items").addEventListener("click", () => {
    outputList.innerText = "";
    if(listOfStuff.childElementCount !== outputList.childElementCount) {
        document.querySelectorAll("li").forEach((element) => {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(element.innerText));
            outputList.appendChild(li);
        });
    }
});