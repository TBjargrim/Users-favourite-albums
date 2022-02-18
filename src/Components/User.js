import React from "react";
import { useHistory } from "react-router-dom";
import { StyledLI, ProfileImage, FilledStar, OutLineStar } from "./Theme";

const User = ({ user, favorite, setFavorite }) => {
  let history = useHistory();

  const handleSelectedUser = (id) => {
    return function () {
      history.push({
        pathname: `/user/${id}`,
        state: {
          user: user,
        },
      });
    };
  };

  const AddFavorite = (obj, i) => {
    let favUser = favorite;
    favUser.push(user);
    setFavorite([...new Set(favUser)]);
  };

  const DeleteFavorite = (obj) => {
    const filteredFav = favorite.filter((strUser) => strUser !== user.user);
    setFavorite(filteredFav);
  };

  return (
    <>
      <StyledLI key={user.id}>
        <div onClick={handleSelectedUser(user.id)}>
          <ProfileImage />
          <h4>{user.name}</h4>
          <p>{user.company.name}</p>
          <p>{user.email}</p>
        </div>
        {favorite.includes(user.id) ? (
          <FilledStar onClick={(obj) => DeleteFavorite(obj)} />
        ) : (
          <OutLineStar onClick={(obj) => AddFavorite(obj)} />
        )}
      </StyledLI>
    </>
  );
};
export default User;
