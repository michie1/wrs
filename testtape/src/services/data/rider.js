import test from 'tape';
import {RiderService} from '../../../../build/services/data/rider'
import {Rider} from '../../../../build/models/rider'

let riderService = new RiderService(null);

let riderObject = {
    name:'Michiel',
};

let expectedRider = new Rider(riderObject);
let newRider = new Rider(riderObject);

let riderObjects = [{
    name:'Michiel',
}, {
    name:'Henk',
}];

let expectedRiders = riderObjects.map((obj) => {
    return new Rider(obj);
});

riderService.fetchRider = function () {
        return new Promise((resolve, reject) => {
            resolve(riderObject);
        });
}

riderService.fetchRiders = function () {
    return new Promise((resolve, reject) => {
        resolve(riderObjects);
    });
}

riderService.create = function () {
    return new Promise((resolve, reject) => {
        resolve({
            message: 'success'
        });
    });
};
            
test('RaceService', function (t) {
    t.plan(6);

    t.ok(riderService, 'riderService should exist');

    riderService.fetchRider('michiel').then((rider) => {
        t.same(rider, {
            name: 'Michiel'
        }, 'fetchRider');
    });

    riderService.fetchRiders().then((riders) => {
        t.same(riders, riderObjects, 'fetchRider');
    });

    riderService.load('michiel').then(rider => {
        t.same(rider, expectedRider, 'load one');
    });

    riderService.load().then(riders => {
        // Sort by date and name, because api does not return an ordered array
        t.same(riders.map(rider => rider.name).sort(), expectedRiders.map(rider => rider.name).sort(), 'load all');
    });

    riderService.create(newRider)
        .then(response => {
            t.same(response, {
                message: 'success'
            }, 'create');
        });
});
