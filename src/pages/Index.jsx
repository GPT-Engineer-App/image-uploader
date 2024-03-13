import React, { useState } from "react";
import { Box, Button, Container, Image, Flex, VStack, Text, Input } from "@chakra-ui/react";
import { FaUpload } from "react-icons/fa";

const Index = () => {
  const [imageOne, setImageOne] = useState(null);
  const [imageTwo, setImageTwo] = useState(null);

  const handleImageChange = (event, setImage) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    };
  };

  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={6}>
        <Text fontSize="2xl" fontWeight="bold">
          Image Upload
        </Text>
        <Flex justifyContent="space-around" w="full">
          <Box textAlign="center">
            <Input type="file" accept="image/*" onChange={(e) => handleImageChange(e, setImageOne)} p={1} display="none" id="file-upload-one" />
            <label htmlFor="file-upload-one">
              <Button leftIcon={<FaUpload />} colorScheme="teal" as="span">
                Upload Image 1
              </Button>
            </label>
            {imageOne && <Image src={imageOne} alt="Uploaded Image 1" boxSize="200px" mt={4} style={{ filter: "grayscale(100%)" }} />}
          </Box>
          <Box textAlign="center">
            <Input type="file" accept="image/*" onChange={(e) => handleImageChange(e, setImageTwo)} p={1} display="none" id="file-upload-two" />
            <label htmlFor="file-upload-two">
              <Button leftIcon={<FaUpload />} colorScheme="teal" as="span">
                Upload Image 2
              </Button>
            </label>
            {imageTwo && <Image src={imageTwo} alt="Uploaded Image 2" boxSize="200px" mt={4} style={{ filter: "grayscale(100%)" }} />}
          </Box>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;
