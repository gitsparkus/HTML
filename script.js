const menuActive = document.querySelector('.menu_list'); // Находим меню
const headerMenu = document.querySelector('.btn_menu'); // Находим кнопку бургера

function toggleMenu() {
    menuActive.classList.toggle('hidden'); //Ф-ция удаляет или устанавливает класс с названием 'hidden' в div с классом .menu-active
}

headerMenu.addEventListener('click', toggleMenu); // По клику на бургер срабатывает ф-ция