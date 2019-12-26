import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tabs = ['Dashboard', 'Shopping Lists'];
  selectedTab: number = 0;

  constructor() {

  }

  selectTab(tab: number) {
    this.selectedTab = tab;
  }
}
