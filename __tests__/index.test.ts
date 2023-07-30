import LordOfTheRingsSDK from '../src';
import { Base } from '../src/base';
import { expect, describe, it, beforeEach, afterEach } from '@jest/globals';

jest.mock('../src/base', () => ({
  Base: jest.fn(),
}));

describe('LordOfTheRingsSDK', () => {
  beforeEach(() => {
    // Clear all mock function calls and instances before each test
    jest.clearAllMocks();
  });

  it('should extend Base class', () => {
    expect(LordOfTheRingsSDK.prototype instanceof Base).toBe(true);
  });

  // Add more test cases for the LordOfTheRingsSDK class if needed
});
