import React from 'react'
import { useParams } from 'react-router-dom'

function Projects() {
    const { id } = useParams()
    const [employee, setEmployee] = React.useState()


    async function getEmployee(id) {
        const response = await fetch('https://raw.githubusercontent.com/dixitsoham7/dixitsoham7.github.io/main/index.json')
        const data = await response.json()
        return data.employees[id-1]
    }

    React.useEffect(() => {
        getEmployee(id).then((emp) => setEmployee(emp))
    }, [])


  return (

    <div>
        {
        employee && 
        <div>
            <h1>Projects of {employee.name}</h1>
        </div>
        }        
    </div>
  )
}

export default Projects