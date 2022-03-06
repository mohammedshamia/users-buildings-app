import { ActionsType, IState, ListConstants } from "./constants";
import {
  handleAddedItem,
  handleDeletedItem,
  handleEditedItem,
} from "./actions";

export const listReducer = (
  initialState: IState = {
    isLoading: false,
    list: [],
  },
  action: ActionsType
): IState => {
  switch (action.type) {
    case ListConstants.GET_LIST_ITEMS_START:
      return {
        ...initialState,
        isLoading: true,
      };
    case ListConstants.GET_LIST_ITEMS_SUCCESS:
      return {
        ...initialState,
        isLoading: false,
        list: action.payload,
      };

    case ListConstants.ADD_ITEM_START:
      return {
        ...initialState,
        isLoading: true,
      };

    case ListConstants.ADD_ITEM_SUCCESS:
      return {
        ...initialState,
        isLoading: false,
        list: handleAddedItem(initialState.list, action),
      };

    case ListConstants.EDIT_ITEM_START:
      return {
        ...initialState,
        isLoading: true,
      };

    case ListConstants.EDIT_ITEM_SUCCESS:
      return {
        ...initialState,
        isLoading: false,
        list: handleEditedItem(initialState.list, action),
      };

    case ListConstants.DELETE_ITEM_START:
      return {
        ...initialState,
        isLoading: true,
      };

    case ListConstants.DELETE_ITEM_SUCCESS:
      return {
        ...initialState,
        isLoading: false,
        list: handleDeletedItem(initialState.list, action),
      };

    default:
      return initialState;
  }
};
