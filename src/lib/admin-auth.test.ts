import test from 'node:test';
import assert from 'node:assert/strict';

import { verifyAdminCredentials } from './admin-auth.ts';

test('accepts the configured admin username and password', () => {
  assert.equal(verifyAdminCredentials('milos', '#Marlboro2022'), true);
});

test('rejects invalid credentials', () => {
  assert.equal(verifyAdminCredentials('milos', 'wrong-password'), false);
  assert.equal(verifyAdminCredentials('other-user', '#Marlboro2022'), false);
});
