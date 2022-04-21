import {Component} from '@angular/core'
import { OnInit } from '@angular/core/src/metadata';
import { ActivatedRoute, Router, Routes } from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.component.html'
})

export class Tab1Component implements OnInit {
  constructor(private route: Router){}
ngOnInit(){

}
  
}