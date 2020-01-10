import grapesjs from 'grapesjs';
import loadBlocks from './blocks';
import loadComponents from './components';
import {
  hChartRef
} from './consts';

export default grapesjs.plugins.add('gjs-chart-pie', (editor, opts = {}) => {
  let c = opts;

  let defaults = {
    blocks: [hChartRef],
    defaultStyle: 1,
    chartClsPfx: 'chart-pie',
    labelChart: 'Pie Chart Single',
    labelChartBlock: 'Chart Pie Single',
    labelChartCategory: 'Charts',
  };

  // Load defaults
  for (let name in defaults) {
    if (!(name in c))
      c[name] = defaults[name];
  }

  loadBlocks(editor, c);
  loadComponents(editor, c);
});
