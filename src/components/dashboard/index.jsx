import React from 'react'
import Notification from './Notification'
import ProjectList from '../project/ProjectList'
import { connect } from 'react-redux'

function index(props) {
  // console.log(props);
  const projects = props;
  // console.log(projects)
  return (
    <div className="dashboard container">
        <div className="row">
            <div className="col s12 m6">
                <ProjectList projects={projects}/>
            </div>
            <div className="col s12 m5 offset-m1">
                <Notification/>
            </div>
        </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    projects: state.project.projects
  }
}

export default connect(mapStateToProps)(index)