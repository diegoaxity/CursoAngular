import { Component, OnInit } from '@angular/core';
import { ConsumeService } from '../services/consume.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private consumeService: ConsumeService) { }

  ngOnInit() {
  }

  getUser() {
    this.consumeService.getUser().subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
      alert(err);
    });
  }
}
