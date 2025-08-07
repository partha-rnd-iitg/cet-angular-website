import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-programs',
  standalone: true,
  imports: [],
  templateUrl: './programs.component.html',
  styleUrl: './programs.component.css'
})
export class ProgramsComponent implements OnInit {
  programName: string | null = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Read the route parameter when the component is initialized
    this.route.paramMap.subscribe(params => {
      this.programName = params.get('programName');
      // Now you can use this.programName to fetch data from a service
      // Example: this.programService.getProgramDetails(this.programName).subscribe(...)
    });
}
}
