import BackgroundImage from './components/BackgroundImage';
import ServerCard from './components/ServerCard';
import Plausible from 'plausible-tracker'

const { trackEvent, enableAutoPageviews, enableAutoOutboundTracking } = Plausible({
  domain: 'draconia.world',
  apiHost: 'https://plausible.andrewstill.moe'
})

const cleanup1 = enableAutoPageviews()
const cleanup2 = enableAutoOutboundTracking()

function App() {
  cleanup1()
  cleanup2()
  return (
    <main className='flex flex-col items-center justify-center w-screen h-screen'>
      <BackgroundImage />
      <h1 className='2xl:text-7xl xl:text-6xl xl:mb-8 lg:text-5xl lg:mb-7 md:text-4xl md:mb-6 sm:text-3xl sm:mb-5 text-2xl mb-4 drop-shadow-3xl text-white'>Welcome to the World of Draconia</h1>
      <ServerCard width="2xl:w-[34rem] xl:w-[28rem] lg:w-[22rem] md:w-72 sm:w-64 w-60" />
    </main>
  );
}

export { trackEvent };
export default App;