import React from 'react'
import { observer,inject} from 'mobx-react'
import PropTypes from 'prop-types'
import {AppState} from '../../store/app-state';

@inject('appState')
@observer
export default class TopicList extends React.Component{
    constructor(props){
        super(props)
        this.changeName=this.changeName.bind(this)
    }
    componentDidMount(){
        //todo 
    }

    changeName (e)  {
        this.props.appState.changeName(e.target.value)
    }
    render(){
        return (
            <div>
                <input type="text" onChange={this.changeName} />
                <span>
                {this.props.appState.msg}
                </span>
            </div>
        )
    }
}

TopicList.propTypes = {
    appState:PropTypes.instanceOf(AppState)
}