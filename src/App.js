import './App.css';
import Footer from './component/footer/Footer';
import Header from './component/header/Header';
import LiveUser from './user/LiveUser';
import CharSettingButton from './component/button/CharSettingButton';

function App() {
  return (
    <div className="main">
      <Header/>
      <div className="body">
        <LiveUser/>
        {/* <CharSettingButton/> */}
      </div>
      <Footer/>
    </div>

  );
}

export default App;
