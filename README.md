# Angular bpmn module
Jquery bpmn module [Bpmn](https://bpmn.io) 

This package wraps the bpmn module for Angular.

[![latest](https://img.shields.io/npm/v/ng-bpmn/latest.svg)](http://www.npmjs.com/package/ng-bpmn) 
[![Npm Downloads](https://img.shields.io/npm/dt/ng-bpmn.svg?maxAge=2592000)](https://www.npmjs.com/package/ng-bpmn)

Demo project in Stackblitz [DEMO](https://stackblitz.com/edit/ng-bpmn)

Demo src [Demo](https://github.com/mariohmol/ng-bpmn/src/app/demo)

This package support Angular 6, see please demo src.


## Getting started

Install via [npm](http://npmjs.com) :

```bash
npm install ng-bpmn
npm install bpmn-js@3.1.0
```

Then include the `NgBpmnEditorModule` module in your module.

```typescript
import { NgBpmnEditorModule } from 'ng-bpmn';

@NgModule({
  imports: [
    BrowserModule,
    NgBpmnEditorModule,
    ...
  ]
  ...
})
export class AppModule {}
```
For index.html style urls 

```html
   <!-- necessary stylesheets -->
<link rel="stylesheet" href="https://unpkg.com/bpmn-js@3.1.0/dist/assets/diagram-js.css" />
<link rel="stylesheet" href="https://unpkg.com/bpmn-js@3.1.0/dist/assets/bpmn-font/css/bpmn.css" />
```

Or you can add this in your SCSS pipe 

```scss
@import "~bpmn-js/dist/assets/diagram-js.css";
@import "~bpmn-js/dist/assets/bpmn-font/css/bpmn.css";
```

Import BpmnEditorComponent in your component :

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { BpmnEditorComponent } from 'ng-bpmn';
import { Options } from 'bpmn';

@Component({
  selector: 'demo-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  options: Options;
  @ViewChild(BpmnEditorComponent) ucDiagram: BpmnEditorComponent;
  constructor() {}
  ngOnInit() {
  }

}
```
then your app.component.html

```html
<div *ngIf="options">
    <ng-bpmn #ucDiagram type="modeler"></ng-bpmn>
</div>
```

## Events binging

TODO: 

## Development

* npm i @angular/compiler tsickle typescript@3.1.6 -g

## Thanks

- Mario Mol ([@mariohmol](https://github.com/mariohmol))

## License

MIT
