<<<<<<< HEAD
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-native';
import { TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import SecondPage from './secondPage';






const FirstPage = ({socket}) => {
  return (
    <PageWrapper>
      <ContentWrapper>
        <TouchableOpacity onPress={() => {socket.connect(); socket.send("hello")}}>
         <BtnWrapper>

         </BtnWrapper>
        </TouchableOpacity>
      </ContentWrapper>
    </PageWrapper>
  )
}

const PageWrapper = styled.View`
  width: 100%;
  height: 700px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`;

const ContentWrapper = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`;

const BtnWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background-color: #79CF77;
  margin-bottom: ${props => props.last ? 0 : "80px"};
`;

const BtnValue = styled.Text`
  color: #FFFFFF;
  font-size: 24px;
  line-height: 24px;
`;

const TextOr = styled.Text`
  color: #000000;
  font-size: 36px;
  line-height: 36px;
  margin-bottom: 80px;
  text-align: center;
`;

=======
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-native';






const FirstPage = () => {
  return (
    <PageWrapper>
      <ContentWrapper>
        <Link to="/second" >
          <BtnWrapper styled={{backgroundColor: "#79CF77"}} >
              
          </BtnWrapper>
        </Link>
      </ContentWrapper>
    </PageWrapper>
  )
}

const PageWrapper = styled.View`
  width: 100%;
  height: 700px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`;

const ContentWrapper = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`;

const BtnWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background-color: #79CF77;
  margin-bottom: ${props => props.last ? 0 : "80px"};
`;

const BtnValue = styled.Text`
  color: #FFFFFF;
  font-size: 24px;
  line-height: 24px;
`;

const TextOr = styled.Text`
  color: #000000;
  font-size: 36px;
  line-height: 36px;
  margin-bottom: 80px;
  text-align: center;
`;

>>>>>>> 6a6a2a3651340f88f966328b46fa107b06b202a4
export default FirstPage;