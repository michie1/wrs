import {inject} from 'aurelia-framework';  

import {Rider} from '../models/rider';
import {RiderService} from '../services/data/rider';
import {ResultService} from '../services/data/result';

@inject(RiderService, ResultService)
export class RiderDetails {

    constructor(RiderService, ResultService) {
        this.RiderService = RiderService;
        this.ResultService = ResultService;
    }

    activate(params) {
        this.RiderService.load(params.slug).then(rider => {
            this.rider = rider;
        });

        this.ResultService.load('rider', params.slug).then(results => {
            this.results = results;
        });
    }
}
