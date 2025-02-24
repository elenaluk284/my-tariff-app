
import Tariff from './Tariff'; // Импортируем компонент Tariff
import './App.css'; // Импортируем файл стилей

const App = () => {
  return (
    <div className="tariff-list">
      <Tariff title="Безлимитный 300" price={300} speed={10} highlighted={false} />
      <Tariff title="Безлимитный 450" price={450} speed={50} highlighted={false} />
      <Tariff title="Безлимитный 550" price={550} speed={100} highlighted={true} />
      <Tariff title="Безлимитный 1000" price={1000} speed={200} highlighted={false} />
    </div>
  );
};

export default App;
