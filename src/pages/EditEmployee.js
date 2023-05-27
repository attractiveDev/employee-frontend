import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { API_URL } from "../config/dev"



const EditEmployee = () => {
  const { id } =  useParams("id")
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [role, setRole] = useState("")
  const [experience, setExperience] = useState(0)
  const [isLoading, setLoading] = useState(false)

  const getEmployeeById = async () => {
    try{
      setLoading(true);
      const res = await axios.get(`${API_URL}/employee/${id}`)
      setName(res.data.name)
      setRole(res.data.role)
      setExperience(res.data.experience)
      setLoading(false);
    }catch(error){
      console.log("error", error)
    }
  }

  const handleUpdate = async () => {
    try{
      setLoading(true);
      const payload = {
        name: name,
        role: role,
        experience: experience
      }
      const res = await axios.put(`${API_URL}/employee/${id}`, payload)
      setLoading(false);
      if(res.data){
        navigate('/')
      }
    }catch(error){
      console.log("error", error)
    }

  }

  const handleDelete = async () => {
    try{
      const res = await axios.delete(`${API_URL}/employee/${id}`);
      if(res){
        navigate('/')
      }
    }catch(error){
      console.log("error", error)
    }
  }

  useEffect(() => {
    getEmployeeById()
  }, [])
  return(
    <>
      {
        isLoading && <div>loading...</div>
      }
      {
        !isLoading && 
          <div>
            <h3>EditEmployee</h3>
            <table>
              <tr>
                <th>Id</th>
                {/* <th>{id}</th> */}
              </tr>
              <tr>
                <th>Name</th>
                <th>
                  <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
                </th>
              </tr>
              <tr>
                <th>Role</th>
                <th>
                  <input type="text" value={role} onChange={(e) => setRole(e.target.value)} />
                </th>
              </tr>
              <tr>
                <th>Experience</th>
                <th>
                  <input type="number" value={experience} onChange={(e) => setExperience(e.target.value)} />
                </th>
              </tr>
            </table>
            <button className="btn" onClick={handleUpdate}>Save</button>
            <button className="btn" onClick={handleDelete}>Delete</button>
          </div>
      }
    </>
  );
}

export default EditEmployee;