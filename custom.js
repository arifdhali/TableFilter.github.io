
'use strict';
let value = document.getElementById("search");
value.addEventListener("keyup", getFilter);

function getFilter() {
    let filterValue = value.value.toUpperCase();
    let tr = document.querySelectorAll('tr');
    for (let i of tr) {
        let trValue = i.querySelector('td');
        if (trValue) {
            let trCheck = trValue.innerHTML || trValue.innerText;
            if (trCheck.toUpperCase().indexOf(filterValue) > -1) {
                i.style.display = '';
            } else {
                i.style.display = 'none';
            }
        }


    }


}