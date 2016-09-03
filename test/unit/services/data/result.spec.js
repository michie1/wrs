import {HttpClient, json} from 'aurelia-fetch-client';
import {ResultService} from '../../../../src/services/data/result';
import {Result} from '../../../../src/models/result';
import {App} from '../../../../src/app';

describe('ResultService', () => {

    let app = new App(new HttpClient());

    let resultService;

    beforeEach(() => {
        resultService = new ResultService(app.http);
    });

    it('should exist', () => {
        expect(resultService).toBeDefined();
        expect(app.http).toBeDefined();
        expect(resultService.http).toBeDefined();
    });

    it('should load fixture', (done) => {
        app.http.fetch('fixture/services/data/result').then(response => {
            return response.json()
        }).then(response => {
            expect(response.message).toEqual('success');
            done();
        });
    });

    it('should have a load method', () => {
        expect(resultService.load).toBeDefined();
    });

    it("load('rider', 'michiel')", (done) => {

        let expectedResults = [new Result({
            "result":"21",
            "race": {
                "name": "Ronde van de Lier",
                "slug": "ronde-van-de-lier",
                "date": "2016-08-11"
            }
        })];

        resultService.load('rider', 'michiel').then(results => {
            // Sort by name, because api does not return an ordered array
            expect(results.map(result => result.race.date + result.race.name).sort()).toEqual(expectedResults.map(result => result.race.date + result.race.name).sort());
          done();
        });
    });

    it("load('race', '2016-08-11', 'ronde-van-de-lier')", (done) => {

        let expectedResults = [new Result({
            "result":"21",
            "rider": {
                "name": "Michiel",
                "slug": "michiel"
            }
        })];

        resultService.load('race', 'ronde-van-de-lier', '2016-08-11').then(results => {
            // Sort by slug, because api does not return an ordered array
            expect(results.map(result => result.rider.name).sort()).toEqual(expectedResults.map(result => result.rider.name).sort());
          done();
        });
    });
   
});
