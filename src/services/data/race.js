import {inject} from 'aurelia-framework';
import {HttpClient, json} from 'aurelia-fetch-client';

import {Race} from '../../models/race';

@inject(HttpClient)
export class RaceService {
    http;

    //constructor() {
        //this.http = http;
    //}

    fetchRace(slug, date) {
        return this.http.fetch('races/' + date +  '/' + slug)
            .then(response => response.json())
    }

    fetchRaces() {
        return this.http.fetch('races')
            .then(response => response.json());
    }

    load(slug, date) {
        if (slug === undefined) { // load all
            /*
            return this.http.fetch('races')
                .then(response => {
                    return response.json()
                })
                .then(races => {
                    return races.map(data => {
                        return new Race(data);
                    });
                });
               */
            return this.fetchRaces()
                .then(races => {
                    return races.map(data => {
                        return new Race(data);
                    });
                });
        } else { // load specific one
            /*
            return this.http.fetch('races/' + date +  '/' + slug)
            .then(response => response.json())
            .then(data => new Race(data));
            */
            return this.fetchRace(slug, date).then(data => new Race(data));
        }
    }

    create(data) {
        return this.http.fetch('race', {
            method: 'post',
            body: json(data) // name, date, category
        }).then((response) => {
            return response.json();
        });
    }
}
