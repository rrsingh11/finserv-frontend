import { Link } from "react-router-dom"

function Card(props) {
    const { id, name, designation, skills } = props

    const skillsList = skills.map((skill) => {
        if(skill === 'undefined') return;
        return(
            <span className="text-[12px] bg-slate-200 rounded-md m-1 px-2 text-center"> {skill}</span>
        )
    })


  return (
    <div className="border flex flex-col drop-shadow-lg rounded-[14px] p-8 justify-center gap-2 items-start">
        <h1 className="font-bold text-[16px]">{name}</h1>
        <h2 className="text-sm" >{designation}</h2>
        <div>{skillsList}</div>

      <Link to={`/projects/${id}`}>
        <button className="bg-blue-500 text-white py-1 px-4 rounded-lg drop-shadow-md mt-2">Projects</button>
      </Link>
    </div>
  )
}

export default Card