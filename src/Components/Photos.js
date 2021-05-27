import React from 'react';
import { useLocation, useParams, withRouter } from 'react-router-dom';
import { StyledUserPath, AlbumInfo, PhotoWrapper } from './Theme'
import Photo from './Photo';

const Photos = ({ allPhotos }) => {

    const userState = useLocation();
    const { albumId } = useParams();
    let targetUser = userState.state.user;
    let album = userState.state.allAlbum;
    const { name } = targetUser;
    //If the single photos id is matching from the 
    //allPhotos array with the albumId from the url it gets saved in the photos varible. 
    let photos = allPhotos.filter((i) => i.albumId === parseInt(albumId))

    const { title } = album[albumId];
    return (
        <>

            <StyledUserPath><span>User / {name} </span>/ {title}</StyledUserPath>
            <AlbumInfo>
                <h3>{title}</h3>
                <h6>{photos.length} photos</h6>
            </AlbumInfo>
            {
                photos &&
                <PhotoWrapper>
                    {photos.map(i => (
                        <div key={i.id}>
                            <Photo
                                key={i.id}
                                url={i.url}
                                title={i.title}
                                photoId={i.id}
                                photo={i}
                                photos={photos}
                            />
                        </div>
                    ))}
                </PhotoWrapper>
            }
        </>
    )
}
export default withRouter(Photos);