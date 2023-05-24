import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
//Import pages
import Nav from './components/Nav';
import HomePage from './pages/home/home';
import Login from './pages/login/login';
import BlogOverview from './pages/BlogOverview/blogOverview';
import BlogPost from './pages/BlogPosts/blogPosts';
//PrivateRoute
import PrivateRoute from './components/PrivateRoute';

function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  const [isAuthenticated, toggleIsAuthenticated] = useState(false);

  return (
      /* Het is mogelijk om hier je <Router> toe te voegen (dus de browser Router) in plaats van je index.js */
      <>
        <div>
            <Nav auth={isAuthenticated} setAuth={toggleIsAuthenticated} />
                <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/login" element={<Login auth={isAuthenticated} setAuth={toggleIsAuthenticated} />} />
                        {/*<PrivateRoute
                            path="/blogposts"
                            element={<BlogOverview />}
                            isAuthenticated={isAuthenticated}
                        />*/}
                        <Route path="/blogposts" element={<PrivateRoute isAuthenticated={isAuthenticated}><BlogOverview/></PrivateRoute>}/>
                        {/*<PrivateRoute
                            path="/blogposts/:blogId"
                            element={<BlogPost />}
                            isAuthenticated={isAuthenticated}
                        />*/}
                        <Route path="/blogposts/:blogId" element={<PrivateRoute isAuthenticated={isAuthenticated}><BlogPost/></PrivateRoute>}/>
                        <Route path="*" element={<Navigate to="/" />} />
                </Routes>
        </div>
      </>
  );
}

export default App;

/* Dit was de versie zonder PrivateRoute:
* <Routes>
    <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login auth={isAuthenticated} setAuth={toggleIsAuthenticated} />} />
       {isAuthenticated ? (
         <>
         <Route path="/blogposts" element={<BlogOverview />} />
         <Route path="/blogposts/:blogId" element={<BlogPost />} />
         </>
       ) : (
         <Route path="/blogposts/*" element={<Navigate to="/login" />} />
       )}
     <Route path="*" element={<Navigate to="/" />} />
  </Routes>
* */