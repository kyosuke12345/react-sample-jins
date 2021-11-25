import {
  AppBar,
  IconButton,
  Toolbar,
  Link,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Grid,
  GridSize,
  Divider,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import { useMemo, useState } from "react";
import useMobile from "hooks/useMobile";
import CloseIcon from "@mui/icons-material/Close";
import HeaderLink from "components/atoms/HeaderLink/index";

const DRAWER_LIST: {
  label: string;
  href: string;
  sm: GridSize;
  isDivider: boolean;
}[] = [
  { label: "マイページ", href: "#", sm: 12, isDivider: false },
  { label: "ログイン／新規会員登録", href: "#", sm: 12, isDivider: true },
  { label: "コレクション", href: "#", sm: 12, isDivider: false },
  { label: "メガネ", href: "#", sm: 12, isDivider: true },
  { label: "MEN", href: "#", sm: 6, isDivider: true },
  { label: "WOMEN", href: "#", sm: 6, isDivider: true },
  { label: "老眼鏡", href: "#", sm: 6, isDivider: true },
  { label: "キッズ", href: "#", sm: 6, isDivider: true },
  { label: "サングラス", href: "#", sm: 12, isDivider: true },
  { label: "レンズ", href: "#", sm: 12, isDivider: true },
  { label: "オプションレンズ", href: "#", sm: 6, isDivider: true },
  { label: "コンタクトレンズ", href: "#", sm: 6, isDivider: true },
  { label: "店舗検索", href: "#", sm: 12, isDivider: true },
  { label: "オンラインショップについて", href: "#", sm: 12, isDivider: false },
  { label: "お問い合わせ", href: "#", sm: 12, isDivider: false },
];

const Header: React.FC = () => {
  const isMobile = useMobile();
  const [open, setOpen] = useState(false);

  const drawer = useMemo(() => {
    return (
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <List>
          <Grid container p={2}>
            <Grid container item sm={12} justifyContent="flex-end">
              <IconButton onClick={() => setOpen(false)}>
                <CloseIcon />
              </IconButton>
            </Grid>
            {DRAWER_LIST.map((item, index) => (
              <Grid
                item
                sm={item.sm}
                key={index}
                sx={{ paddingLeft: item.sm !== 12 ? 2 : undefined }}
              >
                <ListItem button href={item.href}>
                  <ListItemText>{item.label}</ListItemText>
                </ListItem>
                {item.isDivider && <Divider />}
              </Grid>
            ))}
          </Grid>
        </List>
      </Drawer>
    );
  }, [open, setOpen]);

  const icons = useMemo(() => {
    return (
      <>
        {!isMobile && <Link href="#">店舗検索</Link>}
        <IconButton href="#">
          <SearchIcon />
        </IconButton>
        <IconButton href="#">
          <FavoriteBorderIcon />
        </IconButton>
        <IconButton href="#">
          <AccountCircleIcon />
        </IconButton>
        <IconButton href="#">
          <ShoppingCartIcon />
        </IconButton>
      </>
    );
  }, [isMobile]);

  return (
    <>
      <AppBar sx={{ backgroundColor: "white" }}>
        <Toolbar
          sx={{ justifyContent: isMobile ? "space-between" : undefined }}
        >
          {isMobile ? (
            <>
              <Box>
                <IconButton onClick={() => setOpen(true)}>
                  <MenuIcon />
                </IconButton>
              </Box>
              <Box>
                <img src="/image/logo.png" style={{ width: 90, height: 30 }} />
              </Box>
              <Box>{icons}</Box>
              {drawer}
            </>
          ) : (
            <>
              <img
                src="/image/logo.png"
                style={{ width: 90, height: 30, marginRight: 16 }}
              />
              <Box
                sx={{
                  "& > :not(:first-child)": {
                    ml: 2,
                  },
                }}
              >
                <HeaderLink href="#" title="コレクション" />
                <HeaderLink href="#" title="商品検索" />
                <HeaderLink href="#" title="レンズ" />
                <HeaderLink href="#" title="オンラインショップについて" />
                <HeaderLink href="#" title="コンタクトレンズ" />
              </Box>
              <Box sx={{ flexGrow: 1 }} />
              {icons}
            </>
          )}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default Header;
