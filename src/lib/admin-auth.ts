export const ADMIN_USERNAME = 'milos';
export const ADMIN_PASSWORD = '#Marlboro2022';

export function verifyAdminCredentials(username: string, password: string) {
  return username.trim() === ADMIN_USERNAME && password === ADMIN_PASSWORD;
}
