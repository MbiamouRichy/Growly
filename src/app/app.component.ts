import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Growly';

  ngOnInit(){
    let nav = document.querySelectorAll('nav li');
    nav.forEach(a=>a.addEventListener('click', ()=>{
      nav.forEach(a=>a.classList.remove('active'));
      a.className +=' active';
    }))
  }
}
