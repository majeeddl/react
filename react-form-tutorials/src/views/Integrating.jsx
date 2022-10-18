import React from 'react'
import { forwardRef } from 'react'
import { useForm} from "react-hook-form"

const Input = ({ label, register, required }) => (
    <>
        <label>{label}</label>
        <input {...register(label, { required })} />
    </>
)

const Select = forwardRef(({ onChange, onBlur, name, label }, ref) => (
    <>
        <label>{label}</label>
        <select onChange={onChange} onBlur={onBlur} name={name} label={label}>
            <option value="20">20</option>
            <option value="30">30</option>
        </select>
    </>
))

const Integrating = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    };

    return (
        <>
            <div>Integrating</div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <Input label="First Name" register={register} required />
                <Select label="Age" {...register("Age")} />
                <input type="submit" />
            </form>
        </>
    )
}

export default Integrating