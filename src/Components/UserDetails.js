import React from "react";
import {
  useHistory,
  useParams,
  withRouter,
  useLocation,
} from "react-router-dom";

import {
  StyledUserPath,
  TopDiv,
  InfoDiv,
  SectionDiv,
  StyledUL,
  Profile,
  Location,
  Mail,
  Work,
} from "./Theme";

const UserDetails = ({ allAlbum }) => {
  const history = useHistory();

  const { userId } = useParams();

  const {
    state: { user },
  } = useLocation();
  let matchID = allAlbum.filter((i) => i.userId === parseInt(userId));

  const handleAlbum = (id) => {
    return function () {
      history.push({
        pathname: `/user/${user.id}/album/${id}`,
        state: {
          user,
          allAlbum: allAlbum,

          matchID,
        },
      });
    };
  };

  const valuesUser = [];
  valuesUser.push(user);

  const {
    name,
    company: { name: companyName },
    email,
    address: { city: city },
  } = valuesUser[0];
  return (
    <>
      <StyledUserPath>
        <span>Users</span> / {name}{" "}
      </StyledUserPath>
      <TopDiv>
        <Profile />
        <h1>{name}</h1>
      </TopDiv>
      <InfoDiv>
        <Work />
        <h5>{companyName}</h5>
        <Mail />
        <h5>{email}</h5>
        <Location />
        <h5>{city}</h5>
      </InfoDiv>
      <SectionDiv>
        <h4>Albums</h4>
        {matchID && (
          <StyledUL>
            {matchID.map((i) => (
              <li key={i.id} onClick={handleAlbum(i.id)}>
                {/* {images.map(img => <img source={img} />)} */}
                <p>{i.title}</p>
              </li>
            ))}
          </StyledUL>
        )}
      </SectionDiv>
    </>
  );
};

export default withRouter(UserDetails);
