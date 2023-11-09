
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, UrlSegment } from '@angular/router';
import { HttpClient } from "@angular/common/http";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  [x: string]: any;
  registerForm!: FormGroup;
  submitted = false;


  constructor(private formBuilder: FormBuilder,private router: Router,private http: HttpClient) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          
      });

     
  }

  url = "https://jsonplaceholder.typicode.com/todos";
  httpData: any;


  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;
      this.http.get("https://jsonplaceholder.typicode.com/todos").subscribe((data: any) => {
        this.httpData = data;
      });
      console.log(this.httpData)
      this.router.navigate(['/tablenaem']);
      // stop here if form is invalid
    
  }
}

