import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';

// Services
import { DataStoreService } from './services/data-store.service';

// Bootstrap Modules
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HomeComponent } from './components/home/home.component';
import { FormsExampleComponent } from './components/forms-example/forms-example.component';
import { ReactiveFormsExampleComponent } from './components/reactive-forms-example/reactive-forms-example.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        FormsExampleComponent,
        ReactiveFormsExampleComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        BsDropdownModule,
        TooltipModule,
        ModalModule
    ],
    providers: [DataStoreService],
    bootstrap: [AppComponent]
})
export class AppModule { }
