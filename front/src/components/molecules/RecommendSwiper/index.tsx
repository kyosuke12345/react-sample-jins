import { Box, Card, CardMedia, CardContent, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { moneyFormat } from "utils/string";

type RecommendSwiperItem = {
  imageUrl: string;
  price: number;
  href: string;
};

type RecommendSwiperProps = {
  items: RecommendSwiperItem[];
};

const RecommendSwiper: React.FC<RecommendSwiperProps> = ({ items }) => {
  return (
    <Swiper slidesPerView={3} spaceBetween={30} loop>
      {items.map((item, index) => (
        <SwiperSlide>
          <Card key={index} sx={{ boxShadow: "none" }}>
            <CardMedia
              component="img"
              image={item.imageUrl}
              height="182"
              width="326"
            />
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
  );
};

export default RecommendSwiper;
