import { Vibration } from '@ionic-native/vibration/ngx';
import { Covid19Service } from './providers/covid19.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { AboutPage } from './pages/about/about';
import { AboutModule } from './pages/about/about.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),
    AboutModule,
    IonicStorageModule.forRoot()
  ],
  declarations: [AppComponent],
  providers: [InAppBrowser, SplashScreen, StatusBar, Covid19Service, Vibration, Storage],
  bootstrap: [AppComponent],
  entryComponents: [AboutPage]
})
export class AppModule {}
