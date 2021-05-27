
import React from 'react';
import { useHistory, useParams, withRouter, useLocation } from 'react-router-dom';

import { StyledUserPath, TopDiv, InfoDiv, SectionDiv, StyledUL, Profile, Location, Mail, Work } from './Theme';
// import { natureImages } from './Images/AllImages';
// import { render } from '@testing-library/react';

const UserDetails = ({ allAlbum }) => {
    const history = useHistory();
    //useParams, returns an object of the URL-parameters. 
    const { userId } = useParams();
    //useLocation, returns the user from the location object. 
    const { state: { user } } = useLocation();
    let matchID = allAlbum.filter(i => i.userId === parseInt(userId))
    // console.log(natureImages)
    // Making an array of images to loop through and render as backgrounds for the fetched albums
    // const images = [BlueSea, ClearSea, DeepBlueWater, Flower, MultiColor, PinkField, PinkSky, RedLeaf, Sand, YellowShadow];
    // history.push, send us to the route of the pathname described. Also sends state/values. 
    const handleAlbum = (id) => {
        return function () {
            history.push({
                pathname: `/user/${user.id}/album/${id}`,
                state:
                {
                    user,
                    allAlbum: allAlbum,
                    //The album that is matched with the user. 
                    matchID

                }
            })
        }
    }
    //Cant use objects in JSX so remade it into an array. 
    const valuesUser = [];
    valuesUser.push(user);
    //Only one user in the array so its no problem to put in [0]. Destructuring to make it cleaner in the jsx.
    const { name, company: { name: companyName }, email, address: { city: city } } = valuesUser[0];
    return (
        <>
            <StyledUserPath><span>Users</span> / {name} </StyledUserPath>
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
                {
                    matchID &&
                    <StyledUL>
                        {/* go through the array of the users albums and show them in a list */}
                        {matchID.map(i => (

                            <li key={i.id} onClick={handleAlbum(i.id)}>
                                {/* {images.map(img => <img source={img} />)} */}
                                <p>{i.title}</p>
                            </li>
                        ))}
                    </StyledUL>
                }
            </SectionDiv>
        </>
    )
}

export default withRouter(UserDetails);