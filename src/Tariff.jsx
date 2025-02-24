import PropTypes from 'prop-types';
import './Tariff.css'; // Импортируем файл стилей

const Tariff = ({ title, price, speed, highlighted }) => {
    return (
    <div className={`tariff ${highlighted ? 'highlight' : ''}`}>
        <h2>{title}</h2>
        <p className="price">руб {price} / мес</p>
        <p>до {speed} Мбит/сек</p>
        <p>Объем включенного трафика не ограничен</p>
    </div>
    );
};

export default Tariff;
Tariff.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    speed: PropTypes.number.isRequired,
    highlighted: PropTypes.bool.isRequired,
};