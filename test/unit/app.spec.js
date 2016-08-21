import {HttpClient} from 'aurelia-fetch-client';
import {App} from '../../src/app';

let app = new App(new HttpClient());

describe('the app', () => {
    it('should exist', () => {
        expect(app).toBeDefined();
    });

    it('should have a http client', () => {
        expect(app.http).toBeDefined();
        expect(app.http.baseUrl).toBe('http://localhost:8080/');
    });
});
