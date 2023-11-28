import { useRouter } from "next/router";

export const FeatureDetail = () => {
  const router = useRouter();
  const { feature } = router.query;
  return <p>Post: {feature}</p>;
};
