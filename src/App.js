import First from './component/리액트초기/First';
import Footer from './component/footer/Footer';
import LiveView from './component/view/View';
import Header from './component/header/Header';
import LiveUser from './user/LiveUser';
import TeamInfo from './component/teamInfo/TeamInfo';
import './App.css'
import TeamInfoButton from './component/button/TeamInfoButton';

function App() {
  return (
    <div className="main">
      <Header/>
      <div className="body">
        <LiveUser/>
      </div>
      <Footer/>
    </div>

  );
}

export default App;
