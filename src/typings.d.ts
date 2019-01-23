/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}
declare module 'bpmn-js/dist/bpmn-modeler.production.min.js';
declare module 'bpmn-js';
declare module 'bpmn-js/lib/NavigatedViewer.js';