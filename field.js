'use strict'

let field = document.querySelector('.checkers_field');
/* Массив из букв латинского алфавита */
let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function evenCheck(num) {
    /*Проверка индекса ячейка на четность
    num + 1 т.к. индекс ячеек начинается с нуля  */
   return (num + 1)%2 === 0 ? true : false;
}


/* Возвращает строку таблицы, принимая на вход два параметра
horizontal - индекс строки в таблице
vertical - rколичество ячеек в строке */
function getTableRow(horizontal, cellCount) {

    let even_status;
    /* Создаем элемент - строка таблицы */
    let tableRow = document.createElement('tr');

    /* Задаем строке класс и индекс по горизонтали */
    tableRow.classList = 'row';
    tableRow.setAttribute('data-horizontale', horizontal);


    if(evenCheck(horizontal)){
        even_status = 'even_row'
    }else {
        even_status = 'not_even_row'
    }

    /* Каждую итерацию создает ячейку и добавляет ее в строку*/
    for(let i = 0; i < cellCount; i++){ 

        let cell = `
                <td class = 'cell ${even_status}' data-horizontale = '${horizontal}' data-verticale = '${i}'></td>
            `

        tableRow.insertAdjacentHTML('beforeend', cell )
    }
    return tableRow
}


/* По заданным количеству строк и столбцов отрисовывает таблицу */
function getBoard(rowCount, columCount) {
    for(let i = 0; i < rowCount; i++) {
        field.insertAdjacentElement('afterbegin', getTableRow(i, columCount))
    }
}

getBoard(8, 8);

