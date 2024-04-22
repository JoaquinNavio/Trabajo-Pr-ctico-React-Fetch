import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0, backgroundColor: 'lightgray', display: 'flex', justifyContent: 'space-around' }}>
        <li style={{ padding: '10px' }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Home</Link>
        </li>
        <li style={{ padding: '10px' }}>
          <Link to="/DondeEstamos" style={{ textDecoration: 'none', color: 'black' }}>Donde estamos</Link>
        </li>
        <li style={{ padding: '10px' }}>
          <Link to="/instrumentos" style={{ textDecoration: 'none', color: 'black' }}>Instrumentos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
