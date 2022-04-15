import { columns, options } from '@/pages/Campaigns/tableMetadata';

export const dataTableData = {
  emptyData: {
    title: '',
    data: [],
    columns: [],
    options: {},
  },
  nonEmptyData: {
    title: '',
    data: [
      ['Divavu', 'Clementine Bauch', '2022-01-19', '2022-04-30', true, '88.38K USD'],
      ['Jaxspannnn', 'Mrs. Dennis Schulist', '2017-11-21', '2018-02-21', false, '608.72K USD'],
      ['Trilith', 'Leanne Graham', '2017-08-25', '2017-11-30', false, '179.84K USD'],
      ['Layo', 'Glenna Reichert', '2017-11-28', '2018-03-10', false, '837.85K USD'],
      ['Blogtag', 'Ervin Howell', '2017-06-27', '2018-01-15', false, '109.08K USD'],
      ['Rhyzio', 'Patricia Lebsack', '2017-10-13', '2018-01-25', false, '272.55K USD'],
      ['Zoomcast', 'Nicholas Runolfsdottir V', '2017-09-06', '2017-11-10', false, '301.92K USD'],
    ],
    columns: columns,
    options: options,
  },
};
