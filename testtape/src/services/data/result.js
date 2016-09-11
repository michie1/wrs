import test from 'tape';
import {ResultService} from '../../../../build/services/data/result'
import {Result} from '../../../../build/models/result'

let resultService = new ResultService(null);

let resultsByRace = [{
    "result":"21", 
    "rider": {
        "name": "Michiel",
        "slug": "michiel"
    }
}];

let resultsByRider = [{
    "result":"21", 
    "race": {
        "name": "Ronde van de Lier",
        "slug": "ronde-van-de-lier",
        "date": "2016-08-11"
    }
}];

let newResult = new Result({
    riderName: 'Michiel',
    riderSlug: 'michiel',
    raceSlug: 'ronde-van-de-lier',
    raceDate: '2016-08-11',
    result: '21'
});

let expectedResultsByRace = resultsByRace.map((obj) => {
    return new Result(obj);
});

let expectedResultsByRider = resultsByRider.map((obj) => {
    return new Result(obj);
});

resultService.fetchResults = function (model) {
    return new Promise((resolve, reject) => {
        if (model === 'race') {
            resolve(resultsByRace);
        } else {
            resolve(resultsByRider);
        }
    });
}

resultService.create = function () {
    return new Promise((resolve, reject) => {
        resolve({
            message: 'success'
        });
    });
};

test('ResultService', function (t) {
    t.plan(4);

    t.ok(resultService, 'resultService should exist');

    resultService.fetchResults('race','ronde-van-de-lier', '2016-08-11').then((result) => {
        t.same(result, resultsByRace, 'fetchResults by race');
    });

    resultService.fetchResults('rider','michiel').then((result) => {
        t.same(result, resultsByRider, 'fetchResults by rider');
    });

    resultService.create(newResult).then(response => {
        t.same(response, {
            message: 'success'
        }, 'create');
    });
    
});
