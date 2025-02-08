document.getElementById('textInput').addEventListener('blur', function() {
    let inputValue = this.value;

    // spanタグに入力された値を表示
    document.getElementById('displayText').textContent = inputValue;
});