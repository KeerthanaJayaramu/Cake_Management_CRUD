import { Component, OnInit } from '@angular/core';
import { Cake } from '../cake'
import { CakeService } from '../cake.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-cake-list',
  templateUrl: './cake-list.component.html',
  styleUrls: ['./cake-list.component.css']
})
export class CakeListComponent implements OnInit {

  cake: Cake[];

  constructor(private cakeService: CakeService,
    private router: Router) { }

  ngOnInit(): void {
    this.getCake();
  }

  private getCake(){
    this.cakeService.getCakeList().subscribe(data => {
      this.cake = data;
    });
  }

  cakeDetails(id: number){
    this.router.navigate(['cake-details', id]);
  }

  updateCake(id: number){
    this.router.navigate(['update-cake', id]);
  }

  deleteCake(id: number){
    this.cakeService.deleteCake(id).subscribe( data => {
      console.log(data);
      this.getCake();
    })
  }
}
