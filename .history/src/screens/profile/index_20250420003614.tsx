import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../store';
import {getUserInfo} from '../../store/actions/userActions';
import Avatar from '../../components/user/avatar';
import Button from '../../components/ui/button';
import {userLogOut} from '../../store/actions/authActions';
const Profile: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {user} = useSelector((state: RootState) => state.user);
  const {isLogin} = useSelector((state: RootState) => state.auth);
  useEffect(() => {
    dispatch(getUserInfo({id: 2}));
  }, [dispatch]);
  return (
    <ScrollView style={styles.container}>
      {isLogin ? (
        <View>
          <View style={{alignItems: 'center', marginTop: 20}}>
            <Avatar
              name={user?.name.firstname}
              surname={user?.name.lastname}
              image={user?.image}
              size={150}
            />
            <Text style={{fontSize: 30, marginTop: 10, fontWeight: 'bold'}}>
              {user?.name.firstname} {user?.name.lastname}
            </Text>
            <Text style={{fontSize: 20, marginTop: 10}}>{user?.email}</Text>
          </View>
          <View style={{padding: 20}}>
            <Button title="Profil Düzenle" onPress={() => {}} />
            <Button
              style={{marginTop: 10}}
              title="Çıkış "
              onPress={() => {
                dispatch(userLogOut());
                console.log(userLogOut);
              }}
            />
          </View>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
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
