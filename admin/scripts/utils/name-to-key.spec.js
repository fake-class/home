import { nameToKey } from './name-to-key';

describe('convert name to a key', () => {
  test('it should switch everything to lowercase', () => {
    const input = 'thisIsName';
    const expected = 'thisisname';
    const result = nameToKey(input);

    expect(result).toEqual(expected);
  });

  test('it should filter out unwanted characters', () => {
    const input = '?!#onlygoodchars%$(^/';
    const expected = 'onlygoodchars';

    expect(nameToKey(input)).toEqual(expected);
  });

  test('it should convert spaces to dashes', () => {
    const input = 'this has spaces';
    const expected = 'this-has-spaces';

    expect(nameToKey(input)).toEqual(expected);
  });

  test('it should not fail on a blank input', () => {
    const input = '';
    const expected = '';

    expect(nameToKey(input)).toEqual(expected);
  });

  test('it should not fail on array input', () => {
    const input = [];
    const expected = '';

    expect(nameToKey(input)).toEqual(expected);
  });

  test('it should not fail on object input', () => {
    const input = {};
    const expected = '';

    expect(nameToKey(input)).toEqual(expected);
  });
});
