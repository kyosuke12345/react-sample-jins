import { Box, styled, Typography, TypographyTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import useMobile from "hooks/useMobile";

type MainTitleProps = {
  title: string;
  titleE: string;
};

const StyledTypography = styled<
  // eslint-why/tell-me-why からのpropsを渡す
  // eslint-disable-next-line @typescript-eslint/ban-types
  OverridableComponent<TypographyTypeMap<{}, "p">>
>(Typography)({
  color: "black",
  textAlign: "center",
});

const MainTitle: React.VFC<MainTitleProps> = ({ title, titleE }) => {
  const isMobile = useMobile();
  return (
    <Box>
      <StyledTypography sx={{ fontSize: isMobile ? "6.4vw" : "36px" }}>
        {titleE}
      </StyledTypography>
      <StyledTypography sx={{ fontSize: isMobile ? "2.667vw" : "14px" }}>
        {title}
      </StyledTypography>
    </Box>
  );
};

export default MainTitle;
