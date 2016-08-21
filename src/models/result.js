import {inject} from 'aurelia-framework';

export class Result {

    result = 0;

    category: '(A)-Elite-Mannen/Beloften/Amateurs';
    comment: '';

    constructor(data) {
        this.result = data.result;
        if (data.hasOwnProperty('race')) {
            this.race = data.race;
        } else if (data.hasOwnProperty('rider')) {
            this.rider = data.rider;
        }
    }
}
