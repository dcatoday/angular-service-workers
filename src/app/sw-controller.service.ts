import { Injectable, ApplicationRef } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { concat, interval, BehaviorSubject, Subject } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SwControllerService {

  constructor(private appRef: ApplicationRef, private updates: SwUpdate) {

  }

  changeReady$ = new Subject();

  bootstrapUpdater() {
        // Allow the app to stabilize first, before starting polling for updates with `interval()`.
        const appIsStable$ = this.appRef.isStable.pipe(first(isStable => isStable === true));
        const every30Seconds$ = interval( 1000);
        const every30SecondsOnceAppIsStable$ = concat(appIsStable$, every30Seconds$);
    
        every30SecondsOnceAppIsStable$.subscribe(() => {
          console.log('polling service worker')
          return this.updates.checkForUpdate()
        });
    
    
        //Subscrive to updates available and updates activated
        this.updates.available.subscribe(event => {
          console.log('current version is', event.current);
          console.log('available version is', event.available);
          console.log('prompting user of the update');
          this.changeReady$.next();
          //where you will prompt user
        });

        this.updates.activated.subscribe(event => {
          console.log('activating change!!!!!!!!!!!!!!!!!!');
          console.log('old version was', event.previous);
          console.log('new version is', event.current);
        });
  }

  activateUpdate() {
    this.updates.activateUpdate().then(() => document.location.reload());
  }

}
