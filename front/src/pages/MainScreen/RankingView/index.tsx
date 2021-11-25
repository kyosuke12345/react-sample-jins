import { Box, Tab, Tabs } from "@mui/material";
import RankingSwiper, {
  RankingSwiperProps,
} from "components/molecules/RankingSwiper";
import { useState } from "react";

const RANKING_TAB = {
  GLASS: 0,
  SUN_GLASS: 1,
  MEN: 2,
  WOMEN: 3,
} as const;

type Ranking = typeof RANKING_TAB[keyof typeof RANKING_TAB];

type RankingViewProps = {
  glassItems: RankingSwiperProps;
  sunGlassItems: RankingSwiperProps;
  menItems: RankingSwiperProps;
  womenItems: RankingSwiperProps;
};

const RankingView: React.VFC<RankingViewProps> = ({
  glassItems,
  sunGlassItems,
  menItems,
  womenItems,
}) => {
  const [tab, setTab] = useState<Ranking>(RANKING_TAB.GLASS);
  return (
    <>
      <Tabs
        onChange={(_, newValue: Ranking) => setTab(newValue)}
        centered
        value={tab}
        TabIndicatorProps={{
          style: {
            color: "#3e3a39",
            backgroundColor: "#3e3a39",
          },
        }}
      >
        <Tab value={RANKING_TAB.GLASS} label={"メガネ"} />
        <Tab value={RANKING_TAB.SUN_GLASS} label={"サングラス"} />
        <Tab value={RANKING_TAB.MEN} label={"MEN"} />
        <Tab value={RANKING_TAB.WOMEN} label={"WOMEN"} />
      </Tabs>
      <Box>
        {tab === RANKING_TAB.GLASS && (
          <RankingSwiper items={glassItems.items} />
        )}
        {tab === RANKING_TAB.SUN_GLASS && (
          <RankingSwiper items={sunGlassItems.items} />
        )}
        {tab === RANKING_TAB.MEN && <RankingSwiper items={menItems.items} />}
        {tab === RANKING_TAB.WOMEN && (
          <RankingSwiper items={womenItems.items} />
        )}
      </Box>
    </>
  );
};

export default RankingView;
