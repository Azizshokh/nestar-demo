import React, { useState } from "react";
import {
  Stack,
  Typography,
  Checkbox,
  Button,
  OutlinedInput,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Tooltip,
  IconButton,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import { propertySquare } from "@/libs/config";

const roomOptions = ["Any", "1", "2", "3", "4", "5+"];

const Filter = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [showMore, setShowMore] = useState<boolean>(false);
  const [selectedRooms, setSelectedRooms] = useState<string>("Any");
  const [selectedBedrooms, setSelectedBedrooms] = useState<string>("Any");
  const [propertyPrice, setPropertyPrice] = useState<{
    start: number;
    end: number;
  }>({
    start: 0,
    end: 250000,
  });

  return (
    <Stack className={"filter-main"}>
      <Stack className={"find-your-home"} mb={"40px"}>
        <Typography className={"title-main"}>Find Your Home</Typography>

        <Stack className={"input-box"}>
          <OutlinedInput
            value={searchText}
            type="text"
            className={"search-input"}
            placeholder={"What are you looking?"}
            onChange={(e: any) => setSearchText(e.target.value)}
          />

          <img src={"/img/icons/search_icon.png"} alt={""} />

          <Tooltip title="Reset">
            <IconButton>
              <RefreshIcon />
            </IconButton>
          </Tooltip>
        </Stack>
      </Stack>

      <Stack className={"find-your-home"} mb={"30px"}>
        <p className={"title"} style={{ textShadow: "0px 3px 4px #b9b9b9" }}>
          Location
        </p>

        <Stack
          className={"property-location"}
          style={{ height: showMore ? "253px" : "115px" }}
        >
          {["SEOUL", "BUSAN", "DAEGU"].map((location: string) => (
            <Stack className={"input-box"} key={location}>
              <Checkbox
                id={location}
                className="property-checkbox"
                color="default"
                size="small"
                value={location}
              />
              <label htmlFor={location} style={{ cursor: "pointer" }}>
                <Typography className="property-type">{location}</Typography>
              </label>
            </Stack>
          ))}
        </Stack>

        <Button
          onClick={() => setShowMore((prev) => !prev)}
          sx={{ alignSelf: "flex-start", mt: "8px", fontSize: "12px" }}
        >
          {showMore ? "Show Less" : "Show More"}
        </Button>
      </Stack>

      <Stack className={"find-your-home"} mb={"30px"}>
        <Typography className={"title"}>Property Type</Typography>

        {["APARTMENT", "HOUSE", "VILLA"].map((type: string) => (
          <Stack className={"input-box"} key={type}>
            <Checkbox
              id={type}
              className="property-checkbox"
              color="default"
              size="small"
              value={type}
            />
            <label htmlFor={type} style={{ cursor: "pointer" }}>
              <Typography className="property-type">{type}</Typography>
            </label>
          </Stack>
        ))}
      </Stack>

      <Stack className={"find-your-home"} mb={"30px"}>
        <Typography className={"title"}>Rooms</Typography>

        <Stack className={"button-group"}>
          {roomOptions.map((room, index) => (
            <Button
              key={room}
              onClick={() => setSelectedRooms(room)}
              sx={{
                borderRadius:
                  index === 0
                    ? "12px 0 0 12px"
                    : index === roomOptions.length - 1
                      ? "0 12px 12px 0"
                      : 0,
                border:
                  selectedRooms === room
                    ? "2px solid #181A20"
                    : "1px solid #b9b9b9",
              }}
            >
              {room}
            </Button>
          ))}
        </Stack>
      </Stack>

      <Stack className={"find-your-home"} mb={"30px"}>
        <Typography className={"title"}>Bedrooms</Typography>

        <Stack className={"button-group"}>
          {roomOptions.map((room, index) => (
            <Button
              key={room}
              onClick={() => setSelectedBedrooms(room)}
              sx={{
                borderRadius:
                  index === 0
                    ? "12px 0 0 12px"
                    : index === roomOptions.length - 1
                      ? "0 12px 12px 0"
                      : 0,
                border:
                  selectedBedrooms === room
                    ? "2px solid #181A20"
                    : "1px solid #b9b9b9",
              }}
            >
              {room}
            </Button>
          ))}
        </Stack>
      </Stack>

      <Stack className={"find-your-home"} mb={"30px"}>
        <Typography className={"title"}>Options</Typography>

        <Stack className={"input-box"}>
          <Checkbox
            id={"Barter"}
            className="property-checkbox"
            color="default"
            size="small"
            value={"propertyBarter"}
          />
          <label htmlFor={"Barter"} style={{ cursor: "pointer" }}>
            <Typography className="property-type">Barter</Typography>
          </label>
        </Stack>

        <Stack className={"input-box"}>
          <Checkbox
            id={"Rent"}
            className="property-checkbox"
            color="default"
            size="small"
            value={"propertyRent"}
          />
          <label htmlFor={"Rent"} style={{ cursor: "pointer" }}>
            <Typography className="property-type">Rent</Typography>
          </label>
        </Stack>
      </Stack>

      <Stack className={"find-your-home"} mb={"30px"}>
        <Typography className={"title"}>Square meter</Typography>

        <Stack className={"square-year-input"}>
          <FormControl>
            <InputLabel id="square-min-label">Min</InputLabel>
            <Select
              labelId="square-min-label"
              id="square-min-select"
              value={0}
              label="Min"
            >
              {propertySquare.map((square: number) => (
                <MenuItem value={square} key={square}>
                  {square}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <div className="central-divider"></div>

          <FormControl>
            <InputLabel id="square-max-label">Max</InputLabel>
            <Select
              labelId="square-max-label"
              id="square-max-select"
              value={500}
              label="Max"
            >
              {propertySquare.map((square: number) => (
                <MenuItem value={square} key={square}>
                  {square}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>
      </Stack>

      <Stack className={"find-your-home"}>
        <Typography className={"title"}>Price Range</Typography>

        <Stack className={"square-year-input"}>
          <input
            type="number"
            placeholder={"$ min"}
            min={0}
            value={propertyPrice.start}
            onChange={(e: any) => {
              const value = Number(e.target.value);
              if (value >= 0) {
                setPropertyPrice({ ...propertyPrice, start: value });
              }
            }}
          />

          <div className="central-divider"></div>

          <input
            type="number"
            placeholder={"$ max"}
            value={propertyPrice.end}
            onChange={(e: any) => {
              const value = Number(e.target.value);
              if (value >= 0) {
                setPropertyPrice({ ...propertyPrice, end: value });
              }
            }}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Filter;
