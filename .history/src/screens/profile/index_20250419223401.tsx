import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text} from 'react-native';
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
    <ScrollView>
      <Text>
        {user?.name.firstname} {user?.name.lastname}
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
//make this component available to the app
export default Profile;
