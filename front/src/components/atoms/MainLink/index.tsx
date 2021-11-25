import { Box, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

type MainLinkProps = {
  href: string;
  title: string;
};

const MainLink: React.VFC<MainLinkProps> = ({ title, href }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
      <Link
        component={RouterLink}
        to={href}
        sx={{ color: "#9d9d9d", textDecoration: "none" }}
      >
        <Typography component="span">{title}</Typography>
        <ChevronRightIcon
          sx={{ display: "inline-flex", verticalAlign: "text-top" }}
        />
      </Link>
    </Box>
  );
};

export default MainLink;
