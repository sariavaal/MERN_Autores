import './App.css';
import CreateAuthor from './components/CreateAuthor';
import AuthorList from './components/AuthorList';
import EditAuthor from "./components/EdithAuthor";
import PageNotFound from './components/NotFoundPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<AuthorList />} />
                    <Route path="/new" element={<CreateAuthor />} />
                    <Route path="/update/:id" element={<EditAuthor />} />
                    <Route path="*" element={<PageNotFound />} />
                    <Route path='/404-page-not-found' element={<PageNotFound />}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App