import { Component, OnInit } from '@angular/core';
import { CakeService } from '../cake.service';
import { Cake } from '../cake';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-cake',
  templateUrl: './update-cake.component.html',
  styleUrls: ['./update-cake.component.css']
})
export class UpdateCakeComponent implements OnInit {

  id: number;
  cake: Cake = new Cake();
  constructor(private cakeService: CakeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.cakeService.getCakeById(this.id).subscribe(data => {
      this.cake = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.cakeService.updateCake(this.id, this.cake).subscribe( data =>{
      this.goToCakeList();
    }
    , error => console.log(error));
  }

  goToCakeList(){
    this.router.navigate(['/cake']);
  }
}
