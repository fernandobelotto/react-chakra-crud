import {
  CheckIcon,
  DeleteIcon,
  EditIcon,
  SmallCloseIcon,
} from "@chakra-ui/icons";
import { Flex, HStack, IconButton, Input, Text } from "@chakra-ui/react";
import { useState } from "react";

export function EntityItem({ user, handleDelete, handleUpdate }: any) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user?.name);

  if (isEditing) {
    return (
      <Flex
        borderRadius="2xl"
        boxShadow="base"
        p={2}
        justify="space-between"
        gap={2}
      >
        <Input
          fontSize="lg"
          textOverflow="ellipsis"
          value={name}
          w="full"
          onChange={(e) => setName(e.target.value)}
        ></Input>
        <HStack>
          <IconButton
            size="sm"
            onClick={() => setIsEditing(false)}
            aria-label="cancel"
            icon={<SmallCloseIcon />}
          />
          <IconButton
            size="sm"
            onClick={() => {
              handleUpdate(user?.id, name);
              setIsEditing(false);
            }}
            aria-label="update"
            icon={<CheckIcon />}
          />
        </HStack>
      </Flex>
    );
  }

  return (
    <Flex
      borderRadius="2xl"
      boxShadow="base"
      p={2}
      justify="space-between"
      gap={2}
    >
      <Text fontSize="lg" textOverflow="ellipsis">
        {user?.name}
      </Text>
      <HStack>
        <IconButton
          size="sm"
          onClick={() => handleDelete(user?.id)}
          aria-label="Search database"
          icon={<DeleteIcon />}
        />
        <IconButton
          size="sm"
          onClick={() => setIsEditing(true)}
          aria-label="edit entity"
          icon={<EditIcon />}
        />
      </HStack>
    </Flex>
  );
}
