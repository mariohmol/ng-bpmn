import { Component, OnInit, ViewChild } from '@angular/core';
import { BpmnEditorComponent } from 'ng-bpmn';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  @ViewChild(BpmnEditorComponent) ucBpmn: BpmnEditorComponent;

  constructor() { }

  ngOnInit() {
  }
}
