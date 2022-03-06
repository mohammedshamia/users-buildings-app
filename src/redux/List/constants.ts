import { Building, User } from "../../@types/user";

export enum ListConstants {
  ADD_ITEM_START = "ADD_ITEM_START",
  ADD_ITEM_SUCCESS = "ADD_ITEM_SUCCESS",

  EDIT_ITEM_START = "EDIT_ITEM_START",
  EDIT_ITEM_SUCCESS = "EDIT_ITEM_SUCCESS",

  DELETE_ITEM_START = "DELETE_ITEM_START",
  DELETE_ITEM_SUCCESS = "DELETE_ITEM_SUCCESS",

  GET_LIST_ITEMS_START = "GET_LIST_ITEMS_START",
  GET_LIST_ITEMS_SUCCESS = "GET_LIST_ITEMS_SUCCESS",
}

export interface AddItem {
  userId: string;
  building: Building;
}
export interface IState {
  isLoading: boolean;
  list: User[];
}

export interface GetItemsListStartAction {
  type: ListConstants.GET_LIST_ITEMS_START;
}

export interface GetItemsListSuccessAction {
  type: ListConstants.GET_LIST_ITEMS_SUCCESS;
  payload: User[];
}

export interface AddItemActionStart {
  type: ListConstants.ADD_ITEM_START;
}

export interface AddItemActionSuccess {
  type: ListConstants.ADD_ITEM_SUCCESS;
  payload: AddItem;
}

export interface EditItemActionStart {
  type: ListConstants.EDIT_ITEM_START;
}

export interface EditItemActionSuccess {
  type: ListConstants.EDIT_ITEM_SUCCESS;
  payload: AddItem;
}

export interface DeleteItemActionStart {
  type: ListConstants.DELETE_ITEM_START;
}

export interface DeleteItemActionSuccess {
  type: ListConstants.DELETE_ITEM_SUCCESS;
  payload: AddItem;
}

export type ActionsType =
  | AddItemActionStart
  | AddItemActionSuccess
  | EditItemActionStart
  | EditItemActionSuccess
  | DeleteItemActionStart
  | DeleteItemActionSuccess
  | GetItemsListStartAction
  | GetItemsListSuccessAction;
