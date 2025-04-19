import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../store';
import {getUserInfo} from '../../store/actions/userActions';
import Avatar from '../../components/user/avatar';
import Button from '../../components/ui/button';
const Profile: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {user} = useSelector((state: RootState) => state.user);

  useEffect(() => {
    dispatch(getUserInfo({id: 2}));
  }, [dispatch]);
  return (
    <ScrollView>
    {
      user? (
        <View>
          <Avatar name={user.name} surname={user.surname} size={100}/>
          <Text>{user.name}</Text>
          <Text>{user.surname}</Text>
          <Text>{user.email}</Text>
          <Button title="edit" onPress={()=>{}}/>
  
        </View>
      )
    }
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
