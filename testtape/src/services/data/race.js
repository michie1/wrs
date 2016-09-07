import test from 'tape';
import {RaceService} from '../../../../build/services/data/race'
import {Race} from '../../../../build/models/race'

let raceService = new RaceService(null);

let raceObject = {
    "name":"Ronde van de Lier",
    "date":"2016-08-11",
    "category":"criterium",
};

let expectedRace = new Race(raceObject);

let raceObjects = [{
    "name":"Gouden Pijl Emmen",
    "date":"2016-08-11",
    "category":"criterium",
    "report":"verslag"
}, {
    "name":"Ronde van de Lier",
    "date":"2016-08-11",
    "category":"criterium",
    "report":"verslag"
}];

let newRaceObject = {
    name: 'Standaard Tijdelijk',
    date: '2016-09-03',
    category: 'criterium'
};

let newRaceResponse = {
    message: 'success',
    slug: 'standaard-tijdelijk',
    date: '2016-09-03'
};

let expectedRaces = raceObjects.map((obj) => {
    return new Race(obj);
});

raceService.fetchRace = function () {
        return new Promise((resolve, reject) => {
            resolve(raceObject);
        });
}

raceService.fetchRaces = function () {
    return new Promise((resolve, reject) => {
        resolve(raceObjects);
    });
}

raceService.create = function () {
    return new Promise((resolve, reject) => {
        resolve(newRaceResponse);
    });
};
            
test('RaceService', function (t) {
    t.plan(5);

    t.ok(raceService, 'raceService should exist');

    raceService.fetchRace().then((race) => {
        t.same(race, raceObject, 'fetchRace');
    });

    raceService.load('ronde-van-de-lier', '2016-08-11').then(race => {
        t.same(race, expectedRace, 'load one');
    });

    raceService.load().then(races => {
        // Sort by date and name, because api does not return an ordered array
        t.same(races.map(race => race.date + race.name).sort(), expectedRaces.map(race => race.date + race.name).sort(), 'load all');
    });

    raceService.create(newRaceObject)
        .then((response) => {
            t.same(response, newRaceResponse, 'create');
        });
});
