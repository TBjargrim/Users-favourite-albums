import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { BiSun, BiMoon } from 'react-icons/bi';
import { GoLocation } from 'react-icons/go';
import { HiOutlineMail } from 'react-icons/hi';
import { BiBuildings } from 'react-icons/bi';
import styled from 'styled-components';

export const lightTheme = {
    body: '#D6CFCB',
    background: '#FCF7F3',
    text: '#363537',
    toggleBorder: '#FFF',
    gradient: 'linear-gradient(#979797, #9B9BC6)',
    transform: 'translateY(0)',
}

export const darkTheme = {
    body: '#363537',
    background: '#C6C6C6',
    text: '#FAFAFA',
    toggleBorder: '#6B8096',
    gradient: 'linear-gradient(#DEDEDE, #E7E7E7)',
    transform: 'translateY(100)',
}
// Style App.js
export const StyledButton = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 1px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 100%;
  cursor: pointer;
  padding: 10px;
  position: absolute;;
  right:60px;
  top:40px;

  width: 50px;
  height: 50px;
 p{
   font-size:15px;
   color: ${({ theme }) => theme.text};
 }
`
export const Sun = styled(BiSun)`
font-size:28px;
color:#FAFF07;
`
export const Moon = styled(BiMoon)`
font-size:28px;
color:#071593;
`
//UserList

export const StyledDiv = styled.div`
display:flex;
flex-direction:column;

h5{
    font-size:25px;
    margin:80px 80px 30px 80px;
    letter-spacing:1px;
}
hr{
    margin:10px 80px 50px 80px;
}
@media screen and (max-width: 600px){
    margin:1px;
    
}
`
export const ListFavDiv = styled.div`
ul {
    display:flex;
    flex-wrap:wrap;
    list-style:none;
    width:100%;
    margin:0 80px 0 80px;
    padding:0;
    @media screen and (max-width: 600px){
    margin:0;
}
}

`
export const ListUserDiv = styled.div`
 margin-top:20px;
ul {
    display:flex;
    flex-wrap:wrap;
    list-style:none;
    width:100%;
    margin:0 80px 0 80px;
    padding:0;
    @media screen and (max-width: 600px){
    margin:0;
}
}
`

//Userdetails component

export const StyledUserPath = styled.p`
margin:100px 80px 80px 80px;
padding:5px;
border-radius:15px;
background-color:#CCCCCC;
span{
    color:#1A49BA;
}
`
export const TopDiv = styled.div`
text-align:center;
margin-top:50px;
h1{
    margin-top:30px;
    font-weight:600;
}
`
export const InfoDiv = styled.div`
display:flex;
justify-content:center;
h5{
    margin:30px 20px 0 4px;
}
`
export const SectionDiv = styled.div`
    width:100%;
    margin:80px 80px 0 80px;
    padding:0;
h4{
    margin-left:5px;
    margin-bottom:15px;
    font-size:22px;
}
`
export const StyledUL = styled.ul`
   display:flex;
    flex-wrap:wrap;
    list-style:none;

h4{
    font-size:30px;
    color:red;
}
    li{
    margin:5px;
    position:relative;
    background-color:${({ theme }) => theme.background};
  height:150px;
    width:200px;
    filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.25));
    border-radius: 1%;
    cursor:pointer;
    &:hover{
        background-color:rgba(115,140,200,0.3);
  
    }
    }
    p{
        letter-spacing:1px;
        font-weight:400;
        text-align:left;
        margin:30px 10px;
        text-transform:capitalize;
    }

`
export const Profile = styled(CgProfile)`
font-size:80px;
`
export const Location = styled(GoLocation)`
font-size:15px;
margin-top:28px;
`
export const Mail = styled(HiOutlineMail)`
font-size:15px;
margin-top:28px;
`
export const Work = styled(BiBuildings)`
font-size:15px;
margin-top:28px;
`

//User and Favorite Styling 

export const StyledLI = styled.li`
margin:10px;
position:relative;
background-color:${({ theme }) => theme.background};
width:550px;
filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.25));
cursor:pointer;
border-radius:10px;
color:#363537;
padding:20px 0 20px 0;
h4{
    margin:10px 0 5px 90px;
    font-size:20px;
    letter-spacing:1px;
    @media screen and (max-width: 600px){
    font-size:18px;
}
}
p{
    margin:5px 0 0 90px;
    letter-spacing:1px;
}
&:hover{
    background-color:#A6808C;
}
@media screen and (max-width: 600px){
    width:450px;
    font-size:18px;
}
`
export const ProfileImage = styled(CgProfile)`
font-size:45px;
position:absolute;
top:45%;
left:7%;
transform: translate(-50%, -50%);
@media screen and (max-width: 600px){
    font-size:35px;
}
`
export const FilledStar = styled(AiFillStar)`
position:absolute;
color:rgb(61,61,61);
font-size:25px;
top:8%;
right:4%;
cursor:pointer;
&:hover{
    color:rgb(0,0,0);
    font-size:30px;
}

`
export const OutLineStar = styled(AiOutlineStar)`
position:absolute;
color:rgb(61,61,61);
font-size:25px;
top:8%;
right:4%;
cursor:pointer;
&:hover{
    color:rgb(4,4,4);
}
`
// Styling for Photos component 

export const AlbumInfo = styled.div`
text-align:center;
margin:50px 0;
h3{
    text-transform:capitalize;
    letter-spacing:1px;
    margin-bottom:10px;
    font-size:30px;
}
`
export const PhotoWrapper = styled.div`
margin:0;
width:100%;
display:flex;
flex-wrap:wrap;
justify-content:center;
`
//Styling Photo component
export const StyledImg = styled.img`
margin:10px;
width:250px;
filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.25));
cursor:pointer;
&:hover{
    opacity:0.7;
}
`

export const StyledImageModal = styled.img`
width:400px;
position:absolute;
top:50%;
left:50%;
transform: translate(-50%, -50%);
`
export const StyledTitelModal = styled.h4`
font-size:20px;
text-transform:capitalize;
margin-top:30px;
text-align:center;
color:#363537;
`