import BackgroundImage from './components/BackgroundImage';
import ServerCard from './components/ServerCard';

function App() {
  return (
    <main className='flex flex-col items-center justify-center w-screen h-screen'>
      <BackgroundImage />
      <h1 className='sm:text-6xl sm:mb-8 text-xl mb-4 drop-shadow-2xl text-white'>Welcome to the World of Draconia</h1>
      <ServerCard width="w-60 sm:w-96" />
    </main>
  );
}

export default App;