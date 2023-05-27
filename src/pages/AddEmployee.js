import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { API_URL } from "../config/dev"

const AddEmployee = () => {
  const [name, setName] = useState("")
  const [role, setRole] = useState("")
  const [experience, setExperience] = useState(0)
  const navigate = useNavigate()
 
  const addEmployeeHandler = async () => {
    var payload = {
      name: name,
      role: role,
      experience: experience,
    };
    const res = await axios.post(`${API_URL}/employee`, payload);
    if(res){
      navigate('/')
    }
  };

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleRole = (e) => {
    setRole(e.target.value)
  }

  const handleExperience = (e) => {
    setExperience(e.target.value)
  }
 
  return (
    <>
      <div style={{padding: '30px'}}>
        <legend>Add New Emplyee Details</legend>
        <div>Name</div>
          <input type="text" value={name} onChange={handleName}  />
        <div>
        <div>Job Role</div>
          <input type="text" value={role} onChange={handleRole} />
        </div>
        <div>
          <div>Experience</div>
          <input type="number" value={experience} onChange={handleExperience} />
        </div>
        <button
          type="button"
          onClick={addEmployeeHandler}
        >
          Add
        </button>
      </div>
    </>
  );
};
export default AddEmployee;