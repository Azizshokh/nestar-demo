import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { NextPage } from "next";
import { useState } from "react";

const Community: NextPage = () => {
  console.log("COMMUNITY COMPONENT - PAGE ROUTER");
  const [title, setTitle] = useState<string>("Hello World!!!");
  return (
    <div>
      COMMUNITY{" "}
      <button onClick={() => alert("Hello MIT!!!")} style={{ margin: "15px" }}>
        PressMe
      </button>
    </div>
  );
};

export default withLayoutBasic(Community);
