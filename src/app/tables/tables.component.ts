import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent {
  name = 'Angular';

  columns = ['name', 'age', ''];


  data = [
    {
      "_id": "5d2bdad4d23987041dc5c8d6",
      "age": 29,
      "name": "William",
      "company": "FLEXIGEN",
      "email": "undefined.undefined@flexigen.co.uk",
      "phone": "+1 (893) 475-3508",
      "address": "807 Sharon Street, Boomer, Missouri, 3484"
    },
    {
      "_id": "5d2bdad4035e6cad7b39a9c8",
      "age": 21,
      "name": "Atkinson",
      "company": "PULZE",
      "email": "undefined.undefined@pulze.tv",
      "phone": "+1 (901) 541-2875",
      "address": "898 Arkansas Drive, Gloucester, Delaware, 8173"
    },
    {
      "_id": "5d2bdad4e34f03ad91d999bd",
      "age": 21,
      "name": "Gretchen",
      "company": "ENVIRE",
      "email": "undefined.undefined@envire.biz",
      "phone": "+1 (840) 587-2019",
      "address": "635 Berkeley Place, Freeburn, Idaho, 866"
    },
    {
      "_id": "5d2bdad4f5a5c141f34adc93",
      "age": 20,
      "name": "Olson",
      "company": "MARTGO",
      "email": "undefined.undefined@martgo.us",
      "phone": "+1 (800) 408-2978",
      "address": "845 Bay Street, Johnsonburg, Montana, 7584"
    },
    {
      "_id": "5d2bdad48a0315859623e102",
      "age": 33,
      "name": "Camacho",
      "company": "RAMJOB",
      "email": "undefined.undefined@ramjob.name",
      "phone": "+1 (864) 546-3079",
      "address": "287 Micieli Place, Marbury, New Hampshire, 5877"
    }
  ]
}

