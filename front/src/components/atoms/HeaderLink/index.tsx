import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";

type HeaderLinkProps = {
  href: string;
  title: string;
  onClickLink?: () => void;
};

const HeaderLink: React.VFC<HeaderLinkProps> = ({
  title,
  href,
  onClickLink,
}) => {
  return (
    <Link
      component={RouterLink}
      to={href}
      onClick={() => {
        onClickLink?.();
      }}
      sx={{
        color: "#9d9d9d",
        position: "relative",
        textDecoration: "none",
        "::after": {
          position: "absolute",
          left: 0,
          content: '""',
          width: "100%",
          height: "2px",
          background: "#9d9d9d",
          bottom: "-1px",
          transform: "scale(0, 1)",
          transformOrigin: "center top",
          transition: "transform 0.3s",
        },
        ":hover": {
          "::after": {
            transform: "scale(1, 1)",
          },
        },
      }}
    >
      {title}
    </Link>
  );
};

export default HeaderLink;
