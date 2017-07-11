/**
 * Created by i.lovenkov on 13.07.17.
 */

'use strict';

import {Constants, DateTime} from 'models';

const constObj = new Constants();

export class State {

    activeTab; // активкая вкладка (календарь/часы)
    calendarTab; // активная вкладка у календаря (годы/месяцы/недели)
    date; // объект DateTime
    show; // скрыть/показать компонент

    constructor(params) {
        this.activeTab = constObj.tab.CALENDAR;
        this.calendarTab = constObj.calendar.WEEK; // todo заменить на YEAR (c) Илья
        this.date = new DateTime(new Date());
        this.show = true;

        if (params) {
            if (params.hasOwnProperty('activeTab') && Object.keys(constObj.tab).includes(params.activeTab)) {
                this.activeTab = params.activeTab;
            }

            if (params.hasOwnProperty('calendarTab') && Object.keys(constObj.calendar).includes(params.calendarTab)) {
                this.calendarTab = params.calendarTab;
            }

            if (params.hasOwnProperty('date')) {
                if (params.date instanceof DateTime) {
                    this.date = params.date;
                } else if (params.date instanceof Date) {
                    this.date = new DateTime(params.date);
                } else {
                    this.date = new DateTime();
                }
            }

            if (params.hasOwnProperty('show')) {
                this.show = params.show;
            }
        }
    }
}