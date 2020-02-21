import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {AuthService} from './services/auth.service';
import {AuthGuardService} from './services/auth-guard.service';
import {ApiService} from './services/api.service';
import {HttpClientModule} from '@angular/common/http';
import {FeatherPipe} from './pipes/feather.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ProfileComponent } from './components/profile/profile.component';
import { PatientsComponent } from './components/patients/patients.component';
import { PatientComponent } from './components/patient/patient.component';
import { WishDetailComponent } from './components/wish-detail/wish-detail.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { VolunteersComponent } from './components/volunteers/volunteers.component';
import { VolunteerComponent } from './components/volunteer/volunteer.component';
import { NewPatientComponent } from './components/new-patient/new-patient.component';
import { WishesComponent } from './components/wishes/wishes.component';
import { NewWishComponent } from './components/new-wish/new-wish.component';
import { SelectDropDownModule } from 'ngx-select-dropdown';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    FeatherPipe,
    NavbarComponent,
    ProfileComponent,
    PatientsComponent,
    PatientComponent,
    WishDetailComponent,
    VolunteersComponent,
    VolunteerComponent,
    NewPatientComponent,
    WishesComponent,
    NewWishComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgMultiSelectDropDownModule.forRoot(),
    SelectDropDownModule
  ],
  providers: [
    AuthGuardService,
    AuthService,
    ApiService,
    FeatherPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
