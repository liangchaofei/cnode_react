import React from 'react';
import { Route,Redirect } from 'react-router-dom';
import ToplicList from '../views/topic-list/index.jsx'
import TopicDetail from '../views/topic-detail/index.jsx'



export default () => [
    <Route path="/" render={()=><Redirect to='/list' />} key='first'  exact />,
    <Route path="/list" component={ToplicList}  key='list' />,
    <Route path="/detail" component={TopicDetail} key='detail'  />
]