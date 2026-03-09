import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './components/pages/activities/activities.component';
import { ForMeComponent } from './components/pages/for-me/for-me.component';
import { DiscoverComponent } from './components/pages/discover/discover.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { ChatsComponent } from './components/pages/chats/chats.component';

const routes: Routes = [
  { path: 'activities', component: ActivitiesComponent },
  { path: 'for-me', component: ForMeComponent },
  { path: 'discover', component: DiscoverComponent },
  { path: 'chats', component: ChatsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '', redirectTo: 'activities', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
