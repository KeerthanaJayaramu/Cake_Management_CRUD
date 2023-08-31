import { Component, OnInit } from '@angular/core';
import { Cake } from '../cake';
import { CakeService } from '../cake.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-cake',
  templateUrl: './create-cake.component.html',
  styleUrls: ['./create-cake.component.css']
})
export class CreateCakeComponent implements OnInit {

  cake: Cake = new Cake();
  constructor(private cakeService: CakeService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveCake(){
    this.cakeService.createCake(this.cake).subscribe( data =>{
      console.log(data);
      this.goToCakeList();
    },
    error => console.log(error));
  }

  goToCakeList(){
    this.router.navigate(['/cake']);
  }
  
  onSubmit(){
    console.log(this.cake);
    this.saveCake();
  }
}
