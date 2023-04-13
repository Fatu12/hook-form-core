import React,{useState} from 'react'
// ? import useState methods 
const UserFrom = (props)=>{
    // create getter and setter for all the attributes we need to have to create 
    // this form , as an object instead of creating multi setter 
    const [userData,setUserDate] = useState({
        firstName : '',
        lastName :'',
        email:'',
        password:'',
        confirmPassword:''
    })
// create the user information that need to change to let the  user to type 
// useState is updating the values user types, so we keep tracking what our user is typing
const changeHandler = (event)=>{
    // console.log(event)
    // helps to not reset 
     event.preventDefault()
    //  create the changes that can happen
    // targe is the the name tittle and name has to much with our attributes
    setUserDate({...userData, [event.target.name]:event.target.value})
}
return(
 <div >
    {/* row to put in the same row */}
    <div className='row'>
        <form className='col-md-4 offset-1'>
              <h1> Type Your Information </h1>
            <div className="form-group">
                <label htmlFor="firstName"> First Name</label>
                {/* state name must match with input name  */}
            <input type="text" name="firstName" onChange={changeHandler} className='form-control' />
            </div>
            <div className="form-group">
                <label htmlFor="lastName"> Last Name</label>
                <input type="text" name="lastName" onChange={changeHandler} className='form-control' />
            </div>
            <div className="form-group">
                <label htmlFor="email"> email</label>
                <input type="text" name="email" onChange={changeHandler} className='form-control'/>
            </div>
            <div className="form-group">
                <label htmlFor="password"> Password</label>
                <input type="password" name="password" onChange={changeHandler} className='form-control' />
            </div>
            <div className="form-group">
                <label htmlFor="confirmPassword"> Confirm Password</label>
                <input type="password" name="confirmPassword" onChange={changeHandler} className='form-control' />
            </div>
            <button className="btn btn-primary mt-3">Create Form</button>
        </form>
        {/* invoke the attributes  */}
            <div className="col-md-3 offset-1">
                <h4>First Name {userData.firstName}</h4>
                <h4>Last Name {userData.lastName}</h4>
                <h4>Email {userData.email}</h4>
                <h4>Password {userData.password}</h4>
                <h4>Confirm Password {userData.confirmPassword}</h4>
        
        </div>
          </div>
    </div>
   );
 };

export default UserFrom; 




// const UserFrom = (props) =>{
//     // const [firstName,setFirstName]= useState("");
//     // const [lastName, setLastName] = useState("");
//     // const [email, setEmail] = useState("");
//     // const [password,setPassword] = useState("");
//     // const [confirmPassword,setConfirmPassword] = useState("");
//     // creating Object
//     // create getter and setter for all  attributes

//         // function that hold all the information that we need to pass to 
//         // form to create, 
//         // event is onclick 



//     // const createUser = (event) =>{
//     //     // console.log(event)
//     //     event.preventDefault();
//     //     // const newUser = {firstName,lastName,email,password,confirmPassword};
//     //     setFirstName("");
//     //     setLastName("");
//     //     setEmail("");
//     //     setPassword("");
//     //     setConfirmPassword("");
//     //     };
//     //     const handleFirstName = (event) => {
//     //         setFirstName(event.target.value)
//     //     }
//     //     const handleLastName = (event) => {
//     //         setFirstName(event.target.value)
//     //     }
//     //     const handleEmail = (event)=> {
//     //         setEmail(event.target.value)
//     //     }
//     //     const handlePassword = (event)=> {
//     //         setPassword(event.target.value)
//     //     }
//     //     const handleConfirmPassword = (event)=> {
//     //         setConfirmPassword(event.target.value)
//       // }

//         <div>
//             <h1> Your Form Data</h1>
//             <h5>
//                 <label>First Name: </label>
//                 {userData.firstName}
//             </h5>
//             <h5>
//                 <label>Last Name: </label>
//                 {userData.lastName}
//             </h5>
//             <h5>
//                 <label> Email:</label>
//                 {userData.email}
//             </h5>
//             <h5>
//                 <label>Password: </label>
//                 {userData.password}
//             </h5>
//             <h5>
//                 <label>Confirm Password: </label>
//                 {userData.confirmPassword}
//             </h5>
//         </div>
//         </div>
       
//     );

// };

// export default UserFrom;