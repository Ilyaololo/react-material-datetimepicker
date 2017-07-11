/**
 * Created by i.lovenkov on 12.07.17.
 */

'use strict';

import moment from 'moment';

// const MOMENT_DATE_FORMAT_ISO = 'YYYY-MM-DD[T]HH:mm:ss.SSSZZ';

export class DateTime {

    day; // день
    month; // месяц
    year; // год
    week; // номер недели
    weekDay; // день недели
    hour; // час
    minute; // минута
    timeZone; // часовой пояс

    static formats = {
        day: 'DD',
        month: 'MM',
        year: 'YYYY',
        week: 'WW',
        weekDay: 'E',
        hour: 'HH',
        minute: 'mm',
        timeZone: 'zz',
    };

    constructor(params) {
        let _date = moment();

        this.day = _date.format(DateTime.formats.day);
        this.month = _date.format(DateTime.formats.month);
        this.year = _date.format(DateTime.formats.year);
        this.week = _date.format(DateTime.formats.week);
        this.weekDay = _date.format(DateTime.formats.weekDay);
        this.hour = _date.format(DateTime.formats.hour);
        this.minute = _date.format(DateTime.formats.minute);
        this.timeZone = _date.format(DateTime.formats.timeZone);

        if (params) {
            if (params instanceof Date || moment(params).isValid()) {
                _date = moment(params);
            } else if (moment.isMoment(params)) {
                _date = params;
            }

            this.day = _date.format(DateTime.formats.day);
            this.month = _date.format(DateTime.formats.month);
            this.year = _date.format(DateTime.formats.year);
            this.week = _date.format(DateTime.formats.week);
            this.weekDay = _date.format(DateTime.formats.weekDay);
            this.hour = _date.format(DateTime.formats.hour);
            this.minute = _date.format(DateTime.formats.minute);
            this.timeZone = _date.format(DateTime.formats.timeZone);
        }
    }
}