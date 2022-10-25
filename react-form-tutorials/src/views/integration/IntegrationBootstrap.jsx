import React from "react";

import { Alert, Form, Stack } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";

const IntegrationBootstrap = () => {
  const {
    control,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      firstName: "",
      age: 36,
      select: {},
    },
  });

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="mt-5">IntegrationBootstrap</div>

      <div className="mt-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack gap={2}>
            <Controller
              name="firstName"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <Form.Control {...field}></Form.Control>}
            ></Controller>
            {errors.firstName?.type === "required" && (
              <Alert variant="danger" size="sm" className="mt-2">
                First name is required
              </Alert>
            )}

            <Controller
              name="select"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Form.Select {...field}>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              )}
            ></Controller>
            {errors.select?.type === "required" && (
              <Alert variant="danger" size="sm" className="mt-2">
                select is required
              </Alert>
            )}
          </Stack>
          <input className="mt-2" type="submit" />
        </form>
      </div>
    </>
  );
};

export default IntegrationBootstrap;
