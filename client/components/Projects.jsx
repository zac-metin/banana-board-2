import {connect} from 'react-redux'
import React from 'react'
import {Link} from 'react-router-dom'

const Projects = (props) => {
  return(

    <div className='all-projects'>
{props.projects.map((project,id) => <Link to={'/tasks'} className="project-name"> <div>hello</div>
</Link>
)}
    </div>
  )
}




const mapStateToProps = (state) => {
  return {
    projects: state.projects
  }
}

export default connect(
  mapStateToProps
)(Projects)
