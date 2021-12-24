import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  navList: NavItem[] = [
    {
      label: 'Home',
      link: '',
      icon: 'dashboard',
    }
    ,
    {
      label: 'Login',
      link: 'login',
      icon: 'login',
    },
    {
      label: 'Pacientes',
      link: 'pacientes',
      icon: 'group',
    },
    {
      label: 'Medicos',
      link: 'medicos',
      icon: 'medication'
    },
    {
      label: 'Consultas',
      link: 'consultas',
      icon: 'date_range',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

export interface NavItem {
  label: string;
  link: string;
  icon: string;
}
