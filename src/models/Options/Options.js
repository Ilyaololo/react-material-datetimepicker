/**
 * Created by i.lovenkov on 11.07.17.
 */

'use strict';

export class Options {

    calendar; // настройки календаря
    clock; // настройки часов
    formats; // формат вывода всех дат
    lang; // язык

    constructor(params) {
        this.lang = 'ru';

        this.calendar = {
            leftOffset: 100, // -100 от текущего года
            rightOffset: 50, // +50 к текущему году
        };

        this.clock = {
            hour: {
                max: 23, // максимально возможный час
                min: 0, // минимально возможный час
                step: 1, // шаг
            },
            minute: {
                max: 55, // максимально возможная минута
                min: 0, // минимально возможная минута
                step: 5, // шаг
            }
        };

        this.formats = {
            day: 'DD', // день
            month: 'MMMM', // месяц
            year: 'YYYY', // год
            week: 'WW', // номер недели
            weekDay: 'dddd', // день недели
            hour: 'HH', // час
            minute: 'mm', // минута
            timeZone: 'zz', // часовой пояс
        };

        if (params) {
            if (params.lang) {
                this.lang = params.lang;
            }

            if (params.calendar) {
                this.calendar = {
                    ...this.calendar,
                    ...params.calendar,
                };
            }

            if (params.formats) {
                this.formats = {
                    ...this.formats,
                    ...params.formats,
                };
            }

            if (params.clock) {
                this.clock = {
                    hour: {
                        ...this.clock.hour,
                        ...params.clock.hour,
                    },
                    minute: {
                        ...this.clock.minute,
                        ...params.clock.minute,
                    },
                };
            }
        }
    }
}