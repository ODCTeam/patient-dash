import { ContractServiceService } from './../../services/contract-service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-DeviceList',
  templateUrl: './DeviceList.component.html',
  styleUrls: ['./DeviceList.component.scss']
})
export class DeviceListComponent implements OnInit {

  constructor(private router:Router,private contractService : ContractServiceService) { }

  public Transactions: any[];

  ngOnInit() {
    /* 
    if (localStorage.getItem("Role") != "0") {
      this.router.navigateByUrl("/User/forbidden");
    }
    */
    // if (localStorage.getItem("username") == null) {
    //   this.router.navigateByUrl("/User/forbidden");
    // }
    // this.contractService.AllTransactions().subscribe((res:any)=>{
    //   this.Transactions = res;
    //   this.Transactions = this.Transactions.filter(Transaction => Transaction);
    //   console.log(this.Transactions);
    // });

    

  }





}
