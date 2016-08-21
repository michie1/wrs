import {inject, Factory} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

import {Result} from '../../models/result';

@inject(HttpClient)
export class ResultService {
    results = [];

    constructor(http) {
        this.http = http;
    }

    load(model, slug, date) {
        let url = 'results';
        if (model === undefined) {
            console.log('no model in load method of ResultService');
        }

        if (model === 'race') {
            url += '/' + date;
        }

        url += '/' + slug;

        return this.http.fetch(url)
        .then(response => response.json())
        .then(results => {
            return results.map(data => {
                return new Result(data);
            });
        });
    }
}
