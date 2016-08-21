import {inject} from 'aurelia-framework';

//import {Race} from '../models/rider';
import {RaceService} from '../services/data/race';

@inject(RaceService)
export class RacesIndex {

    races = [];

    constructor(raceService) {
        this.raceService = raceService;
    }

    activate() {
        this.raceService.load().then(races => {
            this.races = races;
        });
    }
}
