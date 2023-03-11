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
    }));
    let btn_hamburger = document.querySelector('.btn_menu_hamburger') as HTMLButtonElement;
    btn_hamburger.addEventListener('click', () =>{
      let navbar_mobile = document.querySelector('header nav') as HTMLMenuElement;
      let main = document.querySelector('main') as HTMLElement;
      if ( navbar_mobile.style.display=='flex'){
        btn_hamburger.classList.remove('active')
        main.style.overflowY="auto"
        navbar_mobile.style.display="none";
        main.style.userSelect='none'
      }else{
        main.style.overflow="hidden"
        main.style.userSelect='auto';
        navbar_mobile.style.display='flex'
        btn_hamburger.classList.add('active')
      }
    })
  }
}
