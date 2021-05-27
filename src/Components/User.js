import React from 'react';
import { useHistory } from 'react-router-dom';
//Has the same style as favorites-component, to not have duplicates I import the varibles from Theme.js 
import { StyledLI, ProfileImage, FilledStar, OutLineStar } from './Theme'


const User = ({ user, favorite, setFavorite }) => {
    let history = useHistory();

    const handleSelectedUser = (id) => {
        return function () {
            history.push({
                pathname: `/user/${id}`,
                state:
                {
                    user: user,
                }
            })
        }
    }
    // Function that excecutes when the star is being pressed. Put the user in to the favorite state 
    //and use "new Set" to elimate the risk of getting duplicates.
    const AddFavorite = (obj, i) => {
        let favUser = favorite;
        favUser.push(user)
        setFavorite([...new Set(favUser)])
    }
    //Delete matching user from the favorite array and set the new constant to favorite function, setFavorite.
    const DeleteFavorite = (obj) => {
        const filteredFav = favorite.filter(strUser => strUser !== user.user)
        setFavorite(filteredFav)
    }

    return (
        <>
            <StyledLI key={user.id} >
                <div onClick={handleSelectedUser(user.id)}>
                    <ProfileImage />
                    <h4>{user.name}</h4>
                    <p>{user.company.name}</p>
                    <p>{user.email}</p>
                </div>
                {/* if favorite includes user.id render the filled star otherwise show the outline star and get access to that function */}
                {favorite.includes(user.id) ?
                    (<FilledStar onClick={(obj) => DeleteFavorite(obj)} />)
                    :
                    (<OutLineStar onClick={(obj) => AddFavorite(obj)} />)}
            </StyledLI>
        </>
    )
}
export default User;

