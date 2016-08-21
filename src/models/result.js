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

    constructor(RaceService, RiderService, data) {
        this.RaceService = RaceService;
        this.RiderService = RiderService;
        
        this.race = data.race;
        this.result = data.result;
        //this.riderSlug = data.rider;
    }

    activate() {
        this.RaceService.load(this.raceSlug).then(race => {
            this.race = race;
        });

        this.RiderService.load(this.riderSlug).then(rider => {
            this.rider = rider;
        });
    }
}
