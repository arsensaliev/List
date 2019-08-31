window.onload = function () {
    
    'use strict';
    let item = document.getElementsByClassName('akkordeon-list-item');
    let arrow = document.getElementsByTagName('i');

    for (let i = 0; i < item.length; i++) {
        item[i].addEventListener('click', function (e) {
            let target = e.target;
            if (target & target.classList.contains('akkordeon-list-item') ||
                target.classList.contains('akkordeon-list-item-descr') ||
                target.classList.contains('title') ||
                target.classList.contains('fa-sort-desc')) {
                removeActive();
            
                item[i].classList.add('akkordeon-list-item_active');
                arrow[i].classList.add('fa-sort-asc');

            }
        })

    }
    
    function removeActive(a) {
        for (let j = 0; j < item.length; j++) {
            if (item[j].classList.contains('akkordeon-list-item_active')) {
                item[j].classList.remove('akkordeon-list-item_active');
                arrow[j].classList.remove('fa-sort-asc');
                arrow[j].classList.add('fa-sort-desc');
                      
            }
        }
    }
}