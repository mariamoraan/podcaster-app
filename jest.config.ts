/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  resetMocks: false,
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  moduleNameMapper: {
    "common(.*)": "<rootDir>/src/common$1",
    "routes(.*)": "<rootDir>/src/top_podcasts$1",
    "top_podcasts(.*)": "<rootDir>/src/top_podcasts$1",
    "podcast_detail(.*)": "<rootDir>/src/top_podcasts$1",
    "episode_detail(.*)": "<rootDir>/src/top_podcasts$1",
  }, 
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",
};

export default config;
