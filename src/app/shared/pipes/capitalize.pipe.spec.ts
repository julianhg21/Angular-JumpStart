import { CapitalizePipe } from './capitalize.pipe';

describe('CapitalizePipe', () => {
  const pipe = new CapitalizePipe();
  it('capitalizes the first character of a customer name', () => {
    expect(pipe.transform('ana')).toBe('Ana');
  });
  it('preserves an empty string', () => {
    expect(pipe.transform('')).toBe('');
  });
  it('preserves non-string values', () => {
    expect(pipe.transform(42)).toBe(42);
    expect(pipe.transform(null)).toBeNull();
  });
});
