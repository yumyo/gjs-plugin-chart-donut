
import {
  black,
  white,
  navy,
  green,
  lightGreen,
  darkGreen,
  orange,
  darkOrange,
  pink,
  lightPink,
  mediumPink,
  purple,
  mediumPurple,
  lightPurple
} from './consts';

export default (editor, opt = {}) => {
  const c = opt;
  const dc = editor.DomComponents;
  const defaultType = dc.getType('default');
  const defaultModel = defaultType.model;
  const burgerType = 'zing-chart-donut';

  dc.addType(burgerType, {
    model: defaultModel.extend({
      init() {
        this.listenTo(this, 'change:chartvalues change:chartheight change:chartlabels', this.handleTypeChange);
      },
      handleTypeChange() {
        const view = this.getView(); 
        view && view.render();
      },
      defaults: {
        ...defaultModel.prototype.defaults,
        draggable: false,
        droppable: false,
        copyable : false,
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
          },
          { 
            type: 'text', 
            name: 'chartlabels', 
            label: 'Chart Labels', 
            placeholder: 'Insert the chart labels separated by a comma, following the same order as the matching values.',
            changeProp: 1,
          }
        ],  
        // Some default value
        chartvalues      : '42,13,21,15',
        chartlabels      : 'First,Second,Third,Fourth',
        chartheight      : '400',
        chartBlack       : black,
        chartWhite       : white,
        chartNavy        : navy,
        chartGreen       : green,
        chartOrange      : orange,
        chartLightGreen  : lightGreen,
        chartDarkGreen   : darkGreen,
        chartDarkOrange  : darkOrange,
        chartPink        : pink,
        chartLightPink   : lightPink,
        chartMediumPink  : mediumPink,
        chartPurple      : purple,
        chartMediumPurple: mediumPurple,
        chartLightPurple : lightPurple,
        script: function ( ) {

          var chartValuesString = '{[ chartvalues ]}',
              chartValuesArray = JSON.parse("[" + chartValuesString + "]"),
              chartHeightString = '{[ chartheight ]}';

          var chartLabelsString = '{[ chartlabels ]}',
              chartLabelsArray = chartLabelsString.split(',');
          console.log('chartLabelsString ' + chartLabelsString);
              // var chartLabelsArray = JSON.parse("[" + chartLabelsString + "]");

              // console.log(chartLabelsArray);

          var chartOrange      = '{[ chartOrange ]}',
              chartBlack       = '{[ chartBlack ]}',
              chartWhite       = '{[ chartWhite ]}',
              chartNavy        = '{[ chartNavy ]}',
              chartGreen       = '{[ chartGreen ]}',
              chartLightGreen  = '{[ chartLightGreen ]}',
              chartDarkGreen   = '{[ chartDarkGreen ]}',
              chartDarkOrange  = '{[ chartDarkOrange ]}',
              chartPink        = '{[ chartPink ]}',
              chartLightPink   = '{[ chartLightPink ]}',
              chartMediumPink  = '{[ chartMediumPink ]}',
              chartPurple  = '{[ chartPurple ]}',
              chartMediumPurple  = '{[ chartMediumPurple ]}',
              chartLightPurple = '{[ chartLightPurple ]}';

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
                scaleX: {
                  'line-width': 0,
                  'values': chartLabelsArray,
                  item: {
                    visible: true,
                    fontSize: 11,
                    clipText: false,
                    wrapText: true,
                    textAlign: 'center'
                  },
                  itemsOverlap: true,
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
                  itemsOverlap: false,
                  'line-width': 0,
                  format: '%v %',
                  item: {
                    visible: true
                  },
                  tick: {
                    visible: true
                  },
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
                        'background-color': chartOrange
                      },
                      {
                        'font-color': 'black',
                        'background-color': chartPurple
                      },
                      {
                        'font-color': 'black',
                        'background-color': chartMediumPurple
                      },
                      {
                        'font-color': 'black',
                        'background-color': chartLightPurple
                      },
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
