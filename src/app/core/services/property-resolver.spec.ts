import { PropertyResolver } from './property-resolver';

describe('PropertyResolver', () => {
  it('resolves a direct property', () => {
    expect(PropertyResolver.resolve('name', { name: 'Ana' })).toBe('Ana');
  });
  it('resolves the nested state name used by customer sorting', () => {
    expect(PropertyResolver.resolve('state.name', { state: { name: 'Guatemala' } })).toBe('Guatemala');
  });
  it('returns undefined for a missing intermediate property', () => {
    expect(PropertyResolver.resolve('state.name', {})).toBeUndefined();
  });
});
