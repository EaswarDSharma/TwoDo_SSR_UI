export const FETCH_CURRENT_USER = 'fetch_current_user';
export const fetchCurrentUser = () => async (dispatch, getState, api) => {
  const res = await api.get('http://localhost:3010/users/me');
 //console.log("payload is "+JSON.stringify(res))
  dispatch({
    type: FETCH_CURRENT_USER,
    payload: res
  });
};


export const CREATE_TASKS='create_tasks';
export const createTasks = (data) => async (dispatch, getState, api) => {
  dispatch({
    type: FETCH_TASKS,
    payload: res.data
  });
};

export const FETCH_TASKS = 'fetch_tasks';
export const fetchTasks = () => async (dispatch, getState, api) => {
  const res = await api.get('/tasks?completed=false&&sortBy=updatedAt:desc');
  console.log("FROM actions tasks")
  dispatch({
    type: FETCH_TASKS,
    payload: res.data
  });
};


export const FETCH_DONE = 'fetch_done';
export const fetchDone = () => async (dispatch, getState, api) => {
  const res = await api.get('/tasks?completed=true&&sortBy=updatedAt:desc');
  console.log("FROM actions done")
  dispatch({
    type: FETCH_DONE,
    payload: res.data
  });
};
