import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
   public showloader: boolean = false;      

  constructor() { }

  ngOnInit() {
  }

  PageTitle = 'About Page';

  todo_array: Array<string> = [
   "Go home",
   "Take a nap",
   "Start learning Angular with Sabuj"
 ]

 Hero = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];

sss = '';
onSelect(hero) {
	this.showloader   = true;
	this.sss = hero.id;
}

 clearToDo(){
	   this.todo_array.splice(0);
	}

}
