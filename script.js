const button = document.getElementById("button-drawer");



function getValues() {
    const inputOne = Math.ceil(document.getElementById("number-one").value);
    const inputTwo = Math.floor(document.getElementById("random-number").value);

    const drawer = Math.floor(Math.random() * (inputTwo - inputOne + 1)) + inputOne;

    alert(drawer);

}








button.addEventListener("click", getValues)