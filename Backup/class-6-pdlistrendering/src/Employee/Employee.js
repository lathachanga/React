import React from 'react'
import employees from './data'
class Employee extends React.Component{
    employees= employees
    render(){
        return <div>
           <pre>{JSON.stringify(this.employees)}</pre>
           <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <table className="table table-hover">
                        <thead className="bg-dark text-white">
                            <tr>
                                <th>Id</th>
                                <th>First Name</th>
                                <th>Email</th>
                                <th>Gender</th>
                            </tr>
                        </thead>
                       <tbody>
                        { employees.map((employee,index)=> {
                                return <tr key={index}>
                                    <td>{employee.id}</td>
                                    <td>{employee.first_name}</td>
                                    <td>{employee.email}</td>
                                    <td>{employee.gender}</td>
                                </tr>   
                            })
                        }
                      </tbody>
                    </table>
                </div>
            </div>
           </div>
        </div>
    }
}
export default Employee