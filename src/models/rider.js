export class Rider {
    points = 5;
    licence = 'Elite';
    slug = '';

    constructor(data) {
        this.name = data.name;
        this.slug = this.name.replace(/ /g, '-').toLowerCase();
    }
}
