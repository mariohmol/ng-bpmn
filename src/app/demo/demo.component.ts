import { Component, OnInit, ViewChild } from '@angular/core';
import { BpmnEditorComponent } from 'ng-bpmn';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  @ViewChild(BpmnEditorComponent) ucBpmn: BpmnEditorComponent;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    const url = '/assets/default.bpmn';
    this.http.get(url, {
      headers: {observe: 'response'}, responseType: 'text'
    }).subscribe(
      (x: any) => {
        this.ucBpmn.loadXml(x);
      },
      console.log
    );
  }

}
