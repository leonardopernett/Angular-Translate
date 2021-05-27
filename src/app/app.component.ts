import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rickandmortyapiangularjs';

  public activeLang='es'

  constructor(private translate:TranslateService){}
    ngOnInit(){
      this.translate.use(this.activeLang)
    }

    cambiar(lang){
      this.translate.use(lang)
    }
}
