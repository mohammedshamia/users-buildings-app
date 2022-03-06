import styles from "../style.module.css";
import { Typography } from "@material-ui/core";
import GridBox from "../../../components/GridBox";
import { Building } from "../../../@types/user";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

interface IProps {
  building: Building;
  handleSelectBuilding: (value: Building) => void;
  handleEditBuilding: (value: Building) => void;
  isSelected: boolean;
  userId: string;
  handleDelete: (building: Building) => void;
}

function ListItem(props: IProps) {
  const handleSelect = () => {
    props.handleSelectBuilding(props.building);
  };

  const handleEdit = () => {
    props.handleEditBuilding(props.building);
  };

  return (
    <GridBox
      justifyContent={"space-between"}
      alignItems={"flex-start"}
      item
      key={props.building.id}
      className={styles.listItem}
      direction={"row"}
    >
      <Typography
        onClick={handleSelect}
        variant="body1"
        gutterBottom
        className={`${styles.listItemTitle} ${
          props.isSelected && styles.selected
        }`}
      >
        {props.building.name}
      </Typography>

      <GridBox
        direction={"row"}
        md
        alignItems={"flex-end"}
        justifyContent={"flex-end"}
        item
      >
        <EditIcon className={styles.editIcon} onClick={handleEdit} />
        <DeleteIcon
          className={styles.deleteIcon}
          onClick={() => props.handleDelete(props.building)}
        />
      </GridBox>
    </GridBox>
  );
}

export default ListItem;
