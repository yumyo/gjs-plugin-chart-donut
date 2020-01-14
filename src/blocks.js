import {
  hChartRef,
  chartRef
} from './consts';

export default (editor, opt = {}) => {
  const c = opt;
  const bm = editor.BlockManager;
  const chartClsPfx = c.chartClsPfx || 'chart-donut';

  if (c.blocks.indexOf(hChartRef) >= 0) {
    bm.add(hChartRef, {
      label: `
      <svg xmlns="http://www.w3.org/2000/svg" style="width: 60px;" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" x="0px" y="0px" viewBox="0 0 100 125" enable-background="new 0 0 100 100" xml:space="preserve"><path fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="  M67.034,57.604c1.037-2.322,1.63-4.892,1.63-7.604c0-7.958-4.985-14.731-11.999-17.418v-21.98C75.578,13.779,90,30.185,90,50  c0,8.637-2.767,16.611-7.421,23.15C77.649,68.223,71.979,62.548,67.034,57.604z"/><path fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="  M63.196,63.197C59.82,66.575,55.155,68.665,50,68.665c-10.312,0-18.668-8.356-18.668-18.665c0-10.309,8.356-18.665,18.668-18.665V10  c-22.092,0-40,17.907-40,40c0,22.091,17.908,40,40,40c11.047,0,21.047-4.479,28.283-11.716  C73.548,73.547,68.071,68.072,63.196,63.197z"/></svg>
        <div class="gjs-block-label">${c.labelChartBlock}</div>`,
      category: c.labelChartCategory,
      content: `
        <div class="${chartClsPfx}" data-gjs-droppable="false" data-gjs-custom-name="${c.labelChart}" data-gjs="${chartRef}">

            <div data-gjs-droppable="false" data-gjs-draggable="false"
            data-gjs-removable="false" data-gjs-copyable="false" data-gjs-highlightable="false"
            data-gjs-type="${chartClsPfx}">
              <div class="chart"></div>
            </div>

          </div>
        </div>
      `,
    });
  }
}
