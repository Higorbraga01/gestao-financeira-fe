import { CategoriaConsultaComponent } from './containers/categoria/categoria-consulta/categoria-consulta.component';
import { CategoriaCadastroComponent } from './containers/categoria/categoria-cadastro/categoria-cadastro.component';
import { LancamentoConsultaComponent } from './containers/lancamento/lancamento-consulta/lancamento-consulta.component';
import { LancamentoCadastroComponent } from './containers/lancamento/lancamento-cadastro/lancamento-cadastro.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MessagesComponent } from './components/messages/messages.component';
import { MiscComponent } from './components/misc/misc.component';
import { EmptyComponent } from './components/empty/empty.component';
import { AppMainComponent } from './template/app.main.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AccessComponent } from './components/access/access.component';
import { AuthGuard } from './service/auth.guard';
@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppMainComponent, canActivate:[AuthGuard] ,
                children: [
                    {path: '', component: DashboardComponent},
                    {path: 'lancamento/cadastro', component: LancamentoCadastroComponent,loadChildren: () => import('./containers/lancamento/lancamento.module').then((m) => m.LancamentoModule),canActivate:[AuthGuard]} ,
                    {path: 'lancamento/consulta', component: LancamentoConsultaComponent,loadChildren: () => import('./containers/lancamento/lancamento.module').then((m) => m.LancamentoModule),canActivate:[AuthGuard]} ,
                    {path: 'categoria/cadastro', component: CategoriaCadastroComponent,loadChildren: () => import('./containers/categoria/categoria.module').then((m) => m.CategoriaModule),canActivate:[AuthGuard]} ,
                    {path: 'categoria/consulta', component: CategoriaConsultaComponent,loadChildren: () => import('./containers/categoria/categoria.module').then((m) => m.CategoriaModule),canActivate:[AuthGuard]} ,
                    {path: 'uikit/message', component: MessagesComponent},
                    {path: 'uikit/misc', component: MiscComponent},
                    {path: 'pages/empty', component: EmptyComponent},
                ],
            },
            {path:'login', component: LoginComponent},
            {path:'pages/error', component: ErrorComponent},
            {path:'pages/notfound', component: NotfoundComponent},
            {path:'pages/access', component: AccessComponent},
            {path: '**', redirectTo: 'pages/notfound'},
        ], {scrollPositionRestoration: 'enabled', anchorScrolling:'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
