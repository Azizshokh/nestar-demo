import { Stack } from "@mui/material";

const TopAgentCard = () => {
  return (
    <Stack className={"top-agent-card"}>
      <img src="/img/profile/girl.svg" alt="agent" />
      <strong>Annie</strong>
      <span>AGENT</span>
    </Stack>
  );
};

export default TopAgentCard;
