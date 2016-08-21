import {inject} from 'aurelia-framework';

import {RaceService} from '../services/data/race';
import {ResultService} from '../services/data/result';

@inject(RaceService, ResultService)
export class RaceDetails {
    constructor(raceService, resultService) {
        this.RaceService = raceService;
        this.ResultService = resultService;
    }

    activate(params) {
        this.RaceService.load(params.slug, params.date).then(race => {
            this.race = race;
        });

        this.ResultService.load('race', params.slug, params.date).then(results => {
            console.log(results);
            this.results = results;
        });
    }
}
