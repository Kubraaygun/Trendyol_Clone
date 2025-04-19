import React, {useEffect} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../store';
const Profile: React.FC = () => {
  const dispatch = useDispatch()<AppDispatch>;
  const {token} = useSelector((state: RootState) => state.auth);

  return (
    <SafeAreaView>
      <Text>{token}</Text>
    </SafeAreaView>
  );
};

//make this component available to the app
export default Profile;
