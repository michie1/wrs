import {HttpClient, json} from 'aurelia-fetch-client';
import {RaceService} from '../../../../src/services/data/race';
import {Race} from '../../../../src/models/race';
import {App} from '../../../../src/app';

describe('RaceService', () => {

    let app = new App(new HttpClient());

    let raceService;
    raceService = new RaceService(app.http);

    it('should exist', () => {
        expect(raceService).toBeDefined();
        expect(app.http).toBeDefined();
        expect(raceService.http).toBeDefined();
    });

    it('should load fixture', (done) => {
        app.http.fetch('fixture/services/data/race').then(response => {
            return response.json()
        }).then(response => {
            expect(response.message).toEqual('success');
            done();
        });
    });

    it('should have a load method', () => {
        expect(raceService.load).toBeDefined();
    });

    it('load()', (done) => {
        let expectedRaces = [new Race({
            "name":"Gouden Pijl Emmen",
            "date":"2016-08-11",
            "category":"criterium",
            "report":"verslag"
        }), new Race({
            "name":"Ronde van de Lier",
            "date":"2016-08-11",
            "category":"criterium",
            "report":"verslag"
        })];

        raceService.load().then(races => {
            // Sort by date and name, because api does not return an ordered array
            expect(races.map(race => race.date + race.name).sort()).toEqual(expectedRaces.map(race => race.date + race.name).sort());
          done();
        });
    });

    it('load(\'2016-08-11\', \'ronde-van-de-lier\')', (done) => {
        let expectedRace = new Race({
            "name":"Ronde van de Lier",
            "date":"2016-08-11",
            "category":"criterium",
            "report":"verslag"
        });

        raceService.load('ronde-van-de-lier', '2016-08-11').then(race => {
            expect(race).toEqual(expectedRace);
            done();
        });
    });
});
