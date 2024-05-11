const button = document.getElementById("button-drawer");



function getValues() {
    const inputOne = Math.ceil(document.getElementById("number-one").value);
    const inputTwo = Math.floor(document.getElementById("random-number").value);

    if (inputOne < inputTwo) {
        const drawer = Math.floor(Math.random() * (inputTwo - inputOne + 1)) + inputOne;

        alert(drawer);

    } else if(inputOne >= inputTwo) {

        alert("O Primeiro Número PRECISA ser menor que o primero");
    }
    

}








button.addEventListener("click", getValues)