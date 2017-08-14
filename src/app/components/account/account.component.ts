import { Component, OnInit } from '@angular/core';
import { DataService }  from '../../services/data.service';
 
import { Account } from '../../models/account';
 
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  accounts:Account[];
 
  constructor(private ds:DataService) { }
 
  ngOnInit() {
    this.ds.getAccounts().subscribe((acts)=>{
      this.accounts = acts;
    });
  }
 
}
