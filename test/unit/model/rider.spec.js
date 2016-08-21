import {Rider} from '../../../src/models/rider';

describe('The rider model', () => {
    let rider = new Rider({
        name: 'Michiel',
    });

    it('should have a constructor which processes the input data', () => {
        expect(rider.name).toBe('Michiel');
        expect(rider.slug).toBe('michiel');
    });
});
