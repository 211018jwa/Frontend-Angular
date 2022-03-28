import { NgModule } from '@angular/core';
import { AuthModule } from '@auth0/auth0-angular';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingComponent } from './components/landing/landing.component';
import { UtilService } from './services/util.service';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { ResetloginComponent } from './components/resetlogin/resetlogin.component';
import { CompanyComponent } from './components/register/company/company.component';
import { IndividualComponent } from './components/register/individual/individual.component';
import { ClientSkillsComponent } from './components/client-skills/client-skills.component';
import { ResetemailComponent } from './components/resetemail/resetemail.component';
import { Auth0LoginComponent } from './components/auth0login/auth0login.component';
import { FileuploaderComponent } from './components/fileuploader/fileuploader.component';
import { FileViewerComponent } from './components/file-viewer/file-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    RegisterComponent,
    NavbarComponent,
    AboutComponent,
    LoginComponent,
    ResetloginComponent,
    CompanyComponent,
    IndividualComponent,
    ClientSkillsComponent,
    ResetemailComponent,
    Auth0LoginComponent,
    FileViewerComponent,
    FileuploaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    AuthModule.forRoot({
      domain: 'dev-0ocf6tyd.us.auth0.com',
      clientId: '6i8GqUJ23MVwdfCzg9VwZtAGrx8wtVxu',
      cacheLocation: 'localstorage',
      useRefreshTokens: true
    }),

  ],
  providers: [UtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
