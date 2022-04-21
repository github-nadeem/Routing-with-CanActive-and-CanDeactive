import {Component} from '@angular/core'
import { OnInit } from '@angular/core/src/metadata';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.component.html'
})

export class Tab2Component implements OnInit {
  constructor(private route : ActivatedRoute){}
  id = "8";
ngOnInit(){
  this.route.paramMap.subscribe(param =>{
    this.id = param.get('id');
    console.log(param.get('id'));
    console.log(param.has('id'));
    console.log(param.getAll('id1'));
    
  })
  this.route.params.subscribe(val=>{
    console.log(val);
  })
  this.route.queryParams.subscribe(val=>{
    console.log(val);
  })
  this.route.url.subscribe(val=>{
    console.log(val);
  })
  this.route.fragment.subscribe(val=>{
    console.log(val);
  })
  console.log(this.route.snapshot);
}


}