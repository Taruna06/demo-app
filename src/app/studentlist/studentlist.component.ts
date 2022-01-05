import { Component, OnInit } from '@angular/core';
import studentData from '../student.json';
import '../../../src/custom.js';
interface Student { 
  id:Number,
  name:String,
  email:String,
  gender:String,
  marks:Number,
}

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {

  constructor() { }

  students:Student[] = studentData; 
  ngOnInit(): void { }

  
}
