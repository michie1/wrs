export class Race {
    date;
    type = 'criterium';

    slug = '';
    report = 'Verslag';

    constructor(data) {
        this.name = data.name;
        this.date = data.date;
        this.slug = this.name.replace(/ /g, '-').toLowerCase();
        //this.slug = data.slug;
    }

    countWTOSers() {
        return 5;
    }
}
