export default (editor, opt = {}) => {
  const c = opt;
  const dc = editor.DomComponents;
  const defaultType = dc.getType('default');
  const defaultModel = defaultType.model;
  const burgerType = 'zing-chart-donut';

  dc.addType(burgerType, {
    model: defaultModel.extend({
      init() {
        this.listenTo(this, 'change:chartvalues', this.handleTypeChange);
      },
      handleTypeChange() {
        const view = this.getView(); 
        view && view.render();
      },
      defaults: {
        ...defaultModel.prototype.defaults,
        draggable: false,
        droppable: false,
        copyable: false,
        removable: false,
        traits: [
          // Strings are automatically converted to text types
          { 
            type: 'text', // If you don't specify the type, the `text` is the default one
            name: 'chartvalues', // Required and available for all traits
            label: 'Chart Values', // The label you will see near the input
            // label: false, // If you set label to `false`, the label column will be removed
            placeholder: 'Insert the chart values separated by a comma.',
            changeProp: 1,
          }
        ],  
        // Some default value
        chartvalues: '42,13,21,15,33',
        script: function ( ) {
          string = '{[ chartvalues ]}';
          var array = JSON.parse("[" + string + "]");
          var myConfig = {
            'type':'line',
            'series':[
                {
                    'values':array 
                }
              ]
          };
          // Get the element ID
          const el = this;
          const ID = el.id;
          zingchart.render({ 
            id : ID, 
            data : myConfig, 
            height: 400, 
            width: '100%' 
          });            
          
        },
        style: {
          padding: '0'
        },
      },
      
    }, {
      isComponent(el) {
        if(el.getAttribute &&
          el.getAttribute('data-gjs-type') == burgerType) {
          return {type: burgerType};
        }
      },
    }),
    view: defaultType.view,
  });
}
