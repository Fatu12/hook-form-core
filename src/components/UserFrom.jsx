import React,{useState} from 'react'

const UserFrom = (props) =>{
    // const [firstName,setFirstName]= useState("");
    // const [lastName, setLastName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password,setPassword] = useState("");
    // const [confirmPassword,setConfirmPassword] = useState("");
    // creating Object
        const [userData, setUserData] = useState({
            firstName : "",
            lastName : "", 
            email : "",
            password: "",
            confirmPassword: ""
        })
        const changeHandler = (event)=>{
             event.preventDefault();
            console.log("VALUE",event.target.value)
            console.log("NAME",event.target.name)
            setUserData({...userData,[event.target.name]:event.target.value})
            setUserData(prevState => ({...userData, [event.target.name]:event.target.value}))

        }
        // ls
    // const createUser = (event) =>{
    //     // console.log(event)
    //     event.preventDefault();
    //     // const newUser = {firstName,lastName,email,password,confirmPassword};
    //     setFirstName("");
    //     setLastName("");
    //     setEmail("");
    //     setPassword("");
    //     setConfirmPassword("");
    //     };
    //     const handleFirstName = (event) => {
    //         setFirstName(event.target.value)
    //     }
    //     const handleLastName = (event) => {
    //         setFirstName(event.target.value)
    //     }
    //     const handleEmail = (event)=> {
    //         setEmail(event.target.value)
    //     }
    //     const handlePassword = (event)=> {
    //         setPassword(event.target.value)
    //     }
    //     const handleConfirmPassword = (event)=> {
    //         setConfirmPassword(event.target.value)
      // }

    
       return(
        <div>
            <h1> Type Your Information </h1>
        <form onSubmit={changeHandler}>
            {/* onSubmit={changeHandler} */}
            <div>
                 <label>First Name:</label>
                <input name="firstName" onChange={changeHandler} />
            </div>
            <div>
                <label> Last Name: </label> 
                <input name ="lastName" onChange={changeHandler} />
            </div>
            <div>
                <label>Email Address: </label> 
                <input name ="email" onChange={changeHandler} />
            </div>
            <div>
                <label>Password: </label>
                {/* onchange is that helps user to save data they typed it */}
                <input type="password" name="password" onChange={changeHandler} />
            </div>
            <div>
                <label value= "confirmPassword" > Confirm Password: </label>
                <input type="password" name="confirmPassword" onChange={changeHandler} />
            </div>
            <input type="submit" value="Create User"/>  
        </form>
        <div>
            <h1> Your Form Data</h1>
            <h5>
                <label>First Name: </label>
                {userData.firstName}
            </h5>
            <h5>
                <label>Last Name: </label>
                {userData.lastName}
            </h5>
            <h5>
                <label> Email:</label>
                {userData.email}
            </h5>
            <h5>
                <label>Password: </label>
                {userData.password}
            </h5>
            <h5>
                <label>Confirm Password: </label>
                {userData.confirmPassword}
            </h5>
        </div>
        </div>
       
    );

};

export default UserFrom;