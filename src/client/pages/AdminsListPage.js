import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {fetchDone, fetchTasks,FETCH_TASKS } from '../actions';
import requireAuth from '../components/hocs/requireAuth';
import Merger from './Merger';
import  Add  from './Add';
import axios from 'axios';

const AdminsListPage = ({done, tasks, fetchTasks, fetchDone }) => {
  useEffect(() => {
    fetchTasks();
    fetchDone();
  }, [fetchTasks,fetchDone]);

 /* const renderAdmins = () => {
    return tasks.map(task => {
      console.log("from page "+ JSON.stringify(task))
      return <li key={task._id}>{task.description}</li>;
    });
  }; */


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
