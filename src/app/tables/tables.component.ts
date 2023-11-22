import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit{
  @Input()
  child!: any[];
  items: any=[]
  start: any;
  last: any;
  pagesixe: any;
  rows: any[] = []; // Your actual data
  filteredRows: any[] = [];
  searchText: any;
  i: any;
  name!: string;
  userId!: string;
  updatedRow: any;
 
constructor(private router: Router,private http: HttpClient){
  // for (let i = 1; i <= 100; i++) {
  //   this.maindata.push(`item ${i}`);
  // }
}
p: number = 1;
 ngOnInit(): void {
  this.http.get("https://jsonplaceholder.typicode.com/todos").subscribe((data: any) => {
      
        this.items = data
        console.log(data)
      });
      this.pagesixe=20
   
 }

 listCount(count:any) {
  this.start = count
  //this.start = this.start * this.pagesixe 
  this.last = count * 20
  if (this.last > this.items.length) {
    this.last = this.items.length;
    }
    console.log('start'+ '      '+this.start + '      '+'last' + '      '+ this.last);
  }
  id:any;
  title:any;
  userid:any
  completed:any;
  addTableData() {
    const obj = {
      id: this.id,
      title: this.title,
      userId: this.userid,
      completed: this.completed
    }
    this.items.push(obj);
  }

  deleteRow(i: any){
   const message = confirm('Do you want to delete');
   if(message == true) {
    this.items.splice(i, 1);
   }
  } 

  updateRow(updatedRow: any): void {
    const index = this.items.findIndex((item: any) => item.id === updatedRow.id);
  if(index !== -1) {
    this.items[index] = updatedRow;
  }
  }
}

