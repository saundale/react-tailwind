import "./App.css";
import {useState} from 'react';


function App() {

  const [formData,setFormData] = useState({
    firstname:"",
    lastname:"",
    email:"",
    country:"",
    streetAddress:"",
    city:"",
    state:"",
    zip:"",
    comments:false,
    candidate:false,
    offers:false,
    pushNoti:""
  })

  function changeHandler(event){
    const {name,type,value,checked} = event.target;
    setFormData(prevFormData=>{
      return{
        ...prevFormData,
        [name]:type==="checkbox"?checked:value
      }
    })
  }

  function submitHandler(event){
    event.preventDefault();

    console.log("printing the data");
    console.log(formData)
  }

  return (
    <div className="flex flex-col justify-center items-center mt-2">
      <form onSubmit={submitHandler}>
        <label htmlFor="firstname">First Name:</label>
        <br/>
        <input
        type="text"
        id="firstname"
        placeholder="firstname"
        name="firstname"
        onChange={changeHandler}
        value={formData.firstname}
        className="outline "/>
        <br/>

        <label htmlFor="lastname">Last Name:</label>
        <br/>
        <input
        type="text"
        id="lastname"
        placeholder="lastname"
        name="lastname"
        onChange={changeHandler}
        value={formData.lastname}
        className="outline "/>
        <br/>

        <label htmlFor="email">Email:</label>
        <br/>
        <input
        type="email"
        id="email"
        placeholder="email"
        name="email"
        onChange={changeHandler}
        value={formData.email}
        className="outline "/>
        <br/>

        <fieldset>
          <label htmlFor="country">Select Country:</label>
          <br/>
          <select name="country" id="country" value={formData.country} onChange={changeHandler} className="outline">
            <option value="India">India</option>
            <option value="Brazil">Brazil</option>
            <option value="UK">UK</option>
            <option value="UAE">UAE</option>
          </select>
        </fieldset>

        <label htmlFor="streetaddress">Street Address</label>
        <br/>
        <input
        type="text"
        id="streetaddress"
        placeholder="Street Address"
        name="streetAddress"
        onChange={changeHandler}
        value={formData.streetAddress}
        className="outline "/>
        <br/>

        <label htmlFor="city">City:</label>
        <br/>
        <input
        type="text"
        id="city"
        placeholder="Pune.."
        name="city"
        onChange={changeHandler}
        value={formData.city}
        className="outline "/>
        <br/>

        <label htmlFor="state">State:</label>
        <br/>
        <input
        type="text"
        id="state"
        placeholder="state"
        name="state"
        onChange={changeHandler}
        value={formData.state}
        className="outline"/>
        <br/>

        <label htmlFor="zip">ZIP:</label>
        <br/>
        <input
        type="text"
        id="zip"
        placeholder="zip"
        name="zip"
        onChange={changeHandler}
        value={formData.zip}
        className="outline "/>
        <br/>

        <fieldset>
          <label>By Email</label>
          <div className="flex ">
            <input type="checkbox" id="comments" name="comments" checked={formData.comments} onChange={changeHandler}></input>
            <div>
              <label htmlFor="comments">Comments</label>
              <p>Lorem ipsum dolor sit amet co numquam repellat error at inventore. Est vitae.</p>
            </div>
          </div>

          <div className="flex ">
            <input type="checkbox" id="candidate" name="candidate" checked={formData.candidate} onChange={changeHandler}></input>
            <div>
              <label htmlFor="candidate">Candidate</label>
              <p>Lorem ipsum dolor sit amet co numquam repellat error at inventore. Est vitae.</p>
            </div>
          </div>

          <div className="flex ">
            <input type="checkbox" id="offers" name="offers" checked={formData.offers} onChange={changeHandler}></input>
            <div>
              <label htmlFor="offers">Offers</label>
              <p>Lorem ipsum dolor sit amet co numquam repellat error at inventore. Est vitae.</p>
            </div>
          </div>
        </fieldset>
        <br/>

        <fieldset>
          <legend>Push Notificatios</legend>
          <p>They are delivered via sms</p>
          <div>
            <div>
              <input type="radio" name="pushNoti" id="everything" value="Push Everything" onChange={changeHandler}></input>
              <label htmlFor="everything">Everything</label>
            </div>
            <br/>

            <div>
              <input type="radio" name="pushNoti" id="no" value="Push Nothing"  onChange={changeHandler}></input>
              <label htmlFor="no">Nothing</label>
            </div>
            <br/>

            <div>
              <input type="radio" name="pushNoti" id="same"  value="Push same as email" onChange={changeHandler}></input>
              <label htmlFor="same">Same as Email</label>
            </div>
          </div>
        </fieldset>

        <button className="bg-blue-500 rounded py-2 px-2 font-bold text-white" >Save</button>

      </form>
    </div>
  );
}

export default App;
