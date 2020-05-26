import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WaiterComponent } from './components/waiter/waiter.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { AngularFireModule } from  'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';

import { LottieAnimationViewModule } from 'ng-lottie';

@NgModule({
  declarations: [
    AppComponent,
    WaiterComponent,
    KitchenComponent,
    PageNotFoundComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule,
    AngularFirestoreModule,
    LottieAnimationViewModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase, 'angular-fs'),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
