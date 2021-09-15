import React from 'react';
import createFlatArray from '../../../utils/createFlatArray';
import dummyFiles from '../helpers/dummyFiles';
describe('createFlatArray.ts',() => {
  it('Should flatten an array of objects (with nested arrays and objects) to a single level array', () => {
    const result = createFlatArray(dummyFiles);
    expect(result.length).toBeGreaterThan(dummyFiles.length);
    expect(result).toHaveLength(5);
  })
})