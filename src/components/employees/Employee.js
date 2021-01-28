import React from "react"
import "./Employee.css"

export const Employee = ({ employee }) => (
    <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <div className="employee__location">Location: {employee.location.name}</div>
        <div className="employee__manager">Manager: {employee.manager ? "Yes" : "No"}</div>
        <div className="employee__fullTime">Full Time: {employee.fullTime ? "Yes" : "No"}</div>
        <div className="employee__hourlyRate">Hourly Rate: ${employee.hourlyRate}</div>
    </section>
)