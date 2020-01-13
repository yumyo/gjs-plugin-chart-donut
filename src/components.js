
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
  const burgerType = 'gjs-chart-donut';

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
            placeholder: 'Insert the two chart labels separated by a comma, following the same order as the matching values.',
            changeProp: 1,
          }
        ],  
        // Some default value
        chartvalues      : '10.3',
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
          function typeOf(obj) {
            return {}.toString.call(obj).split(' ')[1].slice(0, -1).toLowerCase();
          } 

          var chartValuesString = '{[ chartvalues ]}',
              chartValuesArray = JSON.parse("[" + chartValuesString + "]"),
              chartHeightString = '{[ chartheight ]}';

          var otherChartValuesString = 100 - chartValuesString;
          var otherChartValuesArray = JSON.parse("[" + otherChartValuesString + "]");

          console.log('chartValuesArray: ' + chartValuesArray);
          console.log(typeOf(chartValuesArray));

          console.log('otherChartValuesArray: ' + otherChartValuesArray);
          console.log(typeOf(otherChartValuesArray));

          var chartLabelsString = '{[ chartlabels ]}',
              chartLabelsArray = chartLabelsString.split(',');
          
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
              const chartConfig = {
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
                        type: 'ring',
                        tooltip: {
                            visible: false
                        },
                        plot: {
                            'border-width': 0,
                            'value-box': {
                                visible: true,
                                placement: 'out',
 	                              text: '%t\n%npv%',
                            },
                            slice: '70%',
                            animation: {
                                effect: '2',
                                method: '5',
                                sequence: 'ANIMATION_BY_PLOT',
                                speed: 'ANIMATION_FAST'
                            }
                        },
                        'scale-r': {
                            'ref-angle': 270
                        },
                        plotarea: {
                            margin: '0% 0% 0% 0%'
                        },
                        series: [

                            {
                                values: chartValuesArray,
                                text: chartLabelsArray[0],
                            },
                            {
                                values: otherChartValuesArray,
                                text: chartLabelsArray[1],
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
