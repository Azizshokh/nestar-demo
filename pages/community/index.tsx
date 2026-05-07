import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import { Stack } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";

const Community: NextPage = () => {
  console.log("COMMUNITY COMPONENT - PAGE ROUTER");
  const device = useDeviceDetect();
  const [title, setTitle] = useState<string>("Hello World!!!");

  if (device === "mobile") {
    return <Stack>Community Mobile</Stack>;
  } else {
    return (
      <div style={{ margin: "20px 0" }}>
        <Stack className="container">Community</Stack>
      </div>
    );
  }
};

export default withLayoutBasic(Community);
