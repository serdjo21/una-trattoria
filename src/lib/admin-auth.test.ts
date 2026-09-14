import test from 'node:test';
import assert from 'node:assert/strict';

import { verifyAdminCredentials } from './admin-auth.ts';

const TEST_ADMIN_USERNAME = 'milos';
const TEST_ADMIN_PASSWORD = '#Marlboro2022';

test('accepts the configured admin username and password', () => {
  process.env.ADMIN_USERNAME = TEST_ADMIN_USERNAME;
  process.env.ADMIN_PASSWORD = TEST_ADMIN_PASSWORD;

  assert.equal(verifyAdminCredentials('milos', '#Marlboro2022'), true);
});

test('rejects invalid credentials', () => {
  process.env.ADMIN_USERNAME = TEST_ADMIN_USERNAME;
  process.env.ADMIN_PASSWORD = TEST_ADMIN_PASSWORD;

  assert.equal(verifyAdminCredentials('milos', 'wrong-password'), false);
  assert.equal(verifyAdminCredentials('other-user', '#Marlboro2022'), false);
});

test('rejects empty environment configuration', () => {
  const previousUsername = process.env.ADMIN_USERNAME;
  const previousPassword = process.env.ADMIN_PASSWORD;

  process.env.ADMIN_USERNAME = '';
  process.env.ADMIN_PASSWORD = '';

  assert.equal(verifyAdminCredentials('milos', '#Marlboro2022'), false);

  if (previousUsername === undefined) {
    delete process.env.ADMIN_USERNAME;
  } else {
    process.env.ADMIN_USERNAME = previousUsername;
  }

  if (previousPassword === undefined) {
    delete process.env.ADMIN_PASSWORD;
  } else {
    process.env.ADMIN_PASSWORD = previousPassword;
  }
});
