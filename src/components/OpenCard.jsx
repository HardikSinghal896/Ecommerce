import React, { useState } from 'react'
import style from "../styles/OpenCard.module.css"
import img from "../Images/-6127404330106600000_120.jpg"
import { useRef } from 'react'
const OpenCard = () => {
    const ref = useRef(null);
    const [ind, setInd] = useState(1);
    const handleLeftClick = () => {
        ref.current.style.transform = `translateX(-${ind * 360}px)`
        setInd((prev) => (prev + 1) % 3)
    }
    return (
        <div className={style.mainContainer}>
            <div className={style.sidebar}>
                <div className={style.Card}>
                    <img src={img} alt="" />
                    <h2>Hardik</h2>
                    <div>
                        <button>Chat</button>
                        <button>Call</button>
                    </div>
                </div>
            </div>
            <div className={style.rightContainer}>
                <h2>Location</h2>
                <h2>Hyderabad, Telangana, India</h2>
                <hr />

                <h2>Basic Info</h2>
                <div className={style.basicInfo}>
                    <div>
                        <p>Gender</p>
                        <h3>Male</h3>
                    </div>
                    <div>
                        <p>Approx Rent</p>
                        <h3>$1000</h3>
                    </div>
                    <div>
                        <p>Occupancy</p>
                        <h3>Single</h3>
                    </div>
                    <div>
                        <p>Looking for</p>
                        <h3>Any</h3>
                    </div>
                </div>
                <div className={style.pictureContainer} style={{ width: "360px" }}>
                    <button className={style.leftButton} onClick={handleLeftClick}>Left</button>
                    <button className={style.rightButton}>Right</button>
                    <div ref={ref} style={{ display: "flex", transition: "ease 2s" }}>
                        <img src={img} alt="" />
                        <img src={img} alt="" />
                        <img src={img} alt="" />
                    </div>
                </div>
                <div>
                    <p>Preferences</p>
                </div>
            </div>
        </div>
    )
}

export default OpenCard