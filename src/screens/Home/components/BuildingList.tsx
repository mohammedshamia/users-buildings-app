import { Building, User } from "../../../@types/user";
import ListItem from "./ListItem";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AppState } from "../../../redux/store";
import { ActionsType } from "../../../redux/List/constants";
import { deleteItemAction } from "../../../redux/List/actions";
import { useState } from "react";
import ConfirmationDialog from "../../../components/ConfirmationDialog";

interface IProps {
  user: User;
  handleSelectBuilding: (value: Building) => void;
  handleEditBuilding: (value: Building) => void;
  selectedBuilding: Building | undefined;
}
function BuildingList(props: IProps) {
  const dispatch = useDispatch<ThunkDispatch<AppState, any, ActionsType>>();
  const [open, setOpen] = useState<boolean>(false);
  const [itemTobeDeleted, setItemTobeDeleted] = useState<Building | null>(null);

  const handleDelete = async () => {
    if (itemTobeDeleted)
      await dispatch(
        deleteItemAction({
          building: itemTobeDeleted,
          userId: props.user.id,
        })
      );
    setOpen(false);
  };

  const handleOpenDialog = (building: Building) => {
    setOpen(true);
    setItemTobeDeleted(building);
  };

  return (
    <>
      {props.user.buildingList.map((building) => (
        <ListItem
          handleDelete={handleOpenDialog}
          userId={props.user.id}
          key={building.id}
          handleSelectBuilding={props.handleSelectBuilding}
          handleEditBuilding={props.handleEditBuilding}
          building={building}
          isSelected={props.selectedBuilding?.id === building.id}
        />
      ))}

      <ConfirmationDialog
        handleConfirm={handleDelete}
        open={open}
        setOpen={setOpen}
        title={"Confirm delete building"}
        content={"When you delete this item you cant return it back"}
      />
    </>
  );
}

export default BuildingList;
