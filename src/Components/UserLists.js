import React, { useEffect } from 'react';

import User from './User'
import Favorites from './Favorites'
import { StyledDiv, ListFavDiv, ListUserDiv, } from './Theme'


const UserLists = ({ favorite, setFavorite, allUsers }) => {

    let notFavorite = allUsers.filter(obj => !favorite.some(user => obj.id === user.id));

    useEffect(() => {
        // console.log('hej från useeffecten')
        const json = JSON.stringify(favorite);
        localStorage.setItem("favorite", json)
    }, [favorite])

    return (
        <StyledDiv>
            <h5>Favorites</h5>
            <hr size="1" width="100%" color="lightgray" />
            <ListFavDiv>
                {
                    favorite &&
                    <ul> {favorite.map(user => (<Favorites key={user.id} user={user} allUsers={allUsers} setFavorite={setFavorite} favorite={favorite} />))} </ul>
                }
            </ListFavDiv>
            <ListUserDiv>
                <h5>Users</h5>
                <hr size="1" width="100%" color="lightgray" />
                {
                    notFavorite &&
                    <ul> {notFavorite.map(user => (<User key={user.id} user={user} allUsers={allUsers} setFavorite={setFavorite} favorite={favorite} />))} </ul>
                }
            </ListUserDiv>

        </StyledDiv>
    )
};

export default UserLists


