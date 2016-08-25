import {inject} from 'aurelia-framework';
import {RaceService} from '../../services/data/race';

@inject(RaceService)
export class Add {

    category = 'Criterium';
    categories = ['Criterium', 'Klassieker', 'Tijdrit'];

    name = '';

    date = '2016-08-25'; 

    submitted = false;

    constructor(raceService) {
        console.log('Add race constructor');
        this.raceService = raceService;
    }

    create() {
        this.submitted = true;
        this.raceService.create({
            name: this.name,
            date: this.date,
            category: this.category,
        }).then((response) => {
            console.log(response);
        });
    }
}
