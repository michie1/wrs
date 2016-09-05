'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RaceService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _aureliaFramework = require('aurelia-framework');

var _aureliaFetchClient = require('aurelia-fetch-client');

var _race = require('../../models/race');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RaceService = exports.RaceService = (_dec = (0, _aureliaFramework.inject)(_aureliaFetchClient.HttpClient), _dec(_class = function () {
    function RaceService() {
        _classCallCheck(this, RaceService);
    }

    _createClass(RaceService, [{
        key: 'fetchRace',


        //constructor() {
        //this.http = http;
        //}

        value: function fetchRace(slug, date) {
            return this.http.fetch('races/' + date + '/' + slug).then(function (response) {
                return response.json();
            });
        }
    }, {
        key: 'fetchRaces',
        value: function fetchRaces() {
            return this.http.fetch('races').then(function (response) {
                return response.json();
            });
        }
    }, {
        key: 'load',
        value: function load(slug, date) {
            if (slug === undefined) {
                // load all
                /*
                return this.http.fetch('races')
                    .then(response => {
                        return response.json()
                    })
                    .then(races => {
                        return races.map(data => {
                            return new Race(data);
                        });
                    });
                   */
                return this.fetchRaces().then(function (races) {
                    return races.map(function (data) {
                        return new _race.Race(data);
                    });
                });
            } else {
                // load specific one
                /*
                return this.http.fetch('races/' + date +  '/' + slug)
                .then(response => response.json())
                .then(data => new Race(data));
                */
                return this.fetchRace(slug, date).then(function (data) {
                    return new _race.Race(data);
                });
            }
        }
    }, {
        key: 'bar',
        value: function bar() {
            return 'bar';
        }
    }, {
        key: 'foo',
        value: function foo() {
            return this.bar();
        }
    }, {
        key: 'create',
        value: function create(data) {
            return this.http.fetch('race', {
                method: 'post',
                body: (0, _aureliaFetchClient.json)(data) // name, date, category
            }).then(function (response) {
                return response.json();
            });
        }
    }]);

    return RaceService;
}()) || _class);
