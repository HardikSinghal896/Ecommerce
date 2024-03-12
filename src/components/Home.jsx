import React from 'react'
import baseballcap_8529055 from "../Images/baseball-cap_8529055.png"
import hotel from '../Images/hotel_489401.png'
import employee from '../Images/employees_3321681.png'
import pg from '../Images/icons8-room-64.png'
import style from '../styles/Home.module.css'
import Cards from './Cards'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import Footer from './Footer'
import { useState,useEffect } from 'react'
const cardArray = [
    {
        type: "room_mates",
        title: "Room mates",
        id: "1",
        location: "Gachibowli, Hyderabad"
    },
    {
        title: "Rooms",
        type: "rooms",
        id: "2",
        location: "Kukatpully, Hyderabad"
    },
    {
        title: "PG",
        type: "pg",
        id: "3",
        location: "Kondapor, Hyderabad"
    },
]

const Home = () => {
    const location = useLocation();
    // URLSearchParams is used to parse the query parameters from the location object
    const params = new URLSearchParams(location.search);
    const [searchValue,setsearchValue] = useState("");
    const[updatedCardArray,setupdatedCardArray] = useState(cardArray);
    // Extracting specific query parameters
    const paramP = params.get('p');
    const paramT = params.get('t');

    const navigation = useNavigate();

    function openHome() {
        navigation("/?p=0&t=nhp")
    }
    function openRooms() {
        navigation("/?p=0&t=h")
    }
    function openRoommates() {
        navigation("/?p=0&t=n")
    }
    function openPg() {
        navigation("/?p=0&t=p")
    }
    useEffect(() => {
        const searchArray = cardArray.filter((item)=>{
            if(item.location.toLowerCase().includes(searchValue.toLowerCase()))
            {
                return item;
            }
        })
        setupdatedCardArray(searchArray);
    }, [searchValue])
    
    console.log(updatedCardArray);
    return (
        <>
            <div className={style.mainContainer}>
                <div className={style.icons}>
                    <div className={style.eachIcon} onClick={openHome}>
                        <img src={baseballcap_8529055} alt="" height="20vh" width="20vw" />
                        <span>All listing</span>
                    </div>
                    <div className={style.eachIcon} onClick={openRooms}>
                        <img src={hotel} alt="" height="20vh" width="20vw" />
                        <span>Rooms</span>
                    </div>
                    <div className={style.eachIcon} onClick={openRoommates}>
                        <img src={employee} alt="" height="20vh" width="20vw" />
                        <span>Roommates</span>
                    </div>
                    <div className={style.eachIcon} onClick={openPg}>
                        <img src={pg} alt="" height="20vh" width="20vw" />
                        <span>PG</span>
                    </div>
                </div>
                <div className={style.inputs}>
                    <input type="text" onChange={(e)=>{
                        setsearchValue(e.target.value);
                    }} />
                    <select name="Gender" id="">
                        <option value disabled>Gender</option>
                        <option value="All">All</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
                {/* <hr /> */}

            </div>
            <hr style={{ maxWidth: "800px", margin: "auto", marginTop: "10px" }} />
            <Cards cardArray={updatedCardArray} />

        </>
    )
}

export default Home