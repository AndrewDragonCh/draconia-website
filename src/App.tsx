import BackgroundImage from './components/BackgroundImage';
import ServerCard from './components/ServerCard';

function App() {
  return (
    <main className='flex flex-col items-center justify-center w-screen h-screen'>
      <BackgroundImage />
      <h1 className='xl:text-6xl xl:mb-8 lg:text-4xl lg:mb-7 md:text-3xl md:mb-6 sm:text-2xl sm:mb-5 text-xl mb-4 drop-shadow-2xl text-white'>Welcome to the World of Draconia</h1>
      <ServerCard width="2xl:w-[32rem] xl:w-[26rem]  lg:w-80 md:w-72 sm:w-64 w-60" />
    </main>
  );
}

export default App;