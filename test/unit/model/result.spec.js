import {Result} from '../../../src/models/result';

describe('The result model', () => {
    let resultFromRider = new Result({
        result: '21',
        race: {
            name: 'Ronde van de Lier',
            slug: 'ronde-van-de-lier',
            date: '2016-08-11'
        }
    });

    it('should exist', () => {
        expect(resultFromRider).toBeDefined();
    });

    it('should have a constructor which processes the input data', () => {
        expect(resultFromRider.rider).toBeUndefined();
        expect(resultFromRider.result).toBe('21');
        expect(resultFromRider.race).toEqual({
            "name": "Ronde van de Lier",
            "slug": "ronde-van-de-lier",
            "date": "2016-08-11"
        });
    });

    let resultFromRace = new Result({
        result: '21',
        rider: {
            name: 'Michiel',
            slug: 'michiel',
        }
    });

    it('should exist', () => {
        expect(resultFromRace).toBeDefined();
    });

    it('should have a constructor which processes the input data', () => {
        expect(resultFromRace.race).toBeUndefined();
        expect(resultFromRace.result).toBe('21');
        expect(resultFromRace.rider).toEqual({
            name: 'Michiel',
            slug: 'michiel'
        });
    });
});
