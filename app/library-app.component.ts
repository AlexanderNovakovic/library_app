import { Component } from '@angular/core';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'library-app',
  template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
   `
})
export class LibraryAppComponent {
  title = 'app';
}
