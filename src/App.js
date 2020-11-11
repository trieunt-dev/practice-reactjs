import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Product from './features/Product';

function App() {
    return (
        <div className="App">
            <Header />
            <Product />
            <Footer />
        </div>
    );
}

export default App;
