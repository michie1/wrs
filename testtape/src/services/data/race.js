import test from 'tape';
import {RaceService} from '../../../../build/services/data/race'
import {Race} from '../../../../build/models/race'

let raceService = new RaceService(null);

test('RaceService', function (t) {
    t.ok(raceService, 'raceService should exist');
    t.end();
});

let raceObject = {
    "name":"Ronde van de Lier",
    "date":"2016-08-11",
    "category":"criterium",
};

raceService.fetchRace = function () {
    return new Promise((resolve, reject) => {
        resolve(raceObject);
    });
}

test('RaceService 2', function (t) {
    raceService.fetchRace().then((race) => {
        t.same(race, raceObject, 'fetchRace correct');
        t.end();
    });
});

test('RaceService 3', function (t) {
    let expectedRace = new Race(raceObject);
    raceService.load('ronde-van-de-lier', '2016-08-11').then(race => {
        t.same(race, expectedRace, 'load correct');
        t.end();
    });
});
