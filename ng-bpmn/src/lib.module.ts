import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BpmnEditorComponent } from './bpmn/bpmn.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule
  ],
  declarations: [
    BpmnEditorComponent
  ],
  exports: [
    BpmnEditorComponent
  ]
})
export class NgBpmnEditorModule {

  public static forRoot(): ModuleWithProviders {

    return {
      ngModule: NgBpmnEditorModule,
      providers: [
      ]
    };
  }
}
