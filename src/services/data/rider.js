import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

import {Rider} from '../../models/rider';

@inject(HttpClient)
export class RiderService {
    constructor(http) {
        this.http = http;
    }

    load(slug) {
        if (slug === undefined) { // load all
            return this.http.fetch('riders')
                .then(response => response.json())
                .then(riders => {
                    return riders.map(data => {
                        return new Rider(data);
                    });
                });
        } else { // load specific one
            return this.http.fetch('riders?name_like=' + slug)
                .then(response => response.json())
                .then(response => response[0])
                .then(data => new Rider(data));
        }
    }
}
