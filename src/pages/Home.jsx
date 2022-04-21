import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Home page</p>
      <ul>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/profile/luffy">luffy profile</Link>
        </li>
        <li>
          <Link to="/profile/tom">tom profile</Link>
        </li>
        <li>
          <Link to="/profile/void">void</Link>
        </li>
        <li>
          <Link to="/articles">post list</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
