import './App.css';
import { AtiyaMain } from './Components/Atiya/AtiyaMain';
import { KhizerMain } from './Components/Khizer/KhizerMain';
import { Nishat } from './Components/Nishat/Nishat';
import { SohanMain } from './Components/Sohan/SohanMain';
import { VaishaliMain } from './Components/Vaishali/VaishaliMain';

function App() {
  return (
    <div className="App">
      <VaishaliMain />
      <AtiyaMain/>
      <SohanMain />
      <Nishat />
      <KhizerMain/>
    </div>
  );
}

export default App;
