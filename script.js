function displayContent(content){
    if(inputText.value.length<14)
        inputText.value += content
}

function calcClear(){
    inputText.value = ""
}

function displayResult(){
    inputText.value = eval(inputText.value)
}

function backspace(){
    inputText.value = inputText.value.slice(0,-1)
}
