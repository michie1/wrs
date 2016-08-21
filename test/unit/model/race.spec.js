import {Race} from '../../../src/models/race';

describe('The race model', () => {
    let race = new Race({
        name: 'Ronde van de Lier',
        date: '2016-08-11'
    });

    it('should have a constructor which processes the input data', () => {
        expect(race.name).toBe('Ronde van de Lier');
        expect(race.date).toBe('2016-08-11');
        expect(race.slug).toBe('ronde-van-de-lier');
    });

    it('it should count the number of WTOS participants', () => {
        expect(race.countWTOSers()).toBe(5);
    });

});
