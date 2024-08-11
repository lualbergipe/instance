import React, {useState} from 'react'
import {Routes, BrowserRouter, Route} from 'react-router-dom'
import routes from './routes';
import Sidebar from '../components/Sidebar/Sidebar';
import TopBar from '../components/TopBar/TopBar';
import '../App.css'



export function Navigation() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  return (
    <BrowserRouter>
    
    <TopBar/>
    <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
     <div className={`${isSidebarOpen ? 'bar-active' : 'bar-inactive'}`}>
       <Routes>
       {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <route.layout>
                <route.component />
              </route.layout>
            }
          />
        ))}
      </Routes>
      </div>
    </BrowserRouter>
   
  )
}
