import {inject} from 'aurelia-framework';
import {RaceService} from '../../services/data/race';
import {Router, Redirect} from 'aurelia-router';

@inject(RaceService, Router)
export class Add {
    rider;
    race;
    result;
    note;

    submitted = false;

    constructor(raceService, router) {
        this.raceService = raceService;
        this.router = router;
    }

    activate(params) {
        this.raceService.load(params.slug, params.date).then(race => {
            this.race = race;
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
