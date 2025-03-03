
import Tariff from './Tariff'; // Импортируем компонент Tariff
import './App.css'; // Импортируем файл стилей
import { useState } from 'react';
const App = () => {
  const [selectedTariff, setSelectedTariff] = useState(null); // Состояние для выбранного тарифа

  const handleTariffClick = (index) => {
    setSelectedTariff(index); // Обновляем состояние при нажатии
  };

  return (
    <div className="tariff-list">
      <Tariff 
        title="Безлимитный 300" 
        price={300} 
        speed={10} 
        highlighted={selectedTariff === 0} 
        onClick={() => handleTariffClick(0)} 
      />
      <Tariff 
        title="Безлимитный 450" 
        price={450} 
        speed={50} 
        highlighted={selectedTariff === 1} 
        onClick={() => handleTariffClick(1)} 
      />
      <Tariff 
        title="Безлимитный 550" 
        price={550} 
        speed={100} 
        highlighted={selectedTariff === 2} 
        onClick={() => handleTariffClick(2)} 
      />
      <Tariff 
        title="Безлимитный 1000" 
        price={1000} 
        speed={200} 
        highlighted={selectedTariff === 3} 
        onClick={() => handleTariffClick(3)} 
      />
    </div>
  );
};

export default App;
