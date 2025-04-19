import React, {useEffect} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
const Profile: React.FC = ({navigation, route}) => {
  const {token} = useSelector((state: RootState) => state.auth);
  return (
    <SafeAreaView>
      <Text>{token}</Text>
    </SafeAreaView>
  );
};

//make this component available to the app
export default Profile;
