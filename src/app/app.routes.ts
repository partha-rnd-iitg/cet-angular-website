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

export const routes: Routes = [
    { path: '', component: HomepageComponent },
    // { path: 'about-us', component: AboutComponent },
    { path: 'about/hoc', component: HocComponent },
    { path: 'about/office-team', component: OfficeStaffComponent },
    { path: 'about/project-team', component: ProjectStaffComponent },
    { path: 'about/principal-investigators', component: PrincipalInvestigatorsComponent },

    // Programs
    { path: 'programs/nptel', component: NptelComponent },
    { path: 'programs/gian', component: GianComponent },
    { path: 'programs/coursera', component: CourseraComponent },

    // Contact
    { path: 'contact', component: ContactComponent },
];
