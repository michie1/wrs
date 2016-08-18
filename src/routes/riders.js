import {inject} from 'aurelia-framework';  

import {Rider} from '../models/rider';
import {RiderService} from '../services/data/rider';

@inject(RiderService)
export class RidersIndex {

    riders = [];

    constructor(RiderService) {
        this.RiderService = RiderService;
    }

    activate() {
		this.RiderService.load().then(riders => {
			this.riders = riders;
		});
    }
}
