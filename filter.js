const text = document.querySelectorAll(`.list-group-item`)
const input = document.querySelector (`.form-control`)


let getInput = input.addEventListener(`input`, () => {

    let TextLow = input.value.toLowerCase()

    text.forEach( elem => {
        allValue = elem.textContent.toLowerCase();

        if (!allValue.includes(TextLow)) {
            elem.classList.add (`hide`)
        } else {
            elem.classList.remove (`hide`)

        }
    })

})