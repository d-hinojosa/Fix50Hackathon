import React, {useState, useEffect} from 'react'
import { useForm } from '../../Components/useForm'
import Popup from '../../Components/Popup/Popup'


const Home = () =>{
    const [ users, setUsers ] = useState([])
    const [ bloomer, setBloomer ] = useState(false)
    const [ mentor, setMentor ] = useState(false)
    const [ popup, setPopup ] = useState(true)
    const [values, handleChange] = useForm({
        firstName: "",
        lastName: "",
        email: ""
    });

    useEffect(() =>{
        fetch("/test")
            .then(res => res.json())
            .then(res => setUsers(res))
            .catch(() => console.log("was not able to find users"))
    }, [])

    const signupType = (type) =>{
        if(type === "bloomer"){
            setBloomer(true)
            setMentor(false)
        } else if (type === "mentor"){
            setBloomer(false)
            setMentor(true)
        }
    }

    let isBloomer = bloomer ? "active" : "inactive"
    let isMentor = mentor ? "active" : "inactive"

    return(
        <div>
            <p>If you can see our name on the bottom that you means your application is working properly</p>
            <h1>testing</h1>
            <ul>
                {users.map(user => <li key={user._id}>{user.name}</li>)}
            </ul>
            <Popup isOn={ popup } clicked={ () => setPopup(!popup) } header="Sign Up">
                <form id="form-signup">
                    <label htmlFor="Name">First Name:</label>
                    <input type="text" name="firstName" className="input" values={ values.firstName } onChange={ handleChange } required/>
                    <label htmlFor="first name">Last Name:</label>
                    <input type="text" name="lastName" className="input" values={ values.lastName } onChange={ handleChange } required/>
                    <label htmlFor="first name">Email:</label>
                    <input type="text" name="email" className="input" values={ values.email } onChange={ handleChange } required/>
                    <label htmlFor="choose">Choose:</label>
                    <div className="buttons">
                        <div className={`buttons-bttn ${ isMentor }`} onClick={ () => signupType("mentor") }>Mentor</div>
                        <div className={`buttons-bttn ${ isBloomer }`} onClick={ () => signupType("bloomer") }>Bloomer</div>
                    </div>
                    <div className="submit">
                        <input type="submit" value="Sign Up" className="submit-bttn"/>
                    </div>
                </form>
            </Popup>
        </div>
    )
}

export default Home