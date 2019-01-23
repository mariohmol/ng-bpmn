import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BpmnEditorComponent } from './bpmn/bpmn.component';

@NgModule({
  imports: [
    CommonModule
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
