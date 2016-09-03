import {inject} from 'aurelia-framework';
import {RaceService} from '../../services/data/race';
import {RiderService} from '../../services/data/rider';
import {ResultService} from '../../services/data/result';
import {Router, Redirect} from 'aurelia-router';

@inject(RaceService, RiderService, ResultService, Router)
export class Add {
    rider;
    race;
    races;
    riders;
    result;
    note;

    submitted = false;

    raceComparer = (a, b) => a.slug === b.slug && a.date === b.date;

    constructor(raceService, riderService, resultService, router) {
        this.raceService = raceService;
        this.riderService = riderService;
        this.resultService = resultService;
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
        //console.log(this.race.name, this.race.slug, this.race.date);
        //console.log(this.rider.name, this.rider.slug);
            // riderName, riderSlug, raceName, raceSlug, raceDate, result
        this.resultService.create({
            riderName: this.rider.name,
            riderSlug: this.rider.slug,
            raceName: this.race.name,
            raceSlug: this.race.slug,
            raceDate: this.race.date,
            result: this.result
        }).then((response) => {
            console.log(response);
            
            this.router.navigateToRoute('race', {
                'slug': this.race.slug,
                'date': this.race.date
            });
        });
    }
}
