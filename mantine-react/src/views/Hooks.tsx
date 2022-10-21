import { useCounter } from "@mantine/hooks";
import { Button, Group, Text } from '@mantine/core'
import React from "react";

const Hooks = () => {
  const [count, handlers] = useCounter(0, { min: 0, max: 10 });

  return (
    <>
      <div>Hooks</div>

      <div className="mt-2">
        <div>counter hooks</div>

        <Text>Count: {count}</Text>
        <Group position="center">
          <Button onClick={handlers.increment}>Increment</Button>
          <Button onClick={handlers.decrement}>Decrement</Button>
          <Button onClick={handlers.reset}>Reset</Button>
          <Button onClick={() => handlers.set(5)}>Set 5</Button>
        </Group>
      </div>
    </>
  );
};

export default Hooks;
