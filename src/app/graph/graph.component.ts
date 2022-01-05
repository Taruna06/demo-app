import { Component, OnInit } from '@angular/core';
import studentData from '../student.json';
interface Student { 
  id:Number,
  name:String,
  email:String,
  gender:String,
  marks:Number,
}

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  constructor() { }
  students:Student[] = studentData; 
  ngOnInit(): void {
  }

}
