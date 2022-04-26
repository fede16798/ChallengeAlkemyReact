import Listado from '../components/Listado.js';
import Footer from '../components/Footer.js';
import Header from '../components/Header.js';
import '../../src/App.css'

const HomePage = () => {
    return (
        <div>
            <Header/>
            <div className='main-container'>
                <Listado />
            </div>
            <Footer />
        </div>
    );
}

export default HomePage