import { Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const goArticles = () => {
    navigate('/articles', { replace: true });
  };

  return (
    <div>
      <header style={{ background: 'whitesmoke', padding: 16, fontsize: 20 }}>
        <button onClick={goBack}>back</button>
        <button onClick={goArticles}>post list</button>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
