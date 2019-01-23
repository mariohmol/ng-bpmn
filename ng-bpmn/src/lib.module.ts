import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BpmnEditorComponent } from './bpmn/bpmn.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
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
