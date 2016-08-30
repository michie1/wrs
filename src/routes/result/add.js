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

    raceComparer = (a, b) => a.slug === b.slug && a.date === b.date;

    constructor(raceService, riderService, router) {
        this.raceService = raceService;
        this.riderService = riderService;
        this.router = router;
    }

    activate(params) {
       
        this.race = {
            slug: params.slug,
            date: params.date
        };
        
        this.riderService.load().then(riders => {
            this.riders = riders;
        });

        this.raceService.load().then(races => {
            this.races = races;
        });
    }

    add() {
        //this.submitted = true;
        console.log(this.race.date, this.race.slug);
        console.log(this.rider);
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
