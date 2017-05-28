import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ChatComponent} from "./chat/chat.component";
import {ProfileComponent} from "./profile/profile.component";
import {BlogComponent} from "./blog/blog.component";
import {SigninComponent} from "./auth/signin.component";
import {SignupComponent} from "./auth/signup.component";
import {LogoutComponent} from "./auth/logout.component";

const APP_ROUTER: Routes = [
  { path: 'home', redirectTo: '/' },
  { path: '', component: HomeComponent},
  { path: 'chat', component: ChatComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'my-blog', component: BlogComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'logout', component: LogoutComponent },
];

export const Routing = RouterModule.forRoot(APP_ROUTER);
