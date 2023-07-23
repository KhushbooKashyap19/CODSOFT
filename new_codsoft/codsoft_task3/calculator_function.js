let screen_display = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen_display.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen_display.value = screenValue;
        }
        else if (buttonText == '=') {
            screen_display.value = eval(screenValue);
        }
        else if(buttonText == 'Del')
        {
            screen_display.value=screen_display.value.slice(0,-1);
        }
        else {
            screenValue += buttonText;
            screen_display.value = screenValue;
        }

    })
}

