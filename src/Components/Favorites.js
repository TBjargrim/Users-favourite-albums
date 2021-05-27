import React from 'react';
import { useHistory } from 'react-router-dom';

import { StyledLI, ProfileImage, FilledStar } from './Theme'


const Favorites = ({ user, favorite, setFavorite }) => {

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

    const DeleteFavorite = (obj) => {
        const filteredFav = favorite.filter(strUser => strUser.id !== user.id)
        setFavorite(filteredFav)
    }
    const { name, id, company: { name: companyName }, email } = user
    return (
        <>
            <StyledLI key={id} >
                <div onClick={handleSelectedUser(id)}>
                    <ProfileImage />
                    <h4>{name}</h4>
                    <p>{companyName}</p>
                    <p>{email}</p>
                </div>
                <FilledStar onClick={(obj) => DeleteFavorite(obj)} />

            </StyledLI>
        </>
    )
}
export default Favorites;
