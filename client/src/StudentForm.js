import React, {useState} from 'react';

const StudentForm = () => {
    const [name, setName] = useState('')
    const [free, setFree] = useState('')
    const [subjects, setSubjects] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = () => {
        const config = {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body":JSON.stringify({
                name,
                //free,
                //subjects,
                email
                // Name, Email, isTutor
            })
        }
        fetch("/registerTutor", config)
    }

    return (
        <div>
            <label htmlFor='name'>
                Name
            </label>
            <input
                onChange={(e) => {
                    setName(e.target.value)
                }}
                type="text"
                placeholder='Your Name'
                name='name'
            />
            <label htmlFor='email'>
                Email
            </label>
            <input
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
                type="email"
                placeholder='Your Email'
                name='email'
            />
            <input
                onClick={handleSubmit}
                type="submit"
                value='Register'
            />
        </div>
    )
}

export default StudentForm;