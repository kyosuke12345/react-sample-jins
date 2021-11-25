import { Typography, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Box } from "@mui/system";

type ImageLinkProps = {
  url: string;
  title?: string;
  href: string;
};

const ImageLink: React.VFC<ImageLinkProps> = ({ url, title, href }) => {
  return (
    <Box sx={{ position: "relative" }}>
      <Link component={RouterLink} to={href}>
        <img src={url} width="100%" height="auto" />
        {title && (
          <Typography
            sx={{
              position: "absolute",
              color: "white",
              fontWeight: "bold",
              fontSize: "1.8em",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              margin: 0,
              padding: 0,
            }}
          >
            {title}
          </Typography>
        )}
      </Link>
    </Box>
  );
};

export default ImageLink;
