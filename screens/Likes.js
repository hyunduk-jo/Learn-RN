import { gql, useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import ScreenLayout from '../components/ScreenLayout';
import UserRow from '../components/UserRow';

const LIKES_QUERY = gql`
  query seePhotoLikes($id: Int!){
    seePhotoLikes(id: $id){
      id,
      userName,
      avatar,
      isFollowing,
      isMe
    }
  }
`;

export default function Likes({ route }) {
  const { data, loading, refetch } = useQuery(LIKES_QUERY, { variables: { id: route?.params?.photoId }, skip: !route?.params?.photoId });
  const renderUser = ({ item: user }) => {
    console.log(user)
    return <UserRow {...user} />
  }
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  }
  return (
    <ScreenLayout loading={loading}>
      <FlatList
        ItemSeparatorComponent={() => <View style={{ width: "100%", height: "2px", backgroundColor: "rgba(255,255,255,0.3)" }}></View>}
        style={{ width: "100%" }}
        data={data?.seePhotoLikes}
        keyExtractor={item => "" + item.id}
        renderItem={renderUser}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    </ScreenLayout>
  )
}