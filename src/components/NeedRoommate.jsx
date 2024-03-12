import React from 'react'
import { useState } from 'react'
import style from '../styles/NeedRoommate.module.css'
import { useNavigate } from 'react-router-dom'
const NeedRoommate = () => {
  const [selectedBtn, setSelectedBtn] = useState(null);
  const [selectedBtn1, setselectedBtn1] = useState(null);
  const navigate = useNavigate();
  const singleButton = async (index) => {
    setSelectedBtn(index);
  }
  const singleButton1 = (index) => {
    setselectedBtn1(index);
  }
  const handleClose = () => {
      navigate("/");
  }
  return (
    <div className={style.mainContainer}>
      <div className={style.formContainer}>
        <div style={{float:"right" , marginRight:"10px", cursor:"pointer"}} onClick={handleClose}>
          <span class="material-symbols-outlined">
            close
          </span>
        </div>
        <h1 style={{ width: "max-content", margin: "auto", marginTop: "80px" }}>Add your room details</h1>
        <p style={{ width: "max-content", margin: "auto" }}>So that others can contact you</p>
        <div className={style.firstContainer}>
          <div style={{ marginLeft: "100px" }}>
            <label>Add you Location</label>
            <div className={style.locationInput}>
              <div><input type="text" style={{ padding: "10px", paddingLeft: "30px", backgroundColor: "#E5E7EB", borderRadius: "10px" }} /></div>
              <span class="material-symbols-outlined" style={{ position: "absolute" }}>
                location_on
              </span>
            </div>
          </div>
          <div style={{ marginRight: "100px" }}>
            <label style={{ marginLefat: "10px" }}>Looking for </label>
            <div className={style.genderInputs}>
              <button id='button1' style={{ backgroundColor: selectedBtn == 1 ? "lightblue" : "" }} className={style.buttonRadio} onClick={() => { singleButton(1) }}></button>
              <label htmlFor="">Male</label>
              <button id='button1' style={{ backgroundColor: selectedBtn == 2 ? "lightblue" : "" }} className={style.buttonRadio} onClick={() => { singleButton(2) }}></button>
              <label htmlFor="">Female</label>
              <button id='button1' style={{ backgroundColor: selectedBtn == 3 ? "lightblue" : "" }} className={style.buttonRadio} onClick={() => { singleButton(3) }}></button>
              <label htmlFor="">Others</label>
            </div>
          </div>
        </div>
        <div className={style.firstContainer}>
          <div style={{ marginLeft: "100px" }}>
            <label>Approx Rent</label>
            <div className={style.locationInput}>
              <div><input type="text" style={{ padding: "10px", paddingLeft: "30px", backgroundColor: "#E5E7EB" }} /></div>
              <span class="material-symbols-outlined" style={{ position: "absolute" }}>
                currency_rupee
              </span>
            </div>
          </div>
          <div style={{ marginRight: "96px" }}>
            <label style={{ marginLaeft: "10px" }}>Occupancy </label>
            <div className={style.genderInputs}>
              <button id='button1' style={{ backgroundColor: selectedBtn1 == 1 ? "lightblue" : "" }} className={style.buttonRadio} onClick={() => { singleButton1(1) }}></button>
              <label htmlFor="">Single</label>
              <button id='button1' style={{ backgroundColor: selectedBtn1 == 2 ? "lightblue" : "" }} className={style.buttonRadio} onClick={() => { singleButton1(2) }}></button>
              <label htmlFor="">Shared</label>
              <button id='button1' style={{ backgroundColor: selectedBtn1 == 3 ? "lightblue" : "" }} className={style.buttonRadio} onClick={() => { singleButton1(3) }}></button>
              <label htmlFor="">Others</label>
            </div>
          </div>
        </div>
        <div className={style.uploadContainer}>
          <h4>Upload your 3 photos here</h4>
          <div className={style.uploadBox}>
          </div>
          <p>You can upload images upto 25 MB</p>
        </div>
        <button type='submit' style={{ margin: "auto", width: "max-content", display: "block", backgroundColor: "#15B36A", color: "white", cursor: "pointer" }}>Submit</button>
        <h3 style={{ width: "max-content", margin: "auto" }}>Have room & need roommate</h3>
      </div>
    </div>
  )
}

export default NeedRoommate;