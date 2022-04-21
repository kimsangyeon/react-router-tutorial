import { NavLink, Outlet } from 'react-router-dom';

const Articles = () => {
  return (
    <div>
      <Outlet />
      <ul>
        <ArticleLink id={1} />
        <ArticleLink id={2} />
        <ArticleLink id={3} />
      </ul>
    </div>
  );
};

const ArticleLink = ({ id }) => {
  const activeStyle = {
    color: 'blue',
    fontSize: 20
  };
  
  return (
    <li>
      <NavLink to={`/articles/${id}`} style={({isActive}) => (isActive ? activeStyle : undefined)}>post {id}</NavLink>
    </li>
  );
};

export default Articles;
