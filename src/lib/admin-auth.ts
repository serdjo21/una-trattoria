export function verifyAdminCredentials(username: string, password: string) {
  const configuredUsername = process.env.ADMIN_USERNAME?.trim() ?? '';
  const configuredPassword = process.env.ADMIN_PASSWORD ?? '';

  if (!configuredUsername || !configuredPassword) {
    return false;
  }

  return username.trim() === configuredUsername && password === configuredPassword;
}
