import React, {useState} from 'react'



export default function CustomerInfoForm(props){

    const [text, setText] = useState("");    //States in Reacts

    const HandleOnChange = (event)=>{
    //    alert("Handle On Change!!!");
       let upperText = event.target.value.toUpperCase();
       setText(upperText);
    }
    const HandleDiscardChanges = ()=>{
        window.location.reload();
        props.setAlertProperties("All fields cleared!", "success");
    }
    function HandleSubmit(){
    //    alert("Submitted!!!");
       props.setAlertProperties("Successfully Submitted!", "success");
    }
    return(
        <form>
            <div className="form-group" style={{color : props.mode ==='dark' ? 'white' : 'black'}}>
                <label htmlFor="exampleFormControlInput1">Customer Name : </label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Customer Name" onChange = {HandleOnChange} value={text} />
                <label htmlFor="exampleFormControlInput2">Email address :</label>
                <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="name@example.com" />
                <label htmlFor="exampleFormControlInput3">Mobile Number :</label>
                <input type="text" className="form-control" id="exampleFormControlInput3" placeholder="XXXXXXXXXX" />
                <label htmlFor="exampleFormControlInput4">Plan Size :</label>
                <input type="text" className="form-control" id="exampleFormControlInput4" placeholder="Enter in Square Foot" />
                <label htmlFor="exampleFormControlSelect1">Building Floor :</label>
                <select className="form-control" id="exampleFormControlSelect2">
                    <option>Single Floor</option>
                    <option>Two Floor</option>
                    <option>Three Floor</option>
                    <option>Four Floor</option>
                </select>
                <label htmlFor="exampleFormControlSelect2">Building Type ( Total Floors ) :</label>
                <select className="form-control" id="exampleFormControlSelect2">
                    <option>1 RK</option>
                    <option>1 BHK</option>
                    <option>2 BHK</option>
                    <option>3 BHK</option>
                </select>
                <label htmlFor="exampleFormControlTextarea1">Our Cost : </label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={HandleSubmit}>Submit</button>
            <button className="btn btn-danger mx-1" onClick={HandleDiscardChanges}>Discard Changes</button>
            </form>
    );
}