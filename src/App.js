import './App.css'
import Banner from './components/Banner'
import Row from './components/Row'
import requests from './requests'

function App() {
  return (
    <div style={{ backgroundColor: '#111' }} className="pb-2">
      <Banner />
      <Row
        title={'Netflix Orignals'}
        large={true}
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row
        title={'Trending Now'}
        large={false}
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row
        title={'Top Rated'}
        large={false}
        fetchUrl={requests.fetchTopRated}
      />
      <Row
        title={'Action Movies'}
        large={false}
        fetchUrl={requests.fetchActionMovies}
      />
      <Row
        title={'Comedy Movies'}
        large={false}
        fetchUrl={requests.fetchComedyMovies}
      />
      <Row
        title={'Horror Movies'}
        large={false}
        fetchUrl={requests.fetchHorrorMovies}
      />
      <Row
        title={'Romance Movies'}
        large={false}
        fetchUrl={requests.fetchRomanceMovies}
      />
      <Row
        title={'Documentaries'}
        large={false}
        fetchUrl={requests.fetchDocumantaries}
      />
    </div>
  )
}

export default App
