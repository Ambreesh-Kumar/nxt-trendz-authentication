// Write your JS code here
import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="bg-container">
    <Header />
    <div className="home-details-container">
      <div className="description-container">
        <h1 className="main-heading">Clothes That Get YOU Noticed</h1>
        <p>
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. Clothes have always been be a marker of the era
          and we are in a revolution. Your fashion makes you been seen and heard
          that way you are. So, celebrate the seasons new and exciting fasion in
          your own way.
        </p>
        <button className="shop-now-button">Shop Now</button>
      </div>
      <div className="home-image-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className="shop-now-image"
        />
      </div>
    </div>
  </div>
)
export default Home
