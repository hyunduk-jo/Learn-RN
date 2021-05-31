import { gql, useQuery, useReactiveVar } from '@apollo/client';
import React from 'react';
import { useEffect } from 'react';
import { isLoggedInVar, logUserOut } from '../apollo';

const ME = gql`
  query me {
    me {
      id
      userName
      avatar
    }
  }
`;

export default function useMe() {
  const hasToken = useReactiveVar(isLoggedInVar);
  const { data } = useQuery(ME, {
    skip: !hasToken
  })

  useEffect(() => {
    if (data?.me === null) {
      logUserOut();
    }
  }, [data])
  return { data }
}