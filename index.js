export const vtMock1 = () => vi.doMock('uuid', () => {
  console.log('mocking');
  return {
    v4: () => 'uuid'
  }
});

export const vtMock2 = () => vi.doMock('1something1', () => {
  console.log('mocking something');
  return {
    something: true
  };
});