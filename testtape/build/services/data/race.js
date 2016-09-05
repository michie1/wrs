'use strict';

var _tape = require('tape');

var _tape2 = _interopRequireDefault(_tape);

var _race = require('../../../../build/services/data/race');

var _race2 = require('../../../../build/models/race');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var raceService = new _race.RaceService(null);

(0, _tape2.default)('RaceService', function (t) {

    t.ok(raceService, 'raceService should exist');

    t.equal(raceService.foo(), 'bar', 'foo should be bar');

    raceService.bar = function bar() {
        return 'bla';
    };

    t.equal(raceService.bar(), 'bla', 'bar should be bla');

    t.equal(raceService.foo(), 'bla', 'foo should be bla');

    t.end();
});

var raceObject = {
    "name": "Ronde van de Lier",
    "date": "2016-08-11",
    "category": "criterium"
};

raceService.fetchRace = function () {
    return new Promise(function (resolve, reject) {
        resolve(raceObject);
    });
};

(0, _tape2.default)('RaceService 2', function (t) {
    raceService.fetchRace().then(function (race) {
        t.same(race, raceObject, 'fetchRace correct');
        t.end();
    });
});

(0, _tape2.default)('RaceService 3', function (t) {
    var expectedRace = new _race2.Race(raceObject);
    raceService.load('ronde-van-de-lier', '2016-08-11').then(function (race) {
        t.same(race, expectedRace, 'load correct');
        t.end();
    });
});
