import { useEffect, useState } from "react"
import axios from "axios"
import { API_URL } from "../config/dev"
import '../styles/allEmployee.css';
import { useNavigate } from "react-router-dom"

const AllEmployees = () => {
	const [employees, setEmployees] = useState([{name: "", role:"", experience: ""}])
	const navigate = useNavigate()
	const getAllEmployees = async () => {
		const res = await axios.get(`${API_URL}/employee`)
		setEmployees(res.data)
	}

	const handleUpdate = (id) => {
		console.log("update id", id)
		navigate(`/edit-employee/${id}`)
	}

	useEffect(() => {
		getAllEmployees()
	}, [])
	return(
			<>
				<button className="btn" onClick={() => navigate('/add-employee')}>Add</button>
				<table>
					<tr>
						<th>Id</th>
						<th>Name</th>
						<th>Role</th>
						<th>Experience</th>
						<th>update</th>
					</tr>
					{
						employees.map((item, index) => (
							<tr key={index}>
								<td>{index+1}</td>
								<td>{item.name}</td>
								<td>{item.role}</td>
								<td>{item.experience}</td>
								<button onClick={() => handleUpdate(item._id)}>Update</button>
							</tr>
						))
					}
				</table>
			</>
	);
}

export default AllEmployees;