import { Grid } from "@mui/material";
import ImageLink from "components/atoms/ImageLink/index";
import MainLink from "components/atoms/MainLink/index";
import MainTitle from "components/atoms/MainTitle/index";
import Header from "components/molecules/Header";
import RankingView from "./RankingView";

const features = [
  <ImageLink url={"/image/link_image_normal.png"} href="#" />,
  <ImageLink url={"/image/link_image_normal.png"} href="#" />,
  <ImageLink url={"/image/link_image_normal.png"} href="#" />,
  <ImageLink url={"/image/link_image_normal.png"} href="#" />,
  <ImageLink url={"/image/link_image_normal.png"} href="#" />,
  <ImageLink url={"/image/link_image_normal.png"} href="#" />,
  <ImageLink url={"/image/link_image_normal.png"} href="#" />,
  <ImageLink url={"/image/link_image_normal.png"} href="#" />,
];

const products = [
  <ImageLink
    url={"/image/link_image_small.png"}
    href="#"
    title={"JINS CLASSIC MEN"}
  />,
  <ImageLink
    url={"/image/link_image_small.png"}
    href="#"
    title={"JINS CLASSIC WOMEN"}
  />,
  <ImageLink
    url={"/image/link_image_small.png"}
    href="#"
    title={"FASHION FUNCTION"}
  />,
  <ImageLink
    url={"/image/link_image_small.png"}
    href="#"
    title={"Combination Slim Airframe"}
  />,
  <ImageLink
    url={"/image/link_image_small.png"}
    href="#"
    title={"JINS Switch"}
  />,
  <ImageLink url={"/image/link_image_small.png"} href="#" title={"JINS&SUN"} />,
  <ImageLink
    url={"/image/link_image_small.png"}
    href="#"
    title={"JINS SCREEN"}
  />,
  <ImageLink
    url={"/image/link_image_small.png"}
    href="#"
    title={"KIDS & JUNIOR"}
  />,
];

const rankingData = [
  {
    href: "#",
    imageUrl: "/image/ranking1.png",
    rank: 1,
    price: 10000,
  },
  {
    href: "#",
    imageUrl: "/image/ranking1.png",
    rank: 2,
    price: 11000,
  },
  {
    href: "#",
    imageUrl: "/image/ranking1.png",
    rank: 3,
    price: 13000,
  },
  {
    href: "#",
    imageUrl: "/image/ranking1.png",
    rank: 4,
    price: 15000,
  },
  {
    href: "#",
    imageUrl: "/image/ranking1.png",
    rank: 5,
    price: 15000,
  },
];

const MainScreen: React.FC = () => {
  return (
    <>
      <Header />
      <Grid container m={1} alignItems="center" justifyContent="center">
        <Grid item sm={12}>
          <ImageLink url={"/image/link_image_max.png"} href="#" />
        </Grid>
        <Grid item sm={12} sx={{ padding: 1 }}>
          <ImageLink url={"/image/link_image_horizon_long.png"} href="#" />
        </Grid>
        <Grid item sm={6} sx={{ padding: 1 }}>
          <ImageLink url={"/image/link_image_normal.png"} href="#" />
        </Grid>
        <Grid item sm={6} sx={{ padding: 1 }}>
          <ImageLink url={"/image/link_image_normal.png"} href="#" />
        </Grid>
        <Grid item sm={12}>
          <MainLink href="#" title={"WEBでメガネをもっと簡単に"} />
        </Grid>
        <Grid item sm={12} mt={2}>
          <MainTitle title={"特集"} titleE={"FEATURE"} />
        </Grid>
        {features.map((item) => (
          <Grid item sm={12} md={6} lg={6} sx={{ padding: 1 }}>
            {item}
          </Grid>
        ))}
        <Grid item sm={12} mt={1}>
          <MainTitle title={"商品"} titleE={"PRODUCTS"} />
        </Grid>
        <Grid item sm={12}>
          <ImageLink
            url={"/image/link_image_max.png"}
            href="#"
            title={"Airframe"}
          />
        </Grid>
        {products.map((item) => (
          <Grid item sm={6} md={3} sx={{ padding: 1 }}>
            {item}
          </Grid>
        ))}
        <Grid item sm={12} mt={1}>
          <MainTitle title={"ランキング"} titleE={"RANKING"} />
        </Grid>
        <Grid item sm={12}>
          <RankingView
            glassItems={{ items: rankingData }}
            sunGlassItems={{ items: rankingData }}
            menItems={{ items: rankingData }}
            womenItems={{ items: rankingData }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default MainScreen;
