import React from 'react'
import style from "../styles/Register.module.css"
import img from "../Images/LoginPic.webp"
import { useState } from 'react'
import { useNavigate, useNavigation,Link} from 'react-router-dom'


const Register = () => {
    const [data, setdata] = useState({
        email: "",
        password: "",
        number: "",
    })
    const [errorMessage, setErrorMessage] = useState({
        email: "",
        password: "",
        number: ""
    });
    const navigate = useNavigate();

    function openHomePage(){
        navigate("/")
      }
    
    const handleRegister = () => {
        if (data.email == "") {
            return setErrorMessage((prev) => {
                return {
                    ...prev,
                    email: "Please Enter Valid Email"
                }
            })
        }
        else {
            setErrorMessage((prev) => {
                return {
                    ...prev,
                    email: ""
                }
            })
        }
        if (!data.password) {
            return setErrorMessage((prev) => {
                return {
                    ...prev,
                    password: "Please Enter Valid Password"
                }
            })
        }
        else {
            setErrorMessage((prev) => {
                return {
                    ...prev,
                    password: ""
                }
            })
        }
        if (!data.number) {
            return setErrorMessage((prev) => {
                return {
                    ...prev,
                    number: "Please Enter Valid Number"
                }
            })
        }
        else {
            setErrorMessage((prev) => {
                return {
                    ...prev,
                    number: ""
                }
            })
        }

        console.log(data);
    }


    return <>
        <div className={style.mainContainer}>

            <div>
                <img style={o} src={img} alt="" />
            </div>
            <div className={style.rightContainer}>
                <svg onClick={openHomePage} className={style.logo} xmlns="http://www.w3.org/2000/svg" width="70.5" height="14.271" viewBox="0 0 111.5 22.271"><g id="Group_13" dataName="Group 13" transform="translate(-643 -939.5)"><g id="Layer_2" dataName="Layer 2" transform="translate(643 943)"><g id="Layer_1" dataName="Layer 1"><g id="Component_2_1" dataName="Component 2 1"><g id="FlatMate"><g id="Group_10" dataName="Group 10"><path id="Path_13" dataName="Path 13" d="M0,.45H10.2A7.76,7.76,0,0,1,10.35,2a8.07,8.07,0,0,1-.15,1.58H3.65V7.77h5.2A8.57,8.57,0,0,1,9,9.33a8.27,8.27,0,0,1-.15,1.57H3.65v7.52a11.55,11.55,0,0,1-1.8.16A11.56,11.56,0,0,1,0,18.42Z" fill="#414141"></path><path id="Path_14" dataName="Path 14" d="M12.57.15A10.87,10.87,0,0,1,14.35,0,10.61,10.61,0,0,1,16.1.15V13.27a6.9,6.9,0,0,0,.09,1.25,1.91,1.91,0,0,0,.27.74.92.92,0,0,0,.49.36,2.31,2.31,0,0,0,.75.1,3.47,3.47,0,0,0,.44,0,3.4,3.4,0,0,0,.46-.08,7.9,7.9,0,0,1,.28,2V18a1.23,1.23,0,0,1-.06.36,4.5,4.5,0,0,1-1,.17,9.76,9.76,0,0,1-1,.06,4.37,4.37,0,0,1-3.08-1.07,4.48,4.48,0,0,1-1.17-3.46Z" fill="#414141"></path><path id="Path_15" dataName="Path 15" d="M27.22,9.92A2,2,0,0,0,27,9a1.42,1.42,0,0,0-.55-.59,2.13,2.13,0,0,0-.86-.28A6.65,6.65,0,0,0,24.47,8a8.82,8.82,0,0,0-2.87.52,7.28,7.28,0,0,1-.53-1.22,5,5,0,0,1-.17-1.38,12.6,12.6,0,0,1,2.2-.54,12.74,12.74,0,0,1,2-.18,6.07,6.07,0,0,1,4.06,1.25,5,5,0,0,1,1.46,4V18a20,20,0,0,1-2.12.52,14.25,14.25,0,0,1-2.83.25,11.25,11.25,0,0,1-2.33-.22,5,5,0,0,1-1.83-.75,3.46,3.46,0,0,1-1.17-1.35,4.44,4.44,0,0,1-.42-2,3.74,3.74,0,0,1,.52-2,4,4,0,0,1,1.32-1.3,6,6,0,0,1,1.81-.7,9.78,9.78,0,0,1,2-.21,13.1,13.1,0,0,1,1.6.07Zm0,2.58-.65-.09h-.62a3.72,3.72,0,0,0-1.94.43,1.54,1.54,0,0,0-.71,1.41,1.59,1.59,0,0,0,.27,1,1.67,1.67,0,0,0,.67.52,2.81,2.81,0,0,0,.82.2h.76a4.74,4.74,0,0,0,.75-.06l.65-.11Z" fill="#414141"></path><path id="Path_16" dataName="Path 16" d="M34.17,8.2H32.55l-.13-.5,4.68-6h.57V5.5h3a5.623,5.623,0,0,0,.1.67c.02.2,0,.41,0,.63v.67a2,2,0,0,1-.1.73h-3v5.07a5.14,5.14,0,0,0,.13,1.25,1.75,1.75,0,0,0,.36.75,1.21,1.21,0,0,0,.59.38,2.88,2.88,0,0,0,.82.1,4.52,4.52,0,0,0,.74-.06l.64-.11a4.55,4.55,0,0,1,.25,1,6.33,6.33,0,0,1,.07.91v.83a10.25,10.25,0,0,1-2.37.28,5.08,5.08,0,0,1-3.48-1.07,4.41,4.41,0,0,1-1.2-3.46Z" fill="#414141"></path></g><g id="Group_11" dataName="Group 11"><path id="Path_17" dataName="Path 17" d="M43.9.45A13,13,0,0,1,45.82.3a12.36,12.36,0,0,1,1.93.15l4.12,10.3L56.12.45A9.21,9.21,0,0,1,57.85.3a10.73,10.73,0,0,1,1.82.15l.85,18a11.55,11.55,0,0,1-1.8.16,9.35,9.35,0,0,1-1.67-.16L56.6,6.22,53,14.67c-.23,0-.48.07-.73.09a6.28,6.28,0,0,1-.75,0h-.65a4.18,4.18,0,0,1-.67-.1L46.8,6.04l-.4,12.38a8.41,8.41,0,0,1-1.55.16,9.59,9.59,0,0,1-1.65-.16Z" fill="#15b36a"></path><path id="Path_18" dataName="Path 18" d="M70.27,9.92a2,2,0,0,0-.2-1,1.42,1.42,0,0,0-.55-.59,2.13,2.13,0,0,0-.86-.28A6.65,6.65,0,0,0,67.52,8a8.82,8.82,0,0,0-2.87.52,7.28,7.28,0,0,1-.53-1.22A5,5,0,0,1,64,5.92a12.6,12.6,0,0,1,2.2-.54,12.74,12.74,0,0,1,2-.18,6.07,6.07,0,0,1,4.06,1.25,5,5,0,0,1,1.46,4V18a20,20,0,0,1-2.12.52,14.25,14.25,0,0,1-2.83.25,11.18,11.18,0,0,1-2.33-.22,5,5,0,0,1-1.83-.75,3.46,3.46,0,0,1-1.17-1.35,4.44,4.44,0,0,1-.42-2,3.66,3.66,0,0,1,.52-2,4,4,0,0,1,1.32-1.3,6,6,0,0,1,1.81-.7,9.78,9.78,0,0,1,2-.21,13.1,13.1,0,0,1,1.6.07Zm0,2.58-.65-.09H69a3.72,3.72,0,0,0-1.94.43,1.54,1.54,0,0,0-.71,1.41,1.59,1.59,0,0,0,.27,1,1.67,1.67,0,0,0,.67.52,2.74,2.74,0,0,0,.82.2h.76a4.74,4.74,0,0,0,.75-.06l.65-.11Z" fill="#15b36a"></path><path id="Path_19" dataName="Path 19" d="M77.22,8.2H75.6l-.13-.5,4.68-6h.57V5.5h3a5.623,5.623,0,0,0,.1.67c.02.2,0,.41,0,.63v.67a2,2,0,0,1-.1.73h-3v5.07a4.69,4.69,0,0,0,.13,1.25,1.75,1.75,0,0,0,.36.75,1.17,1.17,0,0,0,.59.38,2.88,2.88,0,0,0,.82.1,4.52,4.52,0,0,0,.74-.06l.64-.11a5.21,5.21,0,0,1,.25,1,6.331,6.331,0,0,1,.07.91v.83a10.32,10.32,0,0,1-2.37.28,5.08,5.08,0,0,1-3.48-1.07,4.41,4.41,0,0,1-1.2-3.46Z" fill="#15b36a"></path><path id="Path_20" dataName="Path 20" d="M89.27,13.05a2.73,2.73,0,0,0,1,2.17,4.25,4.25,0,0,0,2.5.68,9.47,9.47,0,0,0,1.74-.16,10.26,10.26,0,0,0,1.69-.47,6.13,6.13,0,0,1,.47,1.2A6,6,0,0,1,97,18a12.19,12.19,0,0,1-4.4.75,8.41,8.41,0,0,1-3.09-.5,5.42,5.42,0,0,1-2.1-1.38,5.61,5.61,0,0,1-1.2-2.12,8.7,8.7,0,0,1-.39-2.67,8.89,8.89,0,0,1,.4-2.67A6.39,6.39,0,0,1,87.36,7.2a5.69,5.69,0,0,1,2-1.46A6.39,6.39,0,0,1,92,5.2a5.87,5.87,0,0,1,2.4.47A5.33,5.33,0,0,1,96.21,7a5.52,5.52,0,0,1,1.11,2,7.75,7.75,0,0,1,.38,2.44q0,.465,0,.93a5.129,5.129,0,0,1-.09.74Zm5.08-2.47a3.22,3.22,0,0,0-.66-1.94A2.12,2.12,0,0,0,92,7.9a2.47,2.47,0,0,0-1.9.7,3.28,3.28,0,0,0-.77,2Z" fill="#15b36a"></path></g></g></g></g></g><g id="Group_12" dataName="Group 12" transform="translate(731.621 928.621)"><circle id="Ellipse_4" dataName="Ellipse 4" cx="5.5" cy="5.5" r="5.5" transform="translate(11.379 11.379)" fill="none" stroke="#414141" stroke-width="1"></circle><path id="Path_21" dataName="Path 21" d="M59.12,49.011a1.106,1.106,0,0,0,.73-.2.968.968,0,0,0,0-1.246,1.148,1.148,0,0,0-.73-.184h-.687v1.626h.687m-.687,1.123v2.393H56.8V46.2h2.492a3.128,3.128,0,0,1,1.829.423,1.5,1.5,0,0,1,.583,1.326,1.67,1.67,0,0,1-.3,1.031,1.738,1.738,0,0,1-.914.589,1.258,1.258,0,0,1,.6.35,3.019,3.019,0,0,1,.534.816l.89,1.792H60.777L60,50.956a1.693,1.693,0,0,0-.473-.644,1.063,1.063,0,0,0-.638-.178h-.46" transform="translate(-42.478 -32.529)" fill="#414141"></path></g></g></svg>

                <h1 className={style.header}>Create New Account</h1>
                <p className={style.para}>We will send an sms with 5-digit verification code on this number</p>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <span style={{ color: "red" }}>{errorMessage.email}</span>
                    <label>Email</label>
                </div>
                <input onChange={(e) => setdata((prev) => {
                    return {
                        ...prev,
                        email: e.target.value
                    }
                })} type="email" id='email' />
                {/* <br /> */}
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <span style={{ color: "red" }}>{errorMessage.password}</span>
                    <label>Password</label>
                </div>
                <input onChange={(e) => setdata((prev) => {
                    return (
                        {
                            ...prev,
                            password: e.target.value
                        }
                    )
                })} type="password" id='password' />
                {/* <br /> */}
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <span style={{ color: "red" }}>{errorMessage.number}</span>
                    <label>Number</label>
                </div>
                <input onChange={(e) => setdata((prev) => {
                    return {
                        ...prev,
                        number: e.target.value
                    }
                })} type="number" placeholder='9999 999 999' id='number' />
                <br />
                <button className={style.OTPbutton} onClick={handleRegister}>Create New Account</button>
            </div>
        </div>
    </>
}
const o = {
    width: "50vw",
    height: "100vh"
}
export default Register