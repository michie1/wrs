import {inject} from 'aurelia-framework';
import {RaceService} from '../../services/data/race';
import {RiderService} from '../../services/data/rider';
import {Router, Redirect} from 'aurelia-router';

@inject(RaceService, RiderService, Router)
export class Add {
    rider;
    race;
    races;
    riders;
    result;
    note;

    submitted = false;

    constructor(raceService, riderService, router) {
        this.raceService = raceService;
        this.riderService = riderService;
        this.router = router;
    }

    activate(params) {
        this.raceService.load(params.slug, params.date).then(race => {
            this.race = race;
        });

        this.riderService.load().then(riders => {
            this.riders = riders;
        });
    }

    add() {
        this.submitted = true;
        /*
        this.raceService.create({
            name: this.name,
            date: this.date,
            category: this.category,
        }).then((response) => {
            console.log(response);
            
            this.router.navigateToRoute('race', {
                'slug': response.slug,
                'date': response.date
            });
        });
        */
    }
}
