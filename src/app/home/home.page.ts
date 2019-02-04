import { Component } from '@angular/core';
import { Crashlytics } from '@ionic-native/fabric/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private crashlytics: Crashlytics
  ) {
  }

  ionViewDidEnter() {
    // console.log('fabric setup');
    this.crashlytics.addLog('Test Crash');
    this.crashlytics.sendNonFatalCrash('Test Crash 2');
  }

}
