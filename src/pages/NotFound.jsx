import {NavLink} from 'react-router-dom'

export default function NotFound() {
    return(
        <>
            <div className='d-flex flex-column justify-content-center bg-light text-center'>
                <div className="d-flex justify-content-center">
                    <img src="https://img.freepik.com/vector-gratis/ups-error-404-ilustracion-concepto-robot-roto_114360-5529.jpg?w=826&t=st=1675351722~exp=1675352322~hmac=47eef99f85851e1a7bcace8209a971847ec2bb358806e886b7c40ac26f7cb7c0" alt="error 404" className='w-50'/>
                </div>
                <div className="d-flex justify-content-center">
                    <button className='btn btn-primary w-25 mb-5'><NavLink to="/" className='nav-link'>Volver al Home</NavLink></button>
                </div>
            </div>
        </>
    )
}