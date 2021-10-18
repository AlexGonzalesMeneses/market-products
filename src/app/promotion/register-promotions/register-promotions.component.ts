import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-promotions',
  templateUrl: './register-promotions.component.html',
  styleUrls: ['./register-promotions.component.css']
})
export class RegisterPromotionsComponent implements OnInit {
  public form!: FormGroup;
  public ListaProducts:any = [];

  constructor(private RestService:RestService,
    private formBuilder:FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.cargarData();
    
    this.form = this.formBuilder.group({
      title:['',Validators.required],
      idItem: ['',Validators.required],
      cantidad:['',Validators.required],
      dateIni: ['',Validators.required],
      dateEnd:['',Validators.required]
    });
  }

  public cargarData(){
    this.RestService.get('http://localhost:3000/products')
    .subscribe(respuesta =>{
      this.ListaProducts = respuesta;
    })
  }

  public enviarData(){
    this.RestService.post(`http://localhost:3000/promotions`,{     
      namePromotion:  this.form.value.title,
      idItem: this.form.value.idItem,
      discountRate: this.form.value.cantidad,
      iniDate:this.form.value.dateIni ,
      endDate: this.form.value.dateEnd
    }
    ).subscribe(respuesta =>{
      this.form.reset();
    })
    this.router.navigate(['/']);
  }
}
