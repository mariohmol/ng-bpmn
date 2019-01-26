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
    this.ucBpmn.bpmnJS.saveXML((err, xml) => {
      this.xml = xml;
      const x2js = new X2JS();
      this.json = x2js.xml2js(xml);
      console.log(this.json)
    });
  }

  readJson() {
    const x2js = new X2JS();
    const xml = x2js.js2xml(this.json);
    console.log(xml);
    this.ucBpmn.loadXml(xml);
  }
}
