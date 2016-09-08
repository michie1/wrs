import {inject} from 'aurelia-framework';
import {HttpClient, json} from 'aurelia-fetch-client';

import {Race} from '../../models/race';

@inject(HttpClient)
export class RaceService {
    http;

    constructor(http) {
        this.http = http;
    }

    fetchRace(slug, date) {
        return this.http.fetch('races/' + date +  '/' + slug)
            .then(response => response.json())
    }

    fetchRaces() {
        return this.http.fetch('races')
            .then(response => response.json());
    }

    load(slug, date) {
        if (slug === undefined) { 
            return this.fetchRaces()
                .then(races => {
                    return races.map(data => {
                        return new Race(data);
                    });
                });
        } else { 
            return this.fetchRace(slug, date).then(data => new Race(data));
        }
    }

    create(race) {
        return this.http.fetch('race', {
            method: 'post',
            body: json({
                name: race.name,
                date: race.date,
                category: race.category
            })
        }).then((response) => {
            return response.json();
        });
    }
}
