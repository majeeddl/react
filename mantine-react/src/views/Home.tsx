import React from "react";
import {
  ActionIcon,
  Button,
  Checkbox,
  CopyButton,
  Group,
  SimpleGrid,
  Space,
  Text,
  Tooltip,
} from "@mantine/core";
import { IconCheck, IconCopy, IconDatabase } from "@tabler/icons-react";

const Home = () => {
  return (
    <>
      <div className="font-bold">Home</div>

      <CopyButton value={"test"}>
        {({ copied, copy }) => (
          <Tooltip
            label={copied ? "Copied" : "Copy"}
            withArrow
            position="right"
          >
            <ActionIcon color={copied ? "teal" : "gray"} onClick={copy}>
              {copied ? <IconCheck size="1rem" /> : <IconCopy size="1rem" />}
            </ActionIcon>
          </Tooltip>
        )}
      </CopyButton>

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
      <div className="flex mt-3">
        <div>Group :</div>
        <Group>
          <Button variant="outline">1</Button>
          <Button variant="outline">2</Button>
          <Button variant="outline">3</Button>
        </Group>
      </div>
      <div className="mt-3">
        <div>Simple Grid :</div>
        <SimpleGrid cols={3}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </SimpleGrid>
      </div>
      <div className=" mt-3">
        <div>Space :</div>
        <br />
        <div style={{ display: "flex" }}>
          <Text>First line</Text>
          <Space w="md" />
          <Text>Second line</Text>
        </div>
      </div>
    </>
  );
};

export default Home;
