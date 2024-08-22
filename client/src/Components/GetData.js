import React, { useState, useEffect} from 'react';

export default function GetData(){
const [user, setUsers] = useState([]);

useEffect(() => {

fetch('/users',{

method:'GET'

}).then(response => response.json())

.then(data => {

console.log(data);

setUsers(data);

})

},[]);




return(

<div>

{

user.map(user => (

<div key={user.id}>

<h5>{user.name} {user.email}</h5>

</div>

))}

</div>

 

)

};