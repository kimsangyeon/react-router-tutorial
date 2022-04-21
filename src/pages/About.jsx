import { useLocation, useSearchParams } from 'react-router-dom';

const About = () => {
  const location = useLocation();
  const [searchParams, setSearchParmas] = useSearchParams();
  const detail = searchParams.get('detail');
  const mode = searchParams.get('mode');

  const onToggleDetail = () => {
    setSearchParmas({mode, detail: detail === 'true' ? false : true });
  }

  const onIncreaseMode = () => {
    const nextMode = mode === 'null' || !mode ? 1 : parseInt(mode) + 1;
    setSearchParmas({ mode: nextMode, detail });
  }

  return (
    <div>
      <h1>About</h1>
      <p>About page</p>
      <p>query string: {location.search}</p>
      <p>detail: {detail}</p>
      <p>mode: {mode}</p>
      <button onClick={onToggleDetail}>Toggle Detail</button>
      <button onClick={onIncreaseMode}>mode + 1</button>
    </div>
  );
};

export default About;
