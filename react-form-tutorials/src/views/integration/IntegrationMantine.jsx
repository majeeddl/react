import React from "react";
import { Alert, Form, Stack } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import { Input, Select } from "@mantine/core";

const IntegrationMantine = () => {
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
      <div>IntegrationMantine</div>
      <div className="mt-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack gap={2}>
            <Controller
              name="firstName"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Input.Wrapper
                // error={errors.firstName ? " First name is required" : ""}
                >
                  <Input invalid={errors.firstName} {...field} />
                </Input.Wrapper>
              )}
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
                <Select
                  label="Your favorite framework/library"
                  placeholder="Pick one"
                  {...field}
                  data={[
                    { value: "react", label: "React" },
                    { value: "ng", label: "Angular" },
                    { value: "svelte", label: "Svelte" },
                    { value: "vue", label: "Vue" },
                  ]}
                />
              )}
            ></Controller>
          </Stack>
          <input className="mt-2" type="submit" />
        </form>
      </div>
    </>
  );
};

export default IntegrationMantine;
