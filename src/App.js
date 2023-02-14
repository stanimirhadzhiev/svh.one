import './App.css';

import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';


import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Summary } from './components/Summary/Summary';
import { Education } from './components/Education/Education';
import { ProjectsList } from './components/ProjectsList/ProjectsList';
import { Experience } from './components/Experience/Experience';
import { Contacts } from './components/Contacts/Contacts';

import { Admin } from './AdminPanel/Admin/Admin';


function App() {
    
  return (
    <div className="App">
        <AuthProvider>
            <Routes>
                <Route path="/" element={[
                    <Header/>,
                    <Home />,
                    <Summary />,
                    <Education />,
                    <ProjectsList />,
                    <Experience />,
                    <Contacts />,
                ]} />
                {/* <Navigation/> */}
                <Route path="/admin/*" element={<Admin/>}/>
            </Routes>
        </AuthProvider>
    </div>
  );
}

export default App;
