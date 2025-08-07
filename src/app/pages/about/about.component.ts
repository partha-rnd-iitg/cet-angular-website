import { Component } from '@angular/core';
import { RouterOutlet } from "../../../../node_modules/@angular/router/index";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
