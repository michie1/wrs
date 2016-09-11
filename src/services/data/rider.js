import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

import {Rider} from '../../models/rider';

@inject(HttpClient)
export class RiderService {
    constructor(http) {
        this.http = http;
    }

    fetchRider(slug) {
        return this.http.fetch('riders/' + slug)
            .then(response => response.json())
    }

    fetchRiders() {
        return this.http.fetch('riders')
            .then(response => response.json())
    }

    load(slug) {
        if (slug === undefined) {
            return this.fetchRiders()
                .then(riders => {
                    return riders.map(data => {
                        return new Rider(data);
                    });
                });
        } else { 
            return this.fetchRider(slug).then(data => new Rider(data));
        }
    }


    create() {
        return new Promise(function (resolve, reject) {
        resolve({
            message: 'success'
        });
    });
    }
}
