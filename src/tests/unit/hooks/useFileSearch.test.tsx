import React from 'react';
import useFileSearch from '../../../hooks/useFileSearch';
import dummyFiles from '../helpers/dummyFiles';

describe('useFileSearch.ts', () => {
  it('should return return null when given invalid pathname', () => {
    const mockUseContext = jest.fn().mockImplementation(() => ({
      fileData: dummyFiles
    }));
    React.useContext = mockUseContext;
    const result = useFileSearch('error');
    expect(result).toBeFalsy();
  });
  it('should return expenses', () => {
    const mockUseContext = jest.fn().mockImplementation(() => ({
      fileData: dummyFiles
    }));
    React.useContext = mockUseContext;
    const result = useFileSearch('expenses');
    const expected = {
      type: 'folder',
      name: 'Expenses',
      files: [{ type: 'doc', name: 'Expenses_claim_form', added: '2000-05-02' }]
    };
    expect(result).toStrictEqual(expected);
  });
});
