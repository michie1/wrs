import {inject} from 'aurelia-framework';

import {RaceService} from '../../services/data/race';
import {ResultService} from '../../services/data/result';

@inject(RaceService, ResultService)
export class RaceDetails {
    constructor(raceService, resultService) {
        this.raceService = raceService;
        this.resultService = resultService;
    }

    activate(params) {
        this.raceService.load(params.slug, params.date).then(race => {
            this.race = race;
        });

        this.resultService.load('race', params.slug, params.date).then(results => {
            this.results = results;
        });
    }
}
