import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

import {Race} from '../../models/race';

@inject(HttpClient)
export class RaceService {
    constructor(http) {
        this.http = http;
    } 

    load(slug) {
        if(slug === undefined) { // load all
            return this.http.fetch('races')
                .then(response => response.json())
                .then(races => {
                    return races.map(data => {
                        return new Race(data);
                    });
                });
        } else { // load specific one
            let dashes = slug.split('-');
            let date = dashes.slice(0, 3).join('-');
            let nameUnderscore = dashes.slice(3).join(' ');

            return this.http.fetch('races?name_like=' + nameUnderscore + '&date=' + date)
            .then(response => response.json())
            .then(response => response[0])
            .then(data => new Race(data));
        }
    }
}
