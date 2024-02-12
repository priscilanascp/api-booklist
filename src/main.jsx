
import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import BooksList from './components/BooksList';
import Header from './components/Header';
import Footer from './components/Footer';




// eslint-disable-next-line react-refresh/only-export-components
const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <BooksList />
        <Footer />
      </div>
    </Router>
  );
};

createRoot(document.getElementById('root')).render(<App />);