import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
    return (
        <div className="app">
            <Header title="My App" />
            <Main />
            <Footer companyName="Руслан Нуриев" />
        </div>
    );
}

export default App;
