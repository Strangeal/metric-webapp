import { useSelector } from 'react-redux';

const Details = () => {
  const { coinetails } = useSelector((state) => state.details);
  const [coin] = coinetails;

  return (
    <div className="details__container">
      <h2>
        <span>fil</span>
        <span className="active">{coin.symbol}</span>
        <span>ape</span>
      </h2>
      <div className="price">
        <div>
          <p>
            $
            {coin.high_24h}
          </p>
          <p>
            {coin.total_supply}
          </p>
        </div>
        <div>
          <p>
            {coin.low_24h}
          </p>
          <p>{coin.total_volume}</p>
        </div>
      </div>
      <img src={coin.image} alt={coin.name} />
    </div>
  );
};

export default Details;
