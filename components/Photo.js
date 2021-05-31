import React, { useState } from 'react';
import { useEffect } from 'react';
import { Image, TouchableOpacity, useWindowDimensions } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { gql, useMutation } from '@apollo/client';

const Container = styled.View`
`;

const Header = styled.TouchableOpacity`
  padding: 10px;
  flex-direction: row;
  align-items: center;
`;

const UserAvatar = styled.Image`
  margin-right: 10px;
  width: 30px;
  height: 30px;
  border-radius: 15px;
`;

const Username = styled.Text`
  color: white;
  font-weight: bold;
`;

const File = styled.Image``;

const Actions = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Action = styled.TouchableOpacity`
  margin-right: 10px;
`;

const Likes = styled.Text`
  color: white;
  margin: 7px 0px;
  font-weight: bold;
`;

const Caption = styled.View`
  flex-direction: row;
`;

const CaptionText = styled.Text`
  color: white;
  margin-left: 5px;
`;

const ExtractContainer = styled.View`
  padding: 10px;
`;

const LIKE_MUTATION = gql`
  mutation toggleLike($photoId: Int!){
    toggleLike(photoId: $photoId){
      ok,
      error
    }
  }
`;

export default function Photo({ id, user, caption, file, isLiked, likes }) {
  const updateLike = (cache, result) => {
    const { data: { toggleLike: { ok } } } = result;
    if (ok) {
      cache.modify({
        id: `Photo:${id}`,
        fields: {
          isLiked(prev) {
            return !prev
          },
          likes(prev) {
            if (isLiked) {
              return prev - 1
            } else {
              return prev + 1
            }
          }
        }
      })
    }
  }

  const [toggleLikeMutation] = useMutation(LIKE_MUTATION, { update: updateLike });

  const pressLike = async () => {
    await toggleLikeMutation({ variables: { photoId: id } })
  }

  const navigation = useNavigation();
  const { width, height } = useWindowDimensions();
  const [imageHeight, setImageHeight] = useState(height - 450);
  useEffect(() => {
    Image.getSize(file, (width, height) => {
      setImageHeight(height);
    })
  }, [file])
  return <Container>
    <Header onPress={() => navigation.navigate("Profile", {
      userName: user.userName,
      id: user.id
    })}>
      <UserAvatar resizeMode="cover" source={{ uri: user.avatar }} />
      <Username>{user.userName}</Username>
    </Header>
    <File resizeMode="cover" style={{ width, height: imageHeight }} source={{ uri: file }} />
    <ExtractContainer>
      <Actions>
        <Action onPress={pressLike}>
          <Ionicons name={isLiked ? "heart" : "heart-outline"} color={isLiked ? "tomato" : "white"} size={22} />
        </Action>
        <Action onPress={() => navigation.navigate("Comments")}>
          <Ionicons name="chatbubble-outline" color="white" size={22} />
        </Action>
      </Actions>
      <TouchableOpacity onPress={() => navigation.navigate("Likes", {
        photoId: id
      })}>
        <Likes>{likes === 1 ? "1 like" : likes + " likes"}</Likes>
      </TouchableOpacity>
      <Caption>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Username>{user.userName}</Username>
        </TouchableOpacity>
        <CaptionText>{caption}</CaptionText>
      </Caption>
    </ExtractContainer>
  </Container>
}