import {Component, Template, bootstrap} from 'angular2/angular2';

// Annotation section
@Component({
    selector: 'my-app'
})
@Template({
    inline: '<h1>Hello {{ name }}</h1>'
})
// Component Controller
class MyAppComponent {
    constructor() {
        this.name = 'Tiffany';
    }
}

bootstrap(MyAppComponent);