import { describe, expect, test } from '@jest/globals';
import { olderThan24Hours } from '../utils/dates';

describe('olderThan24Hours module', () => {
  test('is older than 24 hours', () => {
    const todayDate = new Date()
    const yesterdayDate = new Date()
    yesterdayDate.setDate(todayDate.getDate() - 2)

    expect(olderThan24Hours(yesterdayDate.getTime())).toBe(true);
  });
  test('is younger than 24 hours', () => {
    expect(olderThan24Hours(Date.now())).toBe(false);
  });
  test('unexpected timestamp', () => {
    expect(olderThan24Hours(-50)).toBe(false);
  })
});