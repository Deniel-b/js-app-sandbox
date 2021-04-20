<<<<<<< HEAD
import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-native';

import {useEffect} from 'react'

const SecondPage = () => {
    console.log("Second")
    useEffect(() => {

    }, []);
    return(
        <PageWrap>
            <ContentWrap>
                <Link to="/">
                    <ButtonWrap>
                        
                    </ButtonWrap>
                </Link>
            </ContentWrap>
        </PageWrap>
    );
}


const PageWrap = styled.View`
  width: 100%;
  height: 700px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`;

const ContentWrap = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`;

const ButtonWrap = styled.View`
    background-color: green;
    height: 100px;
    width: 100px;
`

export default SecondPage;




=======
import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-native';

import {useEffect} from 'react'

const SecondPage = () => {
    console.log("Second")
    useEffect(() => {

    }, []);
    return(
        <PageWrap>
            <ContentWrap>
                <Link to="/">
                    <ButtonWrap>
                        
                    </ButtonWrap>
                </Link>
            </ContentWrap>
        </PageWrap>
    );
}


const PageWrap = styled.View`
  width: 100%;
  height: 700px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`;

const ContentWrap = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`;

const ButtonWrap = styled.View`
    background-color: green;
    height: 100px;
    width: 100px;
`

export default SecondPage;




>>>>>>> 6a6a2a3651340f88f966328b46fa107b06b202a4
