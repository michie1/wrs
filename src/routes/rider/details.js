import {inject} from 'aurelia-framework';  

import {Rider} from '../../models/rider';
import {RiderService} from '../../services/data/rider';
import {ResultService} from '../../services/data/result';

@inject(RiderService, ResultService)
export class RiderDetails {

    constructor(riderService, resultService) {
        this.riderService = riderService;
        this.resultService = resultService;
    }

    activate(params) {
        this.riderService.load(params.slug).then(rider => {
            this.rider = rider;
        });

        this.resultService.load('rider', params.slug).then(results => {
            this.results = results;
        });
    }
}
