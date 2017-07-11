/**
 * Created by i.lovenkov on 13.07.17.
 */

'use strict';

export class Constants {

    calendar;
    tab;
    type;

    constructor() {
        this.calendar = {
            MONTH: 'month',
            WEEK: 'week',
            YEAR: 'year',
        };

        this.type = {
            ALL: 'all',
            ONLY_CALENDAR: 'only-calendar',
            ONLY_CLOCK: 'only-clock',
        };

        this.tab = {
            CALENDAR: 'calendar',
            CLOCK: 'clock',
        };
    }
}