'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Race = exports.Race = function () {
    function Race(data) {
        _classCallCheck(this, Race);

        this.slug = '';
        this.report = 'Verslag';

        this.name = data.name;
        this.date = data.date;
        this.slug = this.name.replace(/ /g, '-').toLowerCase();
        this.category = data.category;
        //this.slug = data.slug;
    }

    _createClass(Race, [{
        key: 'countWTOSers',
        value: function countWTOSers() {
            return 5;
        }
    }]);

    return Race;
}();
