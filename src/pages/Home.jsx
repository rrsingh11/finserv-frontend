import React from 'react'
import Card from '../components/card'

function Home() {
    async function getEmployees() {
        const response = await fetch('https://raw.githubusercontent.com/dixitsoham7/dixitsoham7.github.io/main/index.json')
        const data = await response.json()
        return data.employees
      }
      
      const [employees, setEmployees] = React.useState([])
      const [filteredEmployees, setFilteredEmployees] = React.useState()
      const [isCheckboxChecked, setIsCheckboxChecked] = React.useState({})

      function handleFilter(e) {
        e.preventDefault()
        setIsCheckboxChecked(prev => {
          const prevCheckboxes = prev
          prevCheckboxes[e.target.value] = !prevCheckboxes[e.target.value]
          return prevCheckboxes
        })

        // if(!isCheckboxChecked[e.target.value]) return

        const searchQuery = e.target.value.toLowerCase()
        console.log(searchQuery)
        const filteredArray = []  
        employees.forEach((emp) => {
          emp.skills.forEach((skill) => {
            if(skill.toLowerCase() === searchQuery) {
              filteredArray.push(emp)
            }
          })
        })
        

        setFilteredEmployees(prev => {
          const prevEmps = prev
          prevEmps.push(...filteredArray)
          return prevEmps
        })

        console.log(filteredEmployees)
      }
    
      React.useEffect(() => {
        getEmployees()
        .then((emps) => setEmployees(emps))
        console.log(employees)
      }, [])

      // filteredEmployees ? setFilteredEmployees(filteredEmployees) : setFilteredEmployees(employees)

      const empList = employees.map((emp) => {
        return(
          <Card
            name={emp.name}
            designation={emp.designation}
            skills={emp.skills}
            key={emp.id}
            id={emp.id}
          />
        )
      })
    const [searchQuery, setSearchQuery] = React.useState('')

    // Handle Search Query
    const handleSearchQuery = (e) => {
      setSearchQuery(e.target.value)
      console.log(searchQuery)
    }

    function handleSearch(e) {
      e.preventDefault()
      const searchQuery = e.target.value.toLowerCase()
       const searchedArray = employees.filter((emp) => {
        return emp.name.toLowerCase().includes(searchQuery)
      })

      setFilteredEmployees(searchedArray)
    }

      return (
        <div className="p-12">
          <div className='flex justify-around'>
            <h1 className='text-4xl text-center'>Employee List</h1>
            <form className='flex justify-center'>
              <input className='border-1 border-black p-2 rounded-l-lg' type='text' placeholder='Search' />
              <button className='bg-blue-500 p-2 text-white rounded-r-lg ' onSubmit={handleSearch} onChange={handleSearchQuery}>Search</button>
            </form>
          </div>

          
          <div className="mt-10 flex justify-center">
              <form className='flex gap-2 flex-wrap '>
                <div className='text-xl'>Filter by:</div>
                <input 
                  type="checkbox" name="Pyhton" value="python" onChange={handleFilter} /> Python
                <input type="checkbox" name="React" value="react" onChange={handleFilter} /> React
                <input type="checkbox" name="Node" value="node" onChange={handleFilter} /> Node
                <input type="checkbox" name="SQL" value="sql" onChange={handleFilter} /> SQL
                <input type="checkbox" name="MongoDB" value="mongodb" onChange={handleFilter} /> MongoDB
                <input type="checkbox" name="Photoshop" value="c++" onChange={handleFilter} /> Photoshop
                <input type="checkbox" name="java" value="c++" onChange={handleFilter} /> Java
                <input type="checkbox" name="javascript" value="c++" onChange={handleFilter} /> Javascript
              </form>
          </div>


          <div className='mt-12 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3'>
            {empList}
          </div>
        </div>
    )
}

export default Home