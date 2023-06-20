import './App.css';
import Card from './components/card';
import autos from './data/autos';
import ShowHide from './components/ShowHide';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

    const autosList = autos.map(auto => {
        const { model, velocidad, url } = auto
        return <Card model={model} velocidad={velocidad} url={url} />
    })

    return (
        <div className="App">
            <Header />

            <div className="container">
                {autosList}
            </div>
            
            <ShowHide />
            <Footer />
        </div>
    );
}

export default App;
