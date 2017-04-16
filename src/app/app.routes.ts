import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContainerComponent} from "./container/container.component";
import {PostDetailComponent} from "./container/post-detail/post-detail.component";

const appRoutes: Routes = [
  { path: '', component: ContainerComponent },
  {
    path: 'post/:id', component: PostDetailComponent
  },
  { path: '**', redirectTo: ''}
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
