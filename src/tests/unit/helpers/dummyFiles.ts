import { FileType } from "../../../types/file";

const dummyFiles: Array<FileType> = [
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
        added: '2000-05-02'
      }
    ]
  }
];

export default dummyFiles;
