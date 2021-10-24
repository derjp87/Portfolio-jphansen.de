import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  showDetails1: boolean;
  showDetails2: boolean;
  showDetails3: boolean;
  showDetails4: boolean;
  constructor() { 
    this.showDetails1 = false;
    this.showDetails2 = false;
    this.showDetails3 = false;
    this.showDetails4 = false;
    
  }

  ngOnInit(): void {
  }
  





}
