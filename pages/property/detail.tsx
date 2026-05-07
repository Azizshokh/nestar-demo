import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import { Container, Stack } from "@mui/material";

const PropertyDetail = () => {
  const device = useDeviceDetect();
  if (device === "mobile") {
    return <Stack>Property Detail Mobile</Stack>;
  } else {
    console.log("PROPERTYDETAIL COMPONENT - PAGES ROUTER");
    return <Container>PROPERTY DETAIL</Container>;
  }
};

export default withLayoutBasic(PropertyDetail);
