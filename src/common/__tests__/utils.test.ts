import { describe, expect, it, test } from '@jest/globals';
import { getReadableDate, millisecondsToSecondsAndMinutes, olderThan24Hours } from '../utils/dates';

describe('olderThan24Hours module', () => {
  test('is older than 24 hours', () => {
    const todayDate = new Date()
    const yesterdayDate = new Date()
    yesterdayDate.setDate(todayDate.getDate() - 2)

    expect(olderThan24Hours(yesterdayDate.getTime())).toBe(true);
  });
  it('is younger than 24 hours', () => {
    expect(olderThan24Hours(Date.now())).toBe(false);
  });
  it('unexpected timestamp', () => {
    expect(olderThan24Hours(-50)).toBe(false);
  })
});

describe('getReadableDate module', () => {
  const testCases = [
    {date: '1999-06-02', expected: '02/06/1999'}, // case with month & day < 10
    {date: '1999-12-20', expected: '20/12/1999'}, // case with month & day > 10
    {date: '1999-10-10', expected: '10/10/1999'}, // case with month & day == 10
  ]
  testCases.map(({date, expected}) => {
    it(`Transforms new Date(${date}) into ${expected}`, () => {
      expect(getReadableDate(new Date(date))).toBe(expected)
    })
  })
})

describe('millisecondsToSecondsAndMinutes module', () => {
  const testCases = [
    {milliseconds: 360000, expected: '06:00'}, // case with minutes (0 seconds)
    {milliseconds: 1000, expected: '00:01'}, // case with seconds (0 minutes)
    {milliseconds: 3610000, expected: '60:10'}, // case with minutes and seconds
  ]
  testCases.map(({milliseconds, expected}) => {
    it(`Transforms ${milliseconds}ms into ${expected}`, () => {
      expect(millisecondsToSecondsAndMinutes(milliseconds)).toBe(expected)
    })
  })
})
