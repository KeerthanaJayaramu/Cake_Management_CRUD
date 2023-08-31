import { Component, OnInit } from '@angular/core';
import { Cake } from '../cake';
import { ActivatedRoute } from '@angular/router';
import { CakeService } from '../cake.service';

@Component({
  selector: 'app-cake-details',
  templateUrl: './cake-details.component.html',
  styleUrls: ['./cake-details.component.css']
})
export class CakeDetailsComponent implements OnInit {

  id: number
  cake: Cake
  constructor(private route: ActivatedRoute, private cakeService: CakeService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.cake = new Cake();
    this.cakeService.getCakeById(this.id).subscribe( data => {
      this.cake = data;
    });
  }

}
