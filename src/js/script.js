function clicou() {

    const ul = document.querySelector('ul');

    let item = document.querySelector('.item');

    let newLi = document.createElement('li');

    let newCheckbox = document.createElement('input');
    newCheckbox.type = "checkbox";

    let newLabel = document.createElement('label');

    let item_valor = item.value
    if (item_valor != '') {

        newCheckbox.setAttribute('id', 'item_' + item_valor.replace(/\s/g, '_'));
        newCheckbox.setAttribute('class', 'checkbox');


        newCheckbox.setAttribute('name', 'item_' + item_valor.replace(/\s/g, '_'));

        newLabel.setAttribute('for', 'item_' + item_valor.replace(/\s/g, '_'));
        newLabel.textContent = item_valor;

        newLi.appendChild(newCheckbox);
        newLi.appendChild(newLabel);
        ul.appendChild(newLi);

        adicionaEvento(newCheckbox);

        item.value = '';
    }
}

let input = document.querySelector('.item');

input.addEventListener('keyup', function (e) {
    if (e.code === "Enter") {
        clicou();
    }
})

const checkboxes = document.querySelectorAll("input[type='checkbox']");

checkboxes.forEach(function (checkbox) {
    adicionaEvento(checkbox);
})

function adicionaEvento(checkbox) {
    checkbox.addEventListener('change', function (e) {
        let checkId = document.querySelector(`#${e.target.id}`);

        let pai = checkId.parentNode;
        if (e.target.checked) {
            pai.style.background = "#00e20087";
        } else {
            pai.style.background = "transparent";
        }
    })
}