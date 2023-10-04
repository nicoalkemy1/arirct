import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { ItemListContainer } from './components/Items/ItemListContainer';
import { Navbar } from './components/Navbar/Navbar';
import { ItemDetailContainer } from './components/Items/ItemDetailContainer';
import { Contact } from './components/Contact/Contact';


const App = () => {

    return (
        <>


            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={ <ItemListContainer /> } />
                    <Route path='/category/:id' element={ <ItemListContainer /> } />
                    <Route path='/item/:id' element={ <ItemDetailContainer /> } />
                    <Route path='/contact' element={ <Contact /> } />
                    <Route path='/*' element={ <ItemListContainer /> } />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
