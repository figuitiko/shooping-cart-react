import Footer from './components/share/Footer';
import Header from './components/share/Header';
import Main from './components/share/Main';
import StateContextProvider from './Context/StateContextProvider';





function App() {

  return (
    <StateContextProvider>
      <div className='grid grid-rows-[100px_minmax(900px,_1fr)_200px]' >
        <Header />
        <Main />
        <Footer />
      </div>
    </StateContextProvider>
    
  )
}

export default App;
