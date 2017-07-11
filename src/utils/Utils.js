/**
 * Created by i.lovenkov on 11.07.17.
 */

'use strict';

/* eslint no-console: "off" */

export class Utils {

    /**
     * Вывод сообщения в консоль
     * @param {string} message
     */
    static warn(message) {
        console.warn(message);
    }

    /**
     * Метод генерации имени класса
     * @param {boolean} active
     * @param {string} activeClass
     * @param {string} baseClass
     * @returns {string}
     */
    static className({active, activeClass = 'active', baseClass = ''}) {
        if (active) {
            return `${baseClass} ${baseClass}_${activeClass}`;
        }

        return baseClass;
    }

    /**
     * Метод получения массива с номерами недель
     * @param {number} count - число недель
     * @param {number} cur  - текущаяя неделя
     * @param {number} max - максимальное число недель в году
     * @returns {Array}
     */
    static getWeeksNumbers({count = 6, cur = 1, max = 52}) {
        return new Array(count) // создаем массив
            .fill(null) // заполняем его null (чтобы работал map())
            .map((item, i) => cur + i) // заполняем массив
            .map((item) => { // редактируем массив (если выходим за max, то начинаем нумерацию заново)
                if (item > max) {
                    return item - max;
                }

                return item;
            });
    }

    /**
     * Создание диапазона значений
     * @param {number} cur - текущее установленное значение
     * @param {number} max - максимально допустимое значение
     * @param {number} min - минимально допустимое значение
     * @param {number} offset - отступы от текущего значения (рендерим только определенный отрезок из массива)
     * @param {number} step - шаг, с которым нужно увеличивать следующее значение при заполнении массива
     * @returns {Array}
     */
    static range({min, max, cur, offset = 2, step = 1}) {
        return new Array((max - min) + 1) // создаем пустой массив
            .fill(null) // заполняем его null (чтобы работал метод reduce)
            .reduce((prev, cur, i) => ([...prev, min + (i * step)]), []) // заполняем массив
            .filter((el) => { // фильтруем
                const item = parseInt(el, 10);

                if (item >= min && item <= max) { // ограничиваем выход значение за min и max
                    if (cur - offset <= min) {
                        return (item <= min + (offset * 2));
                    } else if (cur + offset >= max) {
                        return (item >= max - (offset * 2));
                    }

                    return ((item >= cur - offset) && (item <= cur + offset));
                }

                return false;
            });
    }
}