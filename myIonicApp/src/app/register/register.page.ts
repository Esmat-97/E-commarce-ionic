import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone:true,
  imports:[FormsModule ,CommonModule ,IonicModule],
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage  {

  constructor(private http:HttpClient){}

  signData:any={
    username:'',
    email:'',
    password:''
  };

  submitForm(main: any) {
  
    this.signData=main.value;
  
    console.log('Form data submitted:', this.signData);

    this.http.post('http://localhost:1999/api',this.signData).subscribe( response =>{

    console.log('Data sent successfully');
   
    })
  }


}
