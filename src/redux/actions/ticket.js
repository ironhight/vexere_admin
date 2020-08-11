import api from "../../api";
import * as types from "../constants/actionTypes";

export const getAll = () => async (dispatch) => {
  try {
    const ticket = await api.get("tickets/all");
    dispatch({ type: types.GET_ALL_TICKET, payload: ticket.data });
  } catch (error) {
    console.error(error);
  }
};

export const deleteById = (id) => async (dispatch) => {
  try {
    const ticket = await api.delete(`tickets/delete/${id}`)
    dispatch({type: types.DELETE_TICKET, payload: ticket.data})
  } catch (error) {
    console.error(error)
  }
}