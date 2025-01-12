import { Navigate } from 'react-router';
import { useAuth } from '../hooks/useAuth';

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { session, loading } = useAuth();

  if (loading) {
    return <div className='text-white'>LOADING...</div>;
  }

  if (!session) {
    return <Navigate to='/login' replace />;
  }

  return <>{children}</>;
}
