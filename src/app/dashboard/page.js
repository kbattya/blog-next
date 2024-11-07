import Dashboard from "@app/components/dashboard/Dashboard"

import jwt from 'jsonwebtoken';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default function DashboardS() {
  const token = cookies().get('token')?.value;

  if (!token) {
    redirect('/login');
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET);
    return (
			<Dashboard />
		);
  } catch (error) {
    redirect('/login');
  }
}
