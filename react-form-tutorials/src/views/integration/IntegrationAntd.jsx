import React from "react";
import { Alert, Stack } from "react-bootstrap";
import { Input, Select } from "antd";
import { Controller, useForm } from "react-hook-form";
const { Option } = Select;

const IntegrationAntd = () => {
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
      <div className="mt-5">IntegrationAntd</div>
      <div className="mt-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack gap={2}>
            <Controller
              name="firstName"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <>
                  {console.log(errors)}
                  <Input
                    status={errors.firstName ? "error" : ""}
                    {...field}
                  ></Input>
                </>
              )}
            ></Controller>
            {errors.firstName?.type === "required" && (
              <Alert variant="danger" size="sm" className="mt-2">
                First Name is required
              </Alert>
            )}

            <Controller
              name="select"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <>
                  <Select defaultValue="lucy" style={{ width: 120 }} {...field}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>
                      Disabled
                    </Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                </>
              )}
            ></Controller>

            <input className="mt-2" type="submit"></input>
          </Stack>
        </form>
      </div>
    </>
  );
};

export default IntegrationAntd;
