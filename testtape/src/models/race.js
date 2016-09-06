import test from 'tape';
import {Race} from '../../../build/models/race.js';

test('Race model', (t) => {
    t.plan(2);
    let race = new Race({
        name: 'Naam Laam',
        date: '2000-01-01',
        category: 'crit' 
    });

    t.equal(race.slug, 'naam-laam', 'slug');
    t.equal(race.countWTOSers(), 5, 'count wtosers');
});

