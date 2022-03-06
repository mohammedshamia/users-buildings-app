import {
  ActionsType,
  AddItem,
  AddItemActionSuccess,
  DeleteItemActionSuccess,
  EditItemActionSuccess,
  ListConstants,
} from "./constants";
import { Dispatch } from "redux";
import { User } from "../../@types/user";
import { sleep } from "../../utils/helpers";
import { users } from "../../assets/data";

export const getItems =
  (): ((dispatch: Dispatch<ActionsType>) => Promise<void>) =>
  async (dispatch: Dispatch<ActionsType>) => {
    dispatch({
      type: ListConstants.GET_LIST_ITEMS_START,
    });

    const listFromLocalStorage = localStorage.getItem("usersList");

    if (!listFromLocalStorage) {
      localStorage.setItem("usersList", JSON.stringify(users));
    }

    const items = JSON.parse(localStorage.getItem("usersList") as string);

    sleep({
      cb: () => {
        dispatch({
          type: ListConstants.GET_LIST_ITEMS_SUCCESS,
          payload: items,
        });
      },
      time: 1500,
    });
  };

export const addItemAction =
  (value: AddItem): ((dispatch: Dispatch<ActionsType>) => Promise<void>) =>
  async (dispatch: Dispatch<ActionsType>) => {
    dispatch({
      type: ListConstants.ADD_ITEM_START,
    });

    sleep({
      cb: () => {
        dispatch({
          type: ListConstants.ADD_ITEM_SUCCESS,
          payload: value,
        });
      },
      time: 1500,
    });
  };

export const editItemAction =
  (value: AddItem): ((dispatch: Dispatch<ActionsType>) => Promise<void>) =>
  async (dispatch: Dispatch<ActionsType>) => {
    dispatch({
      type: ListConstants.EDIT_ITEM_START,
    });

    sleep({
      cb: () => {
        dispatch({
          type: ListConstants.EDIT_ITEM_SUCCESS,
          payload: value,
        });
      },
      time: 1500,
    });
  };

export const deleteItemAction =
  (value: AddItem): ((dispatch: Dispatch<ActionsType>) => Promise<void>) =>
  async (dispatch: Dispatch<ActionsType>) => {
    dispatch({
      type: ListConstants.DELETE_ITEM_START,
    });

    sleep({
      cb: () => {
        dispatch({
          type: ListConstants.DELETE_ITEM_SUCCESS,
          payload: value,
        });
      },
      time: 1500,
    });
  };

export const handleAddedItem = (
  list: User[],
  action: AddItemActionSuccess
): User[] => {
  const users = list.map((user: User) =>
    user.id === action.payload.userId
      ? {
          ...user,
          buildingList: [...user.buildingList, action.payload.building],
        }
      : user
  );

  localStorage.setItem("usersList", JSON.stringify(users));
  return users;
};

export const handleEditedItem = (
  list: User[],
  action: EditItemActionSuccess
): User[] => {
  const users = list.map((user: User) =>
    user.id === action.payload.userId
      ? {
          ...user,
          buildingList: user.buildingList.map((item) =>
            item.id === action.payload.building.id
              ? action.payload.building
              : item
          ),
        }
      : user
  );

  localStorage.setItem("usersList", JSON.stringify(users));
  return users;
};

export const handleDeletedItem = (
  list: User[],
  action: DeleteItemActionSuccess
): User[] => {
  const users = list.map((user: User) =>
    user.id === action.payload.userId
      ? {
          ...user,
          buildingList: user.buildingList.filter(
            (item) => item.id !== action.payload.building.id
          ),
        }
      : user
  );

  localStorage.setItem("usersList", JSON.stringify(users));
  return users;
};
