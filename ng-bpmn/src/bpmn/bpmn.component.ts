import {
  AfterContentInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  ViewChild,
  SimpleChanges,
  EventEmitter,
  OnInit
} from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Subscription, Observable } from 'rxjs';

/**
 * You may include a different variant of BpmnJS:
 *
 * Viewer  - displays BPMN diagrams without the ability
 *           to navigate them
 * Modeler - bootstraps a full-fledged BPMN editor
 */
import BpmnJS from 'bpmn-js/lib/NavigatedViewer.js';
import BpmnViewerJS from 'bpmn-js/lib/Viewer.js';
import BpmnModelerJS from 'bpmn-js/lib/Modeler.js';
// import ModelerBpmnJS from 'bpmn-js/dist/bpmn-modeler.production.min.js';
// import BpmnJS from 'bpmn-js';

import { importDiagram } from './lib';

@Component({
  selector: 'ng-bpmn',
  template: `
    <div #ref class="diagram-container"></div>
  `,
  styles: [
    `
      .diagram-container {
        height: 100%;
        width: 100%;
      }
    `
  ]
})
export class BpmnEditorComponent implements AfterContentInit, OnChanges, OnDestroy, OnInit {
  private bpmnJS: any; // BpmnJS

  @ViewChild('ref') public el: ElementRef;
  @Output() private importDone: EventEmitter<any> = new EventEmitter();
  @Input() public url: string;
  @Input() public type: string; // viewer or modeler

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    if (this.type === 'modeler') {
      this.bpmnJS = new BpmnModelerJS();
    } else if (this.type === 'viewer') {
      this.bpmnJS = new BpmnViewerJS();
    } else {
      this.bpmnJS = new BpmnJS();
    }
    this.bpmnJS.on('import.done', (data: any) => {
      if (!data.error) {
        this.bpmnJS.get('canvas').zoom('fit-viewport');
      }
    });
  }

  ngAfterContentInit(): void {
    this.bpmnJS.attachTo(this.el.nativeElement);
  }

  ngOnChanges(changes: SimpleChanges) {
    // re-import whenever the url changes
    if (changes.url) {
      this.loadUrl(changes.url.currentValue);
    }
  }

  ngOnDestroy(): void {
    this.bpmnJS.destroy();
  }

  /**
   * Load diagram from URL and emit completion event
   */
  loadUrl(url: string) {

    return this.http.get(url, { responseType: 'text' }).pipe(
      catchError(err => Observable.throw(err)),
      importDiagram(this.bpmnJS)
    ).subscribe(
      (warnings) => {
        this.importDone.emit({
          type: 'success',
          warnings
        });
      },
      (err) => {
        this.importDone.emit({
          type: 'error',
          error: err
        });
      }
    );
  }

}
