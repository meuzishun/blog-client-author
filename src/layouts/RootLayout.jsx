import Header from '../components/Header';
import { useContext, useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { UserContext } from '../App';

export default function RootLayout() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    } else {
      navigate('/');
    }
  }, [user]);

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
