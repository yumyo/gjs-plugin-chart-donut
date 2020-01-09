
import {
  colorOrange
} from './consts';

console.log (colorOrange);

var orange = '#ccc';

export default (editor, opt = {}) => {
  const c = opt;
  const dc = editor.DomComponents;
  const defaultType = dc.getType('default');
  const defaultModel = defaultType.model;
  const burgerType = 'zing-chart-donut';

  dc.addType(burgerType, {
    model: defaultModel.extend({
      init() {
        this.listenTo(this, 'change:chartvalues change:chartheight', this.handleTypeChange);
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
          },
          { 
            type: 'text', 
            name: 'chartheight', 
            label: 'Chart Height', 
            placeholder: 'Insert the chart height without unit (px).',
            changeProp: 1,
          }
        ],  
        // Some default value
        chartvalues: '42,13,21,15,33',
        chartheight: '400',
        colorOrange : orange,
        script: function ( ) {
          chartValuesString = '{[ chartvalues ]}';
          let orange = '{[ colorOrange ]}';
          var chartValuesArray = JSON.parse("[" + chartValuesString + "]");
          chartHeightString = '{[ chartheight ]}';
          // var chartConfig = {
          //   'type':'bar',
          //   'series':[
          //       {
          //           'values': chartValuesArray 
          //       }
          //     ]
          // };
          var chartConfig = {
            globals: {
              alpha: 1,
              fontColor: 'black',
              fontWeight: 'normal'
            },
            gui: {
              'context-menu': {
                button: {
                  visible: 0
                },
                gear: {}
              }
            },
            graphset: [
              {
                type: 'bar',
                plot: {
                  'value-box': {
                    text: '%v %',
                    'font-size': 15,
                    placement: 'top-out',
                    fontWeight: 'normal',
                    decimalsSeparator: ',',
                    backgroundColor: '#FFFFFF',
                    shadow: false,
                    borderWidth: 0,
                    padding: 3
                    // offsetY: 5
                  },
                  tooltip: {
                    visible: false
                  },
                  barMaxWidth: '50%',
                  animation: {
                    effect: '11',
                    method: '5',
                    sequence: 'ANIMATION_BY_NODE',
                    speed: 1
                  }
                },
                plotarea: {
                  margin: 'dynamic'
                },
                scale: {
                  'size-factor': 0.5
                },
                scaleX: {
                  labels: '',
                  'line-width': 0,
                  item: {
                    visible: true,
                    fontSize: 11,
                    clipText: false,
                    wrapText: true,
                    maxWidth: 80,
                    textAlign: 'center'
                  },
                  decimalsSeparator: ',',
                  itemsOverlap: true,
                  maxItems: 4,
                  tick: {
                    visible: false
                  },
                  guide: {
                    visible: false,
                    lineStyle: 'solid',
                    lineColor: 'black'
                  }
                },
                scaleY: {
                  'min-value': 0,
                  'max-value': 17,
                  itemsOverlap: true,
                  step: 4,
                  'line-width': 0,
                  format: '%v %',
                  item: {
                    visible: true
                  },
                  tick: {
                    visible: true
                  },
                  decimalsSeparator: ',',
                  guide: {
                    visible: true
                  },
                  minorGuide: {
                    visible: false
                  },
                  label: {
                    visible: false
                  }
                },
                series: [
                  {
                    'values': chartValuesArray,
                    styles: [
                      {
                        'font-color': 'black',
                        'background-color': orange
                      },
                      {
                        'font-color': 'black',
                        'background-color': purple
                      },
                      {
                        'font-color': 'black',
                        'background-color': mediumPurple
                      },
                      {
                        'font-color': 'black',
                        'background-color': lightPurple
                      }
                    ]
                  }
                ]
              }
            ]
          };
          // Get the element ID
          const el = this;
          const ID = el.id;
          console.log(chartHeightString);
          zingchart.render({ 
            id : ID, 
            data : chartConfig, 
            height: chartHeightString, 
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
