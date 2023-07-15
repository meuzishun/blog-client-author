import {
  useLoaderData,
  useNavigation,
  Outlet,
  Navigate,
} from 'react-router-dom';

export default function PrivateRoutes() {
  const user = useLoaderData();
  const navigation = useNavigation();

  return (
    <div className={navigation.state !== 'idle' ? 'loading' : ''}>
      {!user ? <Navigate to='login' /> : <Outlet />}
    </div>
  );
}
