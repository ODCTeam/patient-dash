import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { ContractServiceService } from './../../services/contract-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-immobilier',
  templateUrl: './add-immobilier.component.html',
  styleUrls: ['./add-immobilier.component.scss']
})
export class AddImmobilierComponent implements OnInit {
  form: FormGroup
  constructor(private Formbuilder: FormBuilder, private contractService: ContractServiceService, private router: Router) { }

  ngOnInit() {
    this.form = this.Formbuilder.group({
      titre: "",
      ville: "",
      price: "",
      surface: "",
      picture: "",
    });
  }
  register() {
    const data = {
      addressOwner: localStorage.getItem("useraddress"),
      titre: this.form.getRawValue().titre,
      ville: this.form.getRawValue().ville,
      price: this.form.getRawValue().price,
      surface: this.form.getRawValue().surface,
      image: "./assets/img/immobilier/image17.jfif",
      isAnnounced: 1,
    }
    
    this.contractService.SaveImmobilier(data).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl("/User/MyImmobiliers");
    })
  }


}
