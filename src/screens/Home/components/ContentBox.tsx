import GridBox from "../../../components/GridBox";
import styles from "../style.module.css";
import { Typography } from "@material-ui/core";
import MapView from "../../../components/MapView";
import { useEffect, useState } from "react";
import { Building, User } from "../../../@types/user";
import BuildingList from "./BuildingList";
import { sleep } from "../../../utils/helpers";
import BuildingForm from "./Form";
import AddBoxIcon from "@mui/icons-material/AddBox";

interface IProps {
  user: User;
}

function ContentBox(props: IProps) {
  const [mapHidden, setMapHidden] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [selectedBuilding, setSelectedBuilding] = useState<
    Building | undefined
  >(undefined);

  const handleSelectBuilding = (building: Building, hidden = false) => {
    setSelectedBuilding(undefined);
    sleep({
      cb: () => {
        setSelectedBuilding(building);
        if (mapHidden) {
          setMapHidden(hidden);
        }
      },
      time: 700,
    });
  };

  const handleEditBuilding = (building: Building) => {
    handleSelectBuilding(building, true);
    setMapHidden(true);
    setIsEditing(true);
  };

  const handleAddBuilding = () => {
    setMapHidden(true);
    setIsEditing(false);
  };

  useEffect(() => {
    setSelectedBuilding(undefined);
    if (props.user.buildingList.length) {
      setMapHidden(false);
    } else setMapHidden(true);
    sleep({
      cb: () => {
        setSelectedBuilding(props.user.buildingList[0]);
      },
      time: 500,
    });
  }, [props.user.buildingList, props.user.id]);

  return (
    <GridBox
      justifyContent={"space-evenly"}
      direction={"row"}
      className={styles.contentContainer}
    >
      <GridBox
        item
        className={styles.contentItem}
        xs={3}
        justifyContent={"flex-start"}
        alignItems={"flex-start"}
      >
        <GridBox
          justifyContent={"space-between"}
          alignItems={"flex-start"}
          item
          className={styles.listItem}
          direction={"row"}
        >
          <Typography
            variant="subtitle1"
            gutterBottom
            className={styles.contentTitle}
          >
            Buildings
          </Typography>
          <AddBoxIcon onClick={handleAddBuilding} className={styles.addIcon} />
        </GridBox>
        <BuildingList
          handleSelectBuilding={handleSelectBuilding}
          handleEditBuilding={handleEditBuilding}
          user={props.user}
          selectedBuilding={selectedBuilding}
        />
      </GridBox>
      <GridBox
        item
        className={`${styles.contentItem} ${styles.mapView}`}
        xs={8}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {!mapHidden ? (
          <MapView building={selectedBuilding} />
        ) : (
          <BuildingForm
            loading={isEditing && !selectedBuilding}
            isEditing={isEditing}
            building={selectedBuilding}
            userId={props.user.id}
          />
        )}
      </GridBox>
    </GridBox>
  );
}

export default ContentBox;
