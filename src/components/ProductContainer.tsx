import { NextPage } from "next";
import { Product } from "../../types";
import { Image } from "@chakra-ui/image";
import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import { useState } from "react";

type Props = {
  product: Product[];
};

const ProductContainer: NextPage<Props> = ({ product }) => {
  const [imageToggle, setImageToggle] = useState(false);

  const toggleImages = () => {
    imageToggle ? setImageToggle(false) : setImageToggle(true);
  };
  return (
    <>
      <Flex m="auto" bg="grey" h="auto">
        <VStack
          border="2px solid white"
          borderRadius="10px"
          p="3px"
          m="auto"
          maxW="800px"
        >
          <Text>{product[0].id}</Text>
          <Image
            borderRadius="10px"
            alt={product[0].id}
            src={product[0].img}
            w="fit-content"
            maxW="400px"
          ></Image>
          {product[0].imgArr[0] && (
            <Button _hover={{ bg: "yellow" }} onClick={() => toggleImages()}>
              More Images
            </Button>
          )}
          {imageToggle && (
            <Image
              borderRadius="10px"
              alt={product[0].id}
              w="fit-content"
              maxW="400px"
              src={product[0].imgArr[0].img1}
            ></Image>
          )}

          <Text textAlign="center">
            {product[0].brand} {product[0].scale} {product[0].name}
          </Text>
          <Text>Stock Price: £{product[0].price}</Text>
          <Text>Our Price: {product[0].ourPrice}</Text>
          <Text>Stock: {product[0].stock}</Text>
          <Text>Type: {product[0].type}</Text>
          <Button
            _hover={{ bg: "yellow" }}
            onClick={() =>
              window.open(`https://hannants.co.uk/product/${product[0].id}`)
            }
          >
            Open in Hannants
          </Button>
        </VStack>
      </Flex>
    </>
  );
};
export default ProductContainer;
