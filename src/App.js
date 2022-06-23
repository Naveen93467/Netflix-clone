import Header from './Header';
import Banner from './Banner';
import './App.css';
import requests from './request'
import Row from './Row';

function App() {
  return (
    <div className="App">
     <Header />
     <Banner />
     <Row  
     isLargeRow= {true}
     title ="NETFLIX ORIGINALS"
     fetchUrl = {requests.fetchNetFlixOriginals}
  
     />
     <Row  title="TRENDING NOW" 
          fetchUrl = {requests.fetchTrending}                 />
     <Row title="TOP RATED" 
          fetchUrl = {requests.fetchTopRated}                />
     <Row title="ACTION MOVIES" 
          fetchUrl = {requests.fetchActionMovies} />
     <Row title="HORROR MOVIES" 
          fetchUrl = {requests.fetchHorrorMovies} />
     <Row title="ROMANCE MOVIES" 
          fetchUrl = {requests.fetchRomanceMovies} />
      <Row title="DOCUMENTARIES"    
           fetchUrl={requests.fetchDocumantaries}  />
      <Row title="COMEDY MOVIES"     
            fetchUrl={requests.fetchComedyMovies}  />
    </div>
  );
}

export default App;
