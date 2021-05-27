import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Router, Route, Switch } from 'react-router-dom';
import history from './Components/History';

import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { StyledButton, Sun, Moon } from './Components/Theme';

import UserLists from './Components/UserLists';
import UserDetails from './Components/UserDetails';
import Photos from './Components/Photos';
import { lightTheme, darkTheme } from './Components/Theme';

//Creating a global style for basiv styling and dark/light mode.
//Using the library Styled-components to get "GlobalStyles" and execute it in the return, App function.
const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    height: 100vh;
    font-family: Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }
`

function App() {
  //UseState to store my fetched data, in array´s.
  const [allUsers, setAllUsers] = useState([])
  const [allAlbum, setAllAlbums] = useState([])
  const [allPhotos, setAllPhotos] = useState([])
  // Get the stored favorite users from localStorage. Used localstorage to keep them at refresh.
  //If its not any favorites, we get an empty array to minimize the risk of errors. 
  const [favorite, setFavorite] = useState(JSON.parse(localStorage.getItem('favorite')) || []);
  const [theme, setTheme] = useState('light');

  //Used the library axios, can put the url in the request object and it automaticly transform the
  //JSON data, the data doesnt have to be stringified. 
  useEffect(() => {
    const fetchData = async () => {
      const userData = await axios(`https://jsonplaceholder.typicode.com/users`)
      const dataAlbum = await axios(`https://jsonplaceholder.typicode.com/albums`)
      const dataPhotos = await axios(`https://jsonplaceholder.typicode.com/photos`)
      setAllUsers(userData.data)
      setAllAlbums(dataAlbum.data)
      setAllPhotos(dataPhotos.data)

    }
    fetchData()
  }, []);
  //Function for toggle dark/light mode
  //Default is "light" from the useState. If theme === light change to dark and the otherway around.
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }
  //Set the favorite to the useState, fav. Fav = all the favorites.
  const handleSetFavorite = (fav) => {
    setFavorite(fav);
  }


  return (
    //Themeprovider from "styled-component", wrap around all of the components and
    //create the conditional rendering in themeState. 
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Router history={history}>
        <GlobalStyles />
        <StyledButton onClick={toggleTheme}>
          <p>{theme === 'light' ? <Moon /> : <Sun />}</p>
        </StyledButton>
        <Switch>
          <Route path='/user/:userId/album/:albumId'>
            <Photos
              allPhotos={allPhotos} />
          </Route>
          <Route path='/user/:userId'>
            <UserDetails
              allUsers={allUsers}
              allAlbum={allAlbum} />
          </Route>
          <Route path='/'>
            <UserLists
              allUsers={allUsers}
              favorite={favorite}
              setFavorite={handleSetFavorite} />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
