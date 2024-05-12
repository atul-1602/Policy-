export const LOAD_DATA_SUCCESS = 'LOAD_DATA_SUCCESS';

export const loadDataSuccess = (data) => ({
  type: LOAD_DATA_SUCCESS,
  payload: data,
});
