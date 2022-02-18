import React, { useState, useEffect } from "react";
import axios from "axios";
import { Router, Route, Switch } from "react-router-dom";
import history from "./Components/History";

import { createGlobalStyle, ThemeProvider } from "styled-components";
import { StyledButton, Sun, Moon } from "./Components/Theme";

import UserLists from "./Components/UserLists";
import UserDetails from "./Components/UserDetails";
import Photos from "./Components/Photos";
import { lightTheme, darkTheme } from "./Components/Theme";

function App() {
  const [allUsers, setAllUsers] = useState([]);
  const [allAlbum, setAllAlbums] = useState([]);
  const [allPhotos, setAllPhotos] = useState([]);

  const [favorite, setFavorite] = useState(
    JSON.parse(localStorage.getItem("favorite")) || []
  );
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const fetchData = async () => {
      const userData = await axios(
        `https://jsonplaceholder.typicode.com/users`
      );
      const dataAlbum = await axios(
        `https://jsonplaceholder.typicode.com/albums`
      );
      const dataPhotos = await axios(
        `https://jsonplaceholder.typicode.com/photos`
      );
      setAllUsers(userData.data);
      setAllAlbums(dataAlbum.data);
      setAllPhotos(dataPhotos.data);
    };
    fetchData();
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const handleSetFavorite = (fav) => {
    setFavorite(fav);
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Router history={history}>
        <GlobalStyles />
        <StyledButton onClick={toggleTheme}>
          <p>{theme === "light" ? <Moon /> : <Sun />}</p>
        </StyledButton>
        <Switch>
          <Route path="/user/:userId/album/:albumId">
            <Photos allPhotos={allPhotos} />
          </Route>
          <Route path="/user/:userId">
            <UserDetails allUsers={allUsers} allAlbum={allAlbum} />
          </Route>
          <Route path="/">
            <UserLists
              allUsers={allUsers}
              favorite={favorite}
              setFavorite={handleSetFavorite}
            />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;

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
`;
