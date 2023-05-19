import React from 'react'
import Card from '../components/card'

function Home() {
    async function getEmployees() {
        const response = await fetch('https://raw.githubusercontent.com/dixitsoham7/dixitsoham7.github.io/main/index.json')
        const data = await response.json()
        return data.employees
      }
      
      const [employees, setEmployees] = React.useState([])
    
      React.useEffect(() => {
        getEmployees()
        .then((emps) => setEmployees(emps))
        console.log(employees)
      }, [])

      const empList = employees.map((employee) => {
        return(
            <Card   
                key={employee.id}
                name={employee.name} 
                designation={employee.designation}
                skills={employee.skills}
                id={employee.id}
            />
        )   
    })
      
      return (
        <div className="p-12">
          <div className='flex '>
            <h1 className='text-4xl text-center'>Employees</h1>
            <form className='flex justify-center'>
              <input className='border-2 border-black' type='text' placeholder='Search' />
              <button className='border-2 border-black' type='submit'>Search</button>
            </form>
          </div>
          <div className='mt-12 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3'>
            {empList}
          </div>
        </div>
    )
}

export default Home