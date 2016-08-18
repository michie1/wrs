import {inject} from 'aurelia-framework';  

import {Race} from '../models/rider';
import {RaceService} from '../services/data/race';

@inject(RaceService)
export class RacesIndex {

    races = [];

    constructor(RaceService) {
        this.RaceService = RaceService;
    }

    activate() {
		this.RaceService.load().then(races => {
			this.races = races;
		});
    }
}
