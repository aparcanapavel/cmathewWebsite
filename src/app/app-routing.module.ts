import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './home/blog/blog.component';
import { ExperienceComponent } from './experience/experience.component';
import { ArticleComponent } from './home/article/article.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { depth: '1'} },
  { path: 'blog', component: BlogComponent, data: { depth: '2'} },
  { path: 'blog/:id', component: ArticleComponent, data: { depth: '3'}},
  { path: 'experience', component: ExperienceComponent, data: { depth: '4'}},
  { path: 'contact', component: ContactComponent, data: { depth: '5'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, ExperienceComponent,ArticleComponent,BlogComponent,ContactComponent]
