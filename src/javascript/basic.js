console.log("Hello World from basic.js");

document.getElementById("myInput").addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        onButtonClicked();
    }
})
document.getElementById("myButton").addEventListener("click", onButtonClicked);

function onButtonClicked() {
    const inputValue = document.getElementById("myInput").value;
    const result = document.getElementById("result");
    result.innerHTML = Number(inputValue) ? size(inputValue) : "PLEASE ENTER A NUMBER";
    document.body.style.background = `linear-gradient(to right, ${getRandomColor()}, ${getRandomColor()})`;
    result.classList.add('animated', 'bounceIn');
    result.addEventListener('animationend', function() {result.classList.remove('animated', 'bounceIn');});
}

function size(number) {
    return (number < 10)
        ? `${number} IS SMALL`
        : (number <= 19)
            ? `${number} IS MEDIUM`
            : `${number} IS LARGE`;
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}