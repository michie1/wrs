export class Race {
    date = '2016-08-11';
    type = 'criterium';

    slug = '';
    report = 'Verslag';

    constructor(data) {
        this.name = data.name;
        this.date = data.date;
        this.slug = this.date + '-' + 
            this.name.replace(/ /g, '-').toLowerCase();
    }

    countWTOSers() {
        return 5;
    }
}
