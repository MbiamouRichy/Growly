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
    let btn_hamburger = document.querySelector('.btn_menu_hamburger');
    // @ts-ignore
    btn_hamburger.addEventListener('click', () =>{
      let navbar_mobile = document.querySelector('header nav');
      // @ts-ignore
      if ( navbar_mobile.style.display=='flex'){
        // @ts-ignore
        btn_hamburger.classList.remove('active')
        document.body.style.overflow="auto"
        // @ts-ignore
        navbar_mobile.style.display="none";
        document.body.style.userSelect='none'
      }else{
        document.body.style.overflow="hidden"
        document.body.style.userSelect='auto';
        // @ts-ignore
        navbar_mobile.style.display='flex'
        // @ts-ignore
        btn_hamburger.classList.add('active')
      }
    })
  }
}
