import { NextPage } from "next";
import { GetServerSideProps } from "next";
import { fetchProduct } from "../../utils/hannants";
import { Product } from "../../../types";
import ProductContainer from "../../components/ProductContainer";

const ProductPage: NextPage<Props> = ({ product }) => {
  return (
    <>
      <ProductContainer product={product} />
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
