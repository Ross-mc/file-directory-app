import { FileType } from '../types/file';

const files: Array<FileType> = [
  {
    type: 'pdf',
    name: 'EmployeeHandbook',
    added: '2017-01-06'
  },
  {
    type: 'pdf',
    name: 'Public Holiday policy',
    added: '2016-12-06'
  },
  {
    type: 'folder',
    name: 'Expenses',
    files: [
      {
        type: 'doc',
        name: 'Expenses_claim_form',
        added: '2017-05-02'
      },
      {
        type: 'doc',
        name: 'Fuel allowances',
        added: '2017-05-03'
      },
      {
        type: 'folder',
        name: 'historical',
        files: [
          {
            type: 'doc',
            name: 'Meals',
            added: '2010-05-02'
          },
          {
            type: 'doc',
            name: 'Stationary',
            added: '2013-05-03'
          },
          {
            type: 'doc',
            name: 'Meals',
            added: '2015-08-15'
          }
        ]
      }
    ]
  },
  {
    type: 'csv',
    name: 'Cost centres',
    added: '2016-08-12'
  },
  {
    type: 'folder',
    name: 'Misc',
    files: [
      {
        type: 'doc',
        name: 'Christmas party',
        added: '2017-12-01'
      },
      {
        type: 'mov',
        name: 'Welcome to the company!',
        added: '2015-04-24'
      }
    ]
  }
];

export default files;
