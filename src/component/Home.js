import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineArrowRight, AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { coinFetch } from '../redux/coinSlice';
import { coinDetails } from '../redux/detailsSlice';

const Home = () => {
  const [myCoins, setMyCoins] = useState('');
  const { coins, status } = useSelector((state) => state.coin);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(coinFetch());
  }, [dispatch]);

  const handleDetail = (coin) => {
    dispatch(coinDetails(coin));
  };

  return (
    <div className="home__container">
      {status === 'pending' ? (
        <p>Loading...</p>
      ) : (
        <>
          <form>
            <input
              value={myCoins}
              onChange={(e) => setMyCoins(e.target.value)}
              type="text"
              placeholder="Enter city name"
            />
            <AiOutlineSearch className="search" />
          </form>

          <div className="coin__card">
            {coins
              .filter((coinValue) => coinValue.name.toLowerCase().includes(myCoins.toLowerCase()))
              .map((coin) => (
                <div key={coin.id} className="coins">
                  <div className="coin__dec">
                    <img src={coin.image} alt={coin.name} />
                    <Link to="/details">
                      <button type="submit" className="detail__btn" onClick={() => handleDetail(coin)}>
                        <AiOutlineArrowRight className="detail__icon" />
                      </button>
                    </Link>
                  </div>
                  <div className="coin__content">
                    <h3>{coin.name}</h3>
                    <p>{coin.market_cap_rank}</p>
                  </div>
                </div>
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
