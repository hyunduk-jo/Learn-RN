import React from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
`;

const FollowBtn = styled.TouchableOpacity`
  background-color: tomato;
  justify-content: center;
  border-radius: 4px;
  padding: 4px 7px;
`;

const FollowBtnText = styled.Text`
  color: white;
  font-weight: bold;
`;

const Column = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: wheat;
  margin-right: 10px;
`;

const Username = styled.Text`
  color: white;
  font-weight: bold;
`;

export default function UserRow({ id, avatar, userName, isFollowing, isMe }) {
  console.log(userName)
  const navigation = useNavigation();
  return <Wrapper>
    <Column onPress={() => navigation.navigate("Profile", {
      userName,
      id
    })}>
      <Avatar source={{ uri: avatar }} />
      <Username>{userName}</Username>
    </Column>
    {!isMe ? (
      <FollowBtn>
        <FollowBtnText>
          {isFollowing ? "Unfollow" : "Follow"}
        </FollowBtnText>
      </FollowBtn>
    ) : null}
  </Wrapper>
}