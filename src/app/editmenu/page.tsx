import { redirect } from 'next/navigation';

import { getServerSession } from 'next-auth';

import { authOptions } from '@/auth';
import EditMenuClient from '@/components/EditMenuClient';

export default async function EditMenuPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/login');
  }

  return <EditMenuClient />;
}
