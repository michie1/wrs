import {HttpClient, json} from 'aurelia-fetch-client';
import {RiderService} from '../../../../src/services/data/rider';
import {Rider} from '../../../../src/models/rider';
import {App} from '../../../../src/app';

describe('RiderService', () => {

    let app = new App(new HttpClient());

    let riderService;

    beforeEach(() => {
        riderService = new RiderService(app.http);
    });

    it('should exist', () => {
        expect(riderService).toBeDefined();
        expect(app.http).toBeDefined();
        expect(riderService.http).toBeDefined();
    });

    it('should load fixture', (done) => {
        app.http.fetch('fixture/services/data/rider').then(response => {
            return response.json()
        }).then(response => {
            expect(response.message).toEqual('success');
            done();
        });
    });

    it('should have a load method', () => {
        expect(riderService.load).toBeDefined();
    });

    it('load()', (done) => {
        let expectedRiders = [new Rider({
            "name":"Michiel",
        }), new Rider({
            "name":"Henk",
        })];

        riderService.load().then(riders => {
            // Sort by date and name, because api does not return an ordered array
            expect(riders.map(rider => rider.name).sort()).toEqual(expectedRiders.map(rider => rider.name).sort());
          done();
        });
    });

    it("load('michiel')", (done) => {
        let expectedRider = new Rider({
            "name":"Michiel",
        });

        riderService.load('michiel').then(rider => {
            expect(rider).toEqual(expectedRider);
            done();
        });
    });
});
