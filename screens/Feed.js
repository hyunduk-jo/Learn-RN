import { gql, useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { FlatList } from 'react-native';
import Photo from '../components/Photo';
import ScreenLayout from '../components/ScreenLayout';

const SEE_FEED = gql`
  query seeFeed($offset: Int!){
    seeFeed(offset: $offset){
      id
      file
      isLiked
      likes
      commentNumber
      caption
      user{
        id
        userName
        avatar
      }
      comments{
        id
        user{
          userName
          avatar
        }
        payload
        isMine
        createdAt
      }
      createdAt
      isMine
    }
  }
`;

export default function Feed() {
  const [offset, setOffset] = useState(0);
  const { data, loading, refetch, fetchMore } = useQuery(SEE_FEED, { variables: { offset } });
  const renderPhoto = ({ item: photo }) => {
    return <Photo {...photo} />
  }
  const refresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  }
  const [refreshing, setRefreshing] = useState(false);
  return (
    <ScreenLayout loading={loading}>
      <FlatList
        onEndReachedThreshold={0.05}
        onEndReached={() => fetchMore({
          variables: {
            offset: data?.seeFeed?.length
          }
        })}
        refreshing={refreshing}
        onRefresh={refresh}
        style={{ width: "100%" }}
        data={data?.seeFeed}
        keyExtractor={photo => "" + photo.id}
        renderItem={renderPhoto}
      />
    </ScreenLayout>
  )
}