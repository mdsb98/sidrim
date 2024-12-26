import { Component } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { OurServicesComponent } from '../our-services/our-services.component';
import { OurTeamComponent } from '../our-team/our-team.component';
import { TechnologiesComponent } from '../technologies/technologies.component';
import { AfterViewInit } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home-page',
  standalone:true,
  imports: [
    SliderComponent,
    AboutUsComponent,
    OurServicesComponent,
    OurTeamComponent,
    TechnologiesComponent,
    ContactComponent
],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements AfterViewInit{

  ngAfterViewInit(): void {
    const sidenavElems = document.querySelectorAll('.sidenav');
    (window as any).M.Sidenav.init(sidenavElems);
  }
  

}
