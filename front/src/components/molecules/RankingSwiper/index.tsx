// import { Swiper, SwiperSlide } from "swiper/react";
import {
  Avatar,
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { StandardCSSProperties } from "@mui/system";
import { Swiper, SwiperSlide } from "swiper/react";
import { yellow, grey } from "@mui/material/colors";
import { moneyFormat } from "utils/string";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

export type RankingSwiperItem = {
  href: string;
  imageUrl: string;
  rank: number;
  price: number;
};

export type RankingSwiperProps = {
  items: RankingSwiperItem[];
};

function getRankColor(rank: number): StandardCSSProperties["backgroundColor"] {
  if (rank === 1) {
    return yellow[500];
  } else {
    return grey[500];
  }
}

const RankingSwiper: React.FC<RankingSwiperProps> = ({ items }) => {
  return (
    <>
      <Swiper slidesPerView={3} spaceBetween={30}>
        {items.map((item, index) => (
          <SwiperSlide>
            <Card key={index} sx={{ boxShadow: "none" }}>
              {item.rank && (
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  p={2}
                >
                  <Avatar sx={{ bgcolor: getRankColor(item.rank) }}>
                    {item.rank}
                  </Avatar>
                </Box>
              )}
              <CardMedia component="img" image={item.imageUrl} />
              <CardContent>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  p={2}
                >
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontWeight: "bold" }}
                  >
                    {moneyFormat(item.price)}
                  </Typography>{" "}
                </Box>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default RankingSwiper;
