import { useLoaderData, Outlet, Navigate } from 'react-router-dom';

export default function PrivateRoutes() {
  const user = useLoaderData();
  return !user ? <Navigate to='login' /> : <Outlet />;
}
