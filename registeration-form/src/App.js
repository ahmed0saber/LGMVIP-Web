import { useState, useRef } from "react";
import './App.css';

function App() {
  const nameInput = useRef()
  const emailInput = useRef()
  const websiteInput = useRef()
  const imageInput = useRef()
  const maleInput = useRef()
  const femaleInput = useRef()
  const htmlInput = useRef()
  const cssInput = useRef()
  const jsInput = useRef()
  const [students, setStudents] = useState([])

  const enrollStudent = () => {
    let gender
    if(maleInput.current.checked){
      gender = "Male"
    }else{
      gender = "Female"
    }

    const skills = []
    if(htmlInput.current.checked){
      skills.push("HTML")
    }
    if(cssInput.current.checked){
      skills.push("CSS")
    }
    if(jsInput.current.checked){
      skills.push("JavaScript")
    }
    if(skills.length < 1){
      skills.push("No Skills")
    }

    let name
    if(nameInput.current.value.trim() === ""){
      name = "Unknown"
    }else{
      name = nameInput.current.value
    }

    let email
    if(emailInput.current.value.trim() === ""){
      email = "Unknown"
    }else{
      email = emailInput.current.value
    }

    let website
    if(websiteInput.current.value.trim() === ""){
      website = "Unknown"
    }else{
      website = websiteInput.current.value
    }

    const myObject = {
      id: students.length,
      name: name,
      email: email,
      website: website,
      image: imageInput.current.value,
      gender: gender,
      skills: skills
    }
    const tempArray = [...students]
    tempArray.push(myObject)
    setStudents(tempArray)
    clearStudent()
  }

  const clearStudent = () => {
    nameInput.current.value = ""
    emailInput.current.value = ""
    websiteInput.current.value = ""
    imageInput.current.value = ""
    htmlInput.current.checked = false
    cssInput.current.checked = false
    jsInput.current.checked = false
    maleInput.current.checked = true
  }

  return (
    <div className="app-container">
      <div className="form-container">
        <div className="input-group input-field">
          <input type="text" placeholder="name" ref={nameInput}/>
        </div>
        <div className="input-group input-field">
          <input type="email" placeholder="email" ref={emailInput}/>
        </div>
        <div className="input-group input-field">
          <input type="url" placeholder="website" ref={websiteInput}/>
        </div>
        <div className="input-group input-field">
          <input type="url" placeholder="image link" ref={imageInput}/>
        </div>
        <div className="input-group radio-field">
          <div className="radio-group">
            <b>Gender:</b>
          </div>
          <div className="radio-group">
            <input type="radio" id="male" ref={maleInput} name="gender" defaultChecked/>
            <label htmlFor="male">Male</label>
          </div>
          <div className="radio-group">
            <input type="radio" id="female" ref={femaleInput} name="gender"/>
            <label htmlFor="female">Female</label>
          </div>
        </div>
        <div className="input-group checkbox-field">
          <div className="checkbox-group">
            <b>Skills:</b>
          </div>
          <div className="checkbox-group">
            <input type="checkbox" id="html" ref={htmlInput}/>
            <label htmlFor="html">HTML</label>
          </div>
          <div className="checkbox-group">
            <input type="checkbox" id="css" ref={cssInput}/>
            <label htmlFor="css">CSS</label>
          </div>
          <div className="checkbox-group">
            <input type="checkbox" id="js" ref={jsInput}/>
            <label htmlFor="js">JavaScript</label>
          </div>
        </div>
        <div className="btns">
          <button className="btn-enroll" onClick={enrollStudent}>Enroll</button>
          <button className="btn-clear" onClick={clearStudent}>Clear</button>
        </div>
      </div>
      <div className="students-container">
        <div className="students-container-header">
          <div className="description">
            <h3>Description</h3>
          </div>
          <div className="image">
            <h3>Image</h3>
          </div>
        </div>
        <div className="students-container-body">
          {students.map(student => {
            return <div key={student.id} className="student-card">
              <div className="description">
                <h4>Name: {student.name}</h4>
                <p><b>Gender:</b> {student.gender}</p>
                <p><b>Email:</b> {student.email}</p>
                <p><b>Website:</b> {student.website}</p>
                <p><b>Skills:</b> {student.skills.toString()}</p>
              </div>
              <div className="image">
                <img src={student.image} alt={student.name} onError={({target}) => {
                    target.src="https://avatars.githubusercontent.com/u/64714761?v=4"
                    target.onerror = null
                  }
                }/>
              </div>
            </div>
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
