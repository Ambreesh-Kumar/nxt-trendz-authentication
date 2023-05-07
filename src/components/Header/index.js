// Write your JS code here
import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="trendz-logo-header"
      />
    </div>
    <ul className="header-section-container">
      <li className="section">Home</li>
      <li className="section">Products</li>
      <li className="section">Cart</li>
      <button className="logout-button">Logout</button>
    </ul>
  </nav>
)
export default Header
