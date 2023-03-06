const range = document.getElementById('range');
const unorderList = document.querySelector('ul');
const button = document.querySelector('button');
const h1 = document.querySelector('h1');
const img = document.querySelector('img');

let allLists;
//let x =9;

range.addEventListener('input', createLists);
button.addEventListener('click', colorRefresh);

function createLists(event) {

    let x = +event.target.value;
    console.log(x);
    unorderList.textContent = '';

    for (let y = 1; y <= x; y++) {

        const list = document.createElement('li');
        list.classList.add('color-palet');

        unorderList.append(list);

        allLists = document.querySelectorAll('li');

    }
}

function colorRefresh() {

    h1.textContent = '';
    //item.innerHTML='';


    allLists.forEach(function (item) {

        item.innerHTML = '';
        let ramdoxHex = Math.floor(Math.random() * 0xffffff).toString(16);
        ramdoxHex = `#${ramdoxHex.padStart(6, '0')} `;


        item.style.backgroundColor = ramdoxHex;
        // item.innerHTML=`<div class="colorName">${ramdoxHex}</div>`;


        item.addEventListener('click', getColors);

        function getColors() {

            if (item.innerHTML == '<img src="checked (1).png" alt="">') {

                // console.log('click');
                item.innerHTML = '';

            } else {

                h1.textContent = ramdoxHex;
                item.innerHTML = `<img src="checked (1).png" alt="">`;
                console.log(ramdoxHex);
            }
        }

    })
}







