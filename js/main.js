let nameFood;
let valueFood = 0;
let nameDrink;
let valueDrink = 0;
let nameDessert;
let valueDessert = 0;
let totalValueOrder = 0;

function selectionItemFood(selectedFood, colectedNameFood, colectedValueFood) {
    const teste = document.querySelector('.selected-item-food');
    if (teste !== null) {
        teste.classList.remove('selected-item-food');
    }

    selectedFood.classList.add('selected-item-food');
    nameFood = colectedNameFood;
    valueFood = colectedValueFood;
    enableContinue();
}

function selectionItemDrink(selectedDrink, colectedNameDrink, colectedValueDrink) {
    const teste = document.querySelector('.selected-item-drink');
    if (teste !== null) {
        teste.classList.remove('selected-item-drink');
    }

    selectedDrink.classList.add('selected-item-drink');
    nameDrink = colectedNameDrink;
    valueDrink = colectedValueDrink;
    enableContinue();
}

function selectionItemDessert(selectedDessert, colectedNameDessert, colectedValueDessert) {
    const teste = document.querySelector('.selected-item-dessert');
    if (teste !== null) {
        teste.classList.remove('selected-item-dessert');
    }

    selectedDessert.classList.add('selected-item-dessert');
    nameDessert = colectedNameDessert;
    valueDessert = colectedValueDessert;
    enableContinue();
}

function enableContinue() {
    if (valueFood && valueDrink && valueDessert) {
        document.querySelector('.button-continue').classList.add('enable-continue');
        document.querySelector('.button-continue').innerHTML = 'Fechar pedido';
    }
}

function completeOrder() {
    if (valueFood && valueDrink && valueDessert) {
        totalValueOrder = (valueFood + valueDrink + valueDessert).toFixed(2);

        document.querySelector('#chosen-food').innerHTML = nameFood;
        document.querySelector('#price-food').innerHTML = valueFood.toLocaleString('PT');

        document.querySelector('#chosen-drink').innerHTML = nameDrink;
        document.querySelector('#price-drink').innerHTML = valueDrink.toLocaleString('PT');

        document.querySelector('#chosen-dessert').innerHTML = nameDessert;
        document.querySelector('#price-dessert').innerHTML = valueDessert.toLocaleString('PT');

        document.querySelector('#total-order').innerHTML = `R$ ${totalValueOrder}`;
        showHideOrder();
    }
}

function showHideOrder() {
    document.querySelector('.container-finish-order').classList.toggle('show-cfo');
}

function openWhatsappMessage() {
    const nameClient = prompt('Antes de avançarmos, conta pra gente seu nome: ');
    const addressClient = prompt('Precisamos saber onde entregaremos seu super pedido: ');

    const messageOrder = `
Olá, gostaria de fazer o pedido:
- Prato: ${nameFood}
- Bebida: ${nameDrink}
- Sobremesa: ${nameDessert}
Total: R$ ${totalValueOrder}

Nome: ${nameClient}
Endereço: ${addressClient}
`;

    const urlMessage = `https://wa.me/${5581999998888}?text=${encodeURIComponent(messageOrder)}`;
    window.open(urlMessage, '_blank');
}