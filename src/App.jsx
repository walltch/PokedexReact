import NavBar from './components/common/NavBar';
import Pokemon from './Views/Pokemon';
import Banner from './components/common/LandingPage';

function App() {
  return (
    <div>
      <NavBar />
      <Banner/>
      <Pokemon />
    </div>
  );
}

export default App;