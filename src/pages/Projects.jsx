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

            <div className='mt-12 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3'>
                {employee.projects.map((project) => {
                    return(
                        // eslint-disable-next-line react/jsx-key
                        <div className='border-2 p-3'>
                            <h1 className='font-bold'>{project.name}</h1>
                            <h2>{project.description}</h2>
                            <div className="flex mt-10 justify-end gap-10">
                            <div className=''>
                                <h3 className='font-semibold'>Team</h3>
                                <ol>
                                    {project.team.map((member) => { 
                                        return(
                                            
                                            // eslint-disable-next-line react/jsx-key
                                            <li className='flex gap-2'>
                                                <span>{member.name} </span>
                                                <span>{member.role}</span>
                                            </li>
                                        )
                                    })}
                                </ol>
                            </div>

                            <div>
                                <h3 className='font-semibold'>Tasks</h3>
                                <ul>
                                    {project.tasks.map((task) => {
                                        if(task.status === 'undefined') return
                                        return(
                                            // eslint-disable-next-line react/jsx-key
                                            <li>
                                                <span className='text-semibold'>{task.name} </span>
                                                <span>{task.status}</span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                            </div>


                        </div>

                    )
                })}
            </div>
        </div>
        


        }        
    </div>
  )
}

export default Projects