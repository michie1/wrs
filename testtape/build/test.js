'use strict';

var _tape = require('tape');

var _tape2 = _interopRequireDefault(_tape);

var _race = require('../../build/models/race');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _tape2.default)('Race model', function (t) {
    t.plan(2);
    var race = new _race.Race({ name: 'Naam Laam', date: '2000-01-01', category: 'crit' });

    t.equal(race.slug, 'naam-laam', 'slug');
    t.equal(race.countWTOSers(), 5, 'count wtosers');
});
