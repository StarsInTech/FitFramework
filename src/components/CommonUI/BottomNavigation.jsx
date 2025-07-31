import { Link } from 'react-router-dom';

export default function BottomNavigation() {
  return (
    <footer>
      {/* <h2>Sean's footer when he finally pushes it to his github</h2> */}
      <nav>
        <Link to="/auth">Auth</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/nutrition">Nutrition</Link>
        <Link to="/exercise">Exercise</Link>
      </nav>
    </footer>
  );
}