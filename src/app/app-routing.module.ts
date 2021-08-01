import { AuthGuard } from './core/auth/auth-guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInComponent } from './home/sign-in/sign-in.component';
import { PhotoListResolver } from './photos/photos-list/photo-list.resolver';
import { NotFoundComponent } from './errors/not-found/not-found.component';

import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotosListComponent } from './photos/photos-list/photos-list.component';
import { SignUpComponent } from './home/sign-up/sign-up.componente';

const routes: Routes = [
  {
    path: 'user/:userName',
    component: PhotosListComponent,

    //Trazendo os dados no momento em que a rota é ativada
    resolve: {
      photos: PhotoListResolver
    }
  },
  {
    path: '',
    component: SignInComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'signup',
    component: SignUpComponent,
  },
  {
    path: 'p/add',
    component: PhotoFormComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
