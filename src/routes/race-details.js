import {inject} from 'aurelia-framework';  

import {Race} from '../models/race';
import {RaceService} from '../services/data/race';
import {ResultService} from '../services/data/result';

@inject(RaceService, ResultService)
export class RaceDetails {

    constructor(RaceService, ResultService) {
        this.RaceService = RaceService;
        this.ResultService = ResultService;
    }

    activate(params) {
        this.RaceService.load(params.slug).then(race => {
            this.race = race;
        });

        this.ResultService.load('race', params.slug).then(results => {
            this.results = results;
        });
    }
}
