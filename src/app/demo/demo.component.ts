import { Component, OnInit, ViewChild } from '@angular/core';
import { BpmnEditorComponent } from 'ng-bpmn';
import { HttpClient } from '@angular/common/http';
import * as X2JS from 'x2js';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  @ViewChild(BpmnEditorComponent) ucBpmn: BpmnEditorComponent;
  xml;
  json;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    const url = '/assets/default.bpmn';
    this.http.get(url, {
      headers: { observe: 'response' }, responseType: 'text'
    }).subscribe(
      (x: any) => {
        this.ucBpmn.loadXml(x);
      },
      console.log
    );
  }

  export() {
    this.ucBpmn.bpmnJS.saveXML((err, data) => {
      console.log(data);
    });
  }

  exportJson() {
    this.ucBpmn.getJson().then(json => {
      console.log(json);
      this.json = json;
    })
  }

  readJson() {
    const xml = this.ucBpmn.loadJson(this.json)
    console.log(xml);
  }
}
