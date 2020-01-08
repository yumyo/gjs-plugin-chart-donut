import grapesjs from 'grapesjs';
import loadBlocks from './blocks';
import loadComponents from './components';
import {
  hChartDonutRef
} from './consts';

export default grapesjs.plugins.add('gjs-chart-donut', (editor, opts = {}) => {
  let c = opts;

  let defaults = {
    blocks: [hChartDonutRef],
    defaultStyle: 1,
    chartDonutClsPfx: 'chart-donut',
    labelChartDonut: 'Donut Chart',
    labelChartDonutBlock: 'Chart Donut',
    labelChartDonutCategory: 'Charts',
  };

  // Load defaults
  for (let name in defaults) {
    if (!(name in c))
      c[name] = defaults[name];
  }

  loadBlocks(editor, c);
  loadComponents(editor, c);
});
