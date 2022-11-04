import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes , RouterModule , Params} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { ContactComponent } from './component/contact/contact.component';
import { LoginComponent } from './component/login/login.component';
import { ReactFormComponent } from './component/react-form/react-form.component';
import {NavBarComponent} from './component/nav-bar/nav-bar.component';
import { LearnLessonComponent } from './component/learn-lesson/learn-lesson.component';
import { LessonComponent } from './component/lesson/lesson.component';
import { HomeWorkComponent } from './component/home-work/home-work.component';
import { NoteComponent } from './component/note/note.component';
import { ExtraPractiveComponent } from './component/extra-practive/extra-practive.component';
import { ClassfoRumComponent } from './component/classfo-rum/classfo-rum.component';
import { UnitComponent } from './component/unit/unit.component'

const router: Routes = [
  {path: '', component: ProductListComponent},
  { path: 'learn', component: LearnLessonComponent },
  { path: 'conment', component: ContactComponent },
  { path: 'start', component: LoginComponent },
  { path: 'cart', component: ReactFormComponent },

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductListComponent,
    ContactComponent,
    LoginComponent,
    ReactFormComponent,
    NavBarComponent,
    LearnLessonComponent,
    LessonComponent,
    HomeWorkComponent,
    NoteComponent,
    ExtraPractiveComponent,
    ClassfoRumComponent,
    UnitComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(router)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
