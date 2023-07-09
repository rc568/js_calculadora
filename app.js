const allBtn = document.querySelectorAll('div button')
const display = document.querySelector('#display')
const rstDisplay = () => {
    display.innerText = 0;
}

const num1 = 0;
const num2 = 0;


// Adding events to buttons
for (const btn of allBtn) {
    console.log(btn)
    if (btn.id === "rst") {
        btn.addEventListener('click', rstDisplay)
    }
    else {
        btn.addEventListener('click', () => {
            if (display.innerText.startsWith("0", 0)) {
                display.innerText = ""
            }
            display.innerText += btn.innerText
        })
    }
}
