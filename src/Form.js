import { useState } from "react";

const Register = () => {
    const [form, setForm] = useState({
        firstName: "Ozge",
        lastName: "Ozersahin",
        email: "ozgedonmez39@gmail.com"
    });

    return(
        <div>
            <label> First name:
                <input value={form.firstName} onChange={e => {setForm({...form, firstName: e.target.value})}}></input>
            </label>
            <label> Last name:
                <input value={form.lastName} onChange={e => {setForm({...form, lastName: e.target.value})}}></input>
            </label>
            <label> E-mail:
                <input value={form.email} onChange={e => {setForm({...form, email: e.target.value})}}></input>
            </label>
        </div>
    )
}

export default Register;