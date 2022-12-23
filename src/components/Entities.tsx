import {
  Box,
  Button,
  Heading,
  Input,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { ReactElement, useState } from "react";
import { EntityItem } from "./EntityItem";

type User = {
  name: string;
  id: string;
};

const initialState = [
  { name: "Fernando", id: "3b1c9af7-050b-4dfb-935a-12a0ccdc5a42" },
  { name: "Fernando", id: "4f73c9ca-d32d-432e-9834-74ee37105f28" },
  { name: "Fernando", id: "5b3e15c4-f7eb-4dc1-910e-61953b252d41" },
  { name: "Fernando", id: "9ba0ab4d-3150-4d03-8a3d-08e2dfa299b5" },
];

export function Entities(): ReactElement {
  const [users, setUsers] = useState<User[]>(initialState);

  const [userName, setUserName] = useState<string>("");

  const handleCreate = (event: any) => {
    event.preventDefault();

    const newUser = { name: userName, id: Math.random().toString() };

    setUsers([...users, newUser]);
  };

  const handleUpdate = (id: string, name: string) => {
    setUsers(
      users.map((user: any) => {
        if (user.id === id) {
          return { ...user, name };
        }
        return user;
      })
    );
  };

  const handleDelete = (id: string) => {
    setUsers(users.filter((user: any) => user.id !== id));
  };

  return (
    <>
      <Box p={20}>
        <Heading>React crud web</Heading>
        <Text>Simple crud made with reactjs and chakra-ui</Text>
        <Box mt={5} display={"flex"} flexDir={"row"}>
          <form onSubmit={handleCreate}>
            <Input
              w={300}
              placeholder="Insert user name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <Button ml={5} colorScheme="blue" type="submit">
              Create User
            </Button>
          </form>
        </Box>
        <Box mt={5}>
          <SimpleGrid columns={3} spacing={2} minChildWidth="200px">
            {users.map((user: any) => {
              return (
                <EntityItem
                  handleDelete={handleDelete}
                  key={user.id}
                  handleUpdate={handleUpdate}
                  user={user}
                ></EntityItem>
              );
            })}
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
}
