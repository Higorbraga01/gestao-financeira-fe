import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { ChipModule } from 'primeng/chip';
import { TagModule } from 'primeng/tag';
import { ScrollTopModule } from 'primeng/scrolltop';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';

import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { BadgeModule } from 'primeng/badge';
import { CheckboxModule } from 'primeng/checkbox';
import { PasswordModule } from 'primeng/password';
import { ChartModule } from 'primeng/chart';
import { SkeletonModule } from 'primeng/skeleton';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppCodeModule } from './components/app-code/app.code.component';
import { AppComponent } from './app.component';
import { AppMainComponent } from './app.main.component';
import { AppTopBarComponent } from './app.topbar.component';
import { AppFooterComponent } from './app.footer.component';
import { AppConfigComponent } from './app.config.component';
import { AppMenuComponent } from './app.menu.component';
import { AppMenuitemComponent } from './app.menuitem.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MessagesComponent } from './components/messages/messages.component';
import { MiscComponent } from './components/misc/misc.component';
import { EmptyComponent } from './components/empty/empty.component';

import { CountryService } from './service/countryservice';
import { CustomerService } from './service/customerservice';
import { EventService } from './service/eventservice';
import { IconService } from './service/iconservice';
import { NodeService } from './service/nodeservice';
import { PhotoService } from './service/photoservice';
import { ProductService } from './service/productservice';
import { MenuService } from './service/app.menu.service';
import { ConfigService } from './service/app.config.service';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AccessComponent } from './components/access/access.component';
import { AuthInterceptorService } from './service/auth-interceptor.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AppCodeModule,
        TableModule,
        MenuModule,
        SkeletonModule,
        ChartModule,
        PasswordModule,
        CheckboxModule,
        BadgeModule,
        ToastModule,
        ProgressBarModule,
        MessagesModule,
        MessageModule,
        ButtonModule,
        AvatarModule,
        AvatarGroupModule,
        ScrollPanelModule,
        ScrollTopModule,
        TagModule,
        ChipModule,
        InputTextModule,
        InputMaskModule

    ],
    declarations: [
        AppComponent,
        AppMainComponent,
        AppTopBarComponent,
        AppFooterComponent,
        AppConfigComponent,
        AppMenuComponent,
        AppMenuitemComponent,
        DashboardComponent,
        MessagesComponent,
        MessagesComponent,
        MiscComponent,
        EmptyComponent,
        LoginComponent,
        ErrorComponent,
        NotfoundComponent,
        AccessComponent,
    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService, MenuService, ConfigService,
        {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
