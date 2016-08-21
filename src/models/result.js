import {inject} from 'aurelia-framework';

import {RaceService} from '../services/data/race';
import {RiderService} from '../services/data/rider';

@inject(RaceService, RiderService)
export class Result {

    raceSlug = '';
    riderSlug = '';
    result = 0;

    category: '(A)-Elite-Mannen/Beloften/Amateurs';
    comment: '';

    constructor(raceService, riderService, data) {
        this.RaceService = raceService;
        this.RiderService = riderService;

        this.result = data.result;
        if (data.hasOwnProperty('race')) {
            this.race = data.race;
        } else if (data.hasOwnProperty('rider')) {
            this.rider = data.rider;
        }
    }
}
