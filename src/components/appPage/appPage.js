<<<<<<< HEAD
import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-native';

import { FirstPage } from '../pages';
import { SecondPage } from '../pages';



const AppPage = (props) => {
  return (
    <Wrapper>
      <Switch>
        <Route exact path="/" render={() => <FirstPage socket={props.socket}/>}/>  
        <Route path="/second" render={() => <SecondPage socket={props.socket}/>} />
      </Switch>
    </Wrapper>
  )
}

const Wrapper = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  background-color: #F3F3F3;
  height: 100%;
`;

=======
import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-native';

import { FirstPage } from '../pages';
import { SecondPage } from '../pages';



const AppPage = (props) => {
  return (
    <Wrapper>
      <Switch>
        <Route exact path="/" render={() => <FirstPage/>}/>  
        <Route path="/second" render={() => <SecondPage socket={props.socket}/>} />
      </Switch>
    </Wrapper>
  )
}

const Wrapper = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  background-color: #F3F3F3;
  height: 100%;
`;

>>>>>>> 6a6a2a3651340f88f966328b46fa107b06b202a4
export default AppPage;