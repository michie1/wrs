export class Race {
    date;
    category;

    slug = '';
    report = 'Verslag';

    constructor(data) {
        this.name = data.name;
        this.date = data.date;
        this.slug = this.name.replace(/ /g, '-').toLowerCase();
        this.category = data.category;
        //this.slug = data.slug;
    }

    countWTOSers() {
        return 5;
    }
}
