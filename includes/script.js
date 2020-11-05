function call() {
        var result = document.getElementById('result');
}
function call2() {
        result.value = eval(result.value);
}
addEventListener('click', (e) => {
        screenvalue = e.target.innerText;
        if (screenvalue == 'DEL') {
                // console.log(result.value.toString());
        }
        else {
                result.value += screenvalue;
        }
})