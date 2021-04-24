window.onload = function () {
    const motherContainer = document.querySelector('.motherContainer');
    const refreshButton = document.querySelector('.refreshButton');

    for (let i = 1; i <= 100; i++) {
        let createDiv = document.createElement('div');
        createDiv.className = 'motherContainer__box';
        motherContainer.appendChild(createDiv)
    }

    function generateColor() {
        let chars = '0123456789abcdef'
        let CodeLength = 6;
        let color = ''
        for (let i = 0; i < CodeLength; i++) {
            let randomNumber = Math.floor(Math.random() * chars.length)
            color += chars.substring(randomNumber, randomNumber + 1)
        }
        return '#' + color
    }

    let allBoxes = document.querySelectorAll('.motherContainer__box')
    refreshButton.onclick = () => {
        allBoxes.forEach(e => {
            let finalColor = generateColor()
            e.style.backgroundColor = finalColor;
            e.innerHTML = finalColor;
            e.onclick = function () {
                copyText(e)
            }
        })
    }

    function copyText(inputElement) {
        if (!inputElement) {
            return;
        } else {
            let mainText = inputElement.innerText;
            let createInput = document.createElement('input')
            createInput.setAttribute('value', mainText)
            document.body.appendChild(createInput);
            createInput.select()
            document.execCommand('copy')
            createInput.parentNode.removeChild(createInput)
            alert('Copied!')
        }
    }
}