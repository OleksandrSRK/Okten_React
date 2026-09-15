import {type FormEvent, type SubmitEvent, useState} from "react";


interface IFormProps {
    username: string,
    password: string,

}


const FormComponent = () => {

    const [formState, setFormState] = useState<IFormProps>({
        username: 'user1',
        password: '1234'
    })

    const handleSubmit = (e:SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        let user = {
            username: formState.username,
            password: formState.password
        };
        console.log(user);
    };
/*
    const handleUsernameChange = (e:FormEvent<HTMLInputElement>) => {
        const input = e.target as HTMLInputElement;
        console.log(input.value);
        setFormState({...formState, username: input.value});
    }

    const handlePasswordChange = (e:FormEvent<HTMLInputElement>) => {
        const input = e.target as HTMLInputElement
        console.log(input.value);
        console.log(input.name);
        setFormState({...formState, password: input.value});
    }
*/

    const handleInputChange = (e:FormEvent<HTMLInputElement>) => {
        const input = e.target as HTMLInputElement
        console.log(input.name);
        setFormState({...formState, [input.name]: input.value});
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" value={formState.username} onChange={handleInputChange}/>
                <input type="text" name="password" value={formState.password} onChange={handleInputChange}/>
                <button>Sent</button>
            </form>
        </div>
    );
};

export default FormComponent;