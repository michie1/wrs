import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

import {Race} from '../../models/race';

@inject(HttpClient)
export class RaceService {
    http;

    constructor(http) {
        this.http = http;
    }

    load(slug, date) {
        if (slug === undefined) { // load all
            return this.http.fetch('races')
                .then(response => {
                    return response.json()
                })
                .then(races => {
                    return races.map(data => {
                        return new Race(data);
                    });
                });
        } else { // load specific one
            return this.http.fetch('races/' + date +  '/' + slug)
            .then(response => response.json())
            .then(data => new Race(data));
        }
    }
}
