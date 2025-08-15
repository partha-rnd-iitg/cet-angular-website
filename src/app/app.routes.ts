import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutComponent } from './pages/about/about.component';
import { ProgramsComponent } from './pages/programs/programs.component';
import { NptelComponent } from './pages/programs/nptel/nptel.component';
import { GianComponent } from './pages/programs/gian/gian.component';
import { CourseraComponent } from './pages/programs/coursera/coursera.component';
import { ContactComponent } from './pages/contact/contact.component';
import { OfficeStaffComponent } from './pages/about/office-staff/office-staff.component';
import { ProjectStaffComponent } from './pages/about/project-staff/project-staff.component';
import { HocComponent } from './pages/about/hoc/hoc.component';
import { PrincipalInvestigatorsComponent } from './pages/about/principal-investigators/principal-investigators.component';
import { NewsComponent } from './pages/news/news.component';
import { NewsDetailsComponent } from './pages/news/news-details/news-details.component';

export const routes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'news', component: NewsComponent },
    { path: 'news/:id', component: NewsDetailsComponent },
    {
        path: 'staff',
        children: [
            { path: 'hoc', component: HocComponent },
            { path: 'office-team', component: OfficeStaffComponent },
            { path: 'project-team', component: ProjectStaffComponent },
            { path: 'principal-investigators', component: PrincipalInvestigatorsComponent },
            { path: 'contact', component: ContactComponent },
        ]
    },
    {
        path: 'programs',
        children: [
            { path: 'nptel', component: NptelComponent },
            { path: 'gian', component: GianComponent },
            { path: 'coursera', component: CourseraComponent },
        ]
    }
];
