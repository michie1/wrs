import {inject, Factory} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

import {Result} from '../../models/result';

@inject(Factory.of(Result), HttpClient)
export class ResultService {
    results = [];

    constructor(resultFactory, http) {
        this.resultFactory = resultFactory;
        this.http = http;
    }

    load(model, slug, date) {
        let url = 'results';

        /*
        if (slug !== undefined) { // load all
            if (model === 'race') {
                url += '?race=' + slug;
            } else if (model === 'rider') {
                url += '?rider_like=' + slug;
            }
        }
       */

        if (model === 'race') {
            url += '/' + date;
        }

        url += '/' + slug;

        return this.http.fetch(url)
        .then(response => response.json())
        .then(results => {
            return results.map(data => {
                console.log(data);
                return this.resultFactory(data);
            });
        });
    }
}
