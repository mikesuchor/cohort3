document.addEventListener('DOMContentLoaded', function () {
    document.querySelector("#add-item").addEventListener("click", () => {
        document.querySelector("#list-of-stuff").appendChild(document.createElement("li"));
    });
    
    document.querySelector("#show-items").addEventListener("click", () => {
        console.log(document.querySelectorAll("li"));
        document.querySelectorAll("li").forEach((element) => {
            document.querySelector("#output-area").append(element.innerHTML);
        });
    });
});
