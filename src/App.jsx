import NavBar from './components/common/NavBar';
import Pokemon from './Views/Pokemon';
import Banner from './components/common/LandingPage';
import RatingBarComponent from './components/pokemon/test';

function App() {
  return (
    <div className='bg-primary-black'>
      {/* <NavBar/> */}
      <Banner/>
      <Pokemon />
      {/* <RatingBarComponent /> */}
    </div>
  );
}
export default App; 