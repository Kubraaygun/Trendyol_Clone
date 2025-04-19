import React, {useEffect} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../store';
import {getUserInfo} from '../../store/actions/userActions';
const Profile: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {user} = useSelector((state: RootState) => state.user);

  useEffect(() => {
    dispatch(getUserInfo({id: 1}));
  }, [dispatch]);
  return (
    <SafeAreaView>
      <Text>{user}</Text>
    </SafeAreaView>
  );
};

//make this component available to the app
export default Profile;
