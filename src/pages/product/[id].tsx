import { NextPage } from "next";
import { GetServerSideProps } from "next";
import { fetchProduct } from "../../utils/hannants";
import { Product } from "../../../types";
import { Image } from "@chakra-ui/image";
import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/layout";

const ProductPage: NextPage<Props> = ({ product }) => {
  console.log(product[0].brand);
  return (
    <>
      <Flex maxW="700px" h="80%">
        <VStack
          border="2px solid white"
          borderRadius="10px"
          p="5%"
          m="10%"
          h="800px"
        >
          <Image alt={product[0].id} src={product[0].img} maxH="60%"></Image>
          <Text>
            {product[0].brand} {product[0].scale} {product[0].name}
          </Text>
          <Text>£{product[0].price}</Text>
          <Text> {product[0].ourPrice}</Text>
        </VStack>
      </Flex>
    </>
  );
};
type Props = {
  product: Product[];
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const productCode = context.query.id?.toString();
  //const res = await fetch(`http://localhost:3000/api/trainer/${trainerName}`);
  const res = await fetchProduct(`${productCode}`);
  const product = res;

  return { props: { product } };
};
export default ProductPage;
