
import createFlatArray from '../../../utils/createFlatArray';
import fileSearchByName from '../../../utils/fileSearchByName';
import dummyFiles from '../helpers/dummyFiles';
describe('fileSearchByName.ts',() => {
  const flattenedFileData = createFlatArray(dummyFiles);
  it('Should return an array of items found', () => {
    const result = fileSearchByName('Public Holiday policy', flattenedFileData);
    expect(Array.isArray(result)).toBeTruthy();
    expect(result).toHaveLength(1);
  });
  it('When multiple items have the same name it should return an array of all the items found', () => {
    const result = fileSearchByName('EmployeeHandbook', flattenedFileData);
    expect(result).toHaveLength(2);
  });
  it('When no items are found it should return an empty array', () => {
    const result = fileSearchByName('Not a valid file name', flattenedFileData);
    expect(result).toHaveLength(0);
  })
})