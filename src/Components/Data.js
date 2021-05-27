// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Data = () => {
//     //UseState to store my fetched data, in array´s.


//     //Used the library axios, can put the url in the request object and it automaticly transform the
//     //JSON data, the data doesnt have to be stringified. 
//     useEffect(() => {
//         const fetchData = async () => {
//             const userData = await axios(`https://jsonplaceholder.typicode.com/users`)
//             const dataAlbum = await axios(`https://jsonplaceholder.typicode.com/albums`)
//             const dataPhotos = await axios(`https://jsonplaceholder.typicode.com/photos`)
//             setAllUsers(userData.data)
//             setAllAlbums(dataAlbum.data)
//             setAllPhotos(dataPhotos.data)

//         }
//         fetchData()
//     }, []);

//     return (
//         <>

//         </>

//     )
// }



// export default Data;


//   useEffect(() => {
//     axios
//     .get(`https://jsonplaceholder.typicode.com/users`)
//     .then(res => {
//         const data = res.data;
//         console.log(data)
//         let newObj = {};
//         data.map((i)=> {
//         let names = i.name
//         let id= i.id
//         let emails = i.email;
//         let companies = i.company.name;
//         let streetAdresses = i.address.street;
//         let suiteAdresses = i.address.suite;
//         let cityAdresses = i.address.city;
//  newObj.name = names;
//  newObj.id = id;
//  newObj.email = emails;
//  newObj.company=companies;
//  newObj.street=streetAdresses;
//  newObj.suite=suiteAdresses;
//  newObj.city=cityAdresses;
// newObj.favorite = false;
//     setAllUsers(newObj)
//     })
//     })
//     .catch(err=>
//         console.log(err))
// },[]);
// users.forEach((user)=>{console.log(user.name)})
// allUsers.forEach((str)=> console.log(str.name))
