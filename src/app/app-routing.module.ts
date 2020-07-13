import { FormsExampleComponent } from './components/forms-example/forms-example.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsExampleComponent } from './components/reactive-forms-example/reactive-forms-example.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'forms-example', component: FormsExampleComponent },
    { path: 'reactive-forms-example', component: ReactiveFormsExampleComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
