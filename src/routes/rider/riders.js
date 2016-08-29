import {inject} from 'aurelia-framework';  

import {Rider} from '../../models/rider';
import {RiderService} from '../../services/data/rider';

@inject(RiderService)
export class RidersIndex {

    riders = [];

    constructor(riderService) {
        this.riderService = riderService;
    }

    activate() {
        this.riderService.load().then(riders => {
            this.riders = riders;
        });
    }
}
