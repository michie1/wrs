import {inject} from 'aurelia-framework';
import {RaceService} from '../../services/data/race';
import {Race} from '../../models/race';
import {Router, Redirect} from 'aurelia-router';
import moment from 'moment';

@inject(RaceService, Router)
export class Add {
    name = 'Tijdelijk Standaard';
    date;

    category = 'criterium';
    categories = ['criterium', 'klassieker', 'tijdrit'];

    submitted = false;

    constructor(raceService, router) {
        this.raceService = raceService;
        this.router = router;
        this.date = moment().format('YYYY-MM-DD').toString(); // today
    }

    add() {
        this.submitted = true;
        var race = new Race({
            name: this.name,
            date: this.date,
            category: this.category,
        });
        this.raceService.create(race).then((response) => {
            this.router.navigateToRoute('race', {
                slug: race.slug,
                date: race.date
            });
        });
    }
}
