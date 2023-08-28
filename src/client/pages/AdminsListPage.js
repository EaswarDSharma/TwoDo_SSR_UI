import React, { useEffect ,lazy} from 'react';
import { connect } from 'react-redux';
import {fetchDone, fetchTasks,FETCH_TASKS } from '../actions';
import requireAuth from '../components/hocs/requireAuth';
import Merger from './Merger';

const AdminsListPage = ({done, tasks, fetchTasks, fetchDone }) => {
  useEffect(() => {
    fetchTasks();
    fetchDone();
  }, [fetchTasks,fetchDone]);

  return (
    <div>
      <Merger dataProp={{tasks,done}}/>
    </div>
  );
};

function mapStateToProps({ tasks,done }) {
  return { tasks , done };
}

export default {
  component: connect(mapStateToProps, { fetchTasks, fetchDone })(
    requireAuth(AdminsListPage)
  ),
  loadData: ({ dispatch }) => dispatch(fetchTasks(), fetchDone())
};
