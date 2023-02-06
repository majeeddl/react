import React from 'react'
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const SetError = () => {
    const {
        register,
        formState,
        handleSubmit,
        setError
    } = useForm();

    const { errors } = formState

    const onSubmit = (data) => console.log(data);

    const setErrorWithCustomData = () => {
        // setError('firstName', { type: 'required', message: 'custom message' });

        // setError('lastName', {
        //     types: {
        //         required: "This is required",
        //         minLength: "This is minLength"
        //     } })
    }

    return (
        <>

            <div>SetError</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register("firstName", { required: true })}
                    aria-invalid={errors.firstName ? "true" : "false"}
                />
                {errors.firstName?.type && (
                    <p role="alert">{errors.firstName?.message}</p>
                )}
                <input
                    {...register("lastName", { required: true })}
                    aria-invalid={errors.lastName ? "true" : "false"}
                />
                {errors.lastName?.types && (
                    <p role="alert">{errors.lastName?.message}</p>
                )}
                <input
                    {...register("mail", { required: "Email Address is required" })}
                    aria-invalid={errors.mail ? "true" : "false"}
                />
                {errors.mail && <p role="alert">{errors?.mail?.message}</p>}

                <input type="submit" />
            </form>

            <Button style={{ marginTop: 10 }} onClick={setErrorWithCustomData}> SET ERROR </Button>

        </>
    )
}

export default SetError