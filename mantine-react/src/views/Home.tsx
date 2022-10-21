import React from "react";
import { Button, Checkbox, Space } from "@mantine/core";
import { IconDatabase } from "@tabler/icons";

const Home = () => {
  return (
    <>
      <div className="font-bold">Home</div>

      <div className="flex mt-3">
        <Button>Settings</Button>
        <Space w="xs" />
        <Button leftIcon={<IconDatabase size={14} />} loading={true}>
          Connect to database
        </Button>
      </div>

      <div className="flex mt-3">
        <Checkbox label="I agree to sell my privacy" />
      </div>
    </>
  );
};

export default Home;
