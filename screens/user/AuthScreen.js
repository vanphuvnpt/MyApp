import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  View,
  KeyboardAvoidingView,
  StyleSheet,
  Dimensions,
  Animated,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import Card from '../../components/UI/Card';
import Loader from '../../components/UI/Loader';
import Colors from '../../constants/Colors';
import { Input, Button } from '../../components/UI';
import { signUp, signIn } from '../../store/actions/auth';
import { useDispatch } from 'react-redux';
//import Loader from '../../components/UI/Loader';
const AuthScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //const [passwordConfirm, setPasswordConfirm] = useState('');

  // const [isSignUp, setIsSignUp] = useState(false);
  //  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      Alert.alert('An Error Occurred', error, [{ text: 'Okay' }]);
    }
  }, [error]);

  const authHandler = async () => {
    let action;
    action = signIn(email, password);
    // if (isSignUp) {
    //   action = signUp(email, password);
    // } else {
    //   action = signIn(email, password);
    // }
    setError(null);
    // setIsLoading(true);
    try {
      await dispatch(action);
      navigation.navigate('HomeScreen');
    } catch (err) {
      setError(err.message);
      //  setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../assets/logo.png')} />

      <View style={styles.inputView}>
        <Input
          icon="md-person"
          placeholder="Tài khoản"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={styles.inputView}>
        <Input
          icon="md-lock-open"
          placeholder="Mật khẩu"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <View style={styles.forgotPassword}>
        <TouchableOpacity onPress={() => navigation.navigate('ResetPasswordScreen')}>
          <Text style={styles.forgot}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>

      <Button title="Đăng nhập" onPress={authHandler} />
    </View>
  );
};
export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    marginBottom: 50,
    width: 110,
    height: 110,
  },

  inputView: {
    backgroundColor: Colors.primary,
    alignItems: 'center',
  },
  forgot: {
    fontSize: 13,
    color: '#fff',
  },
  forgotPassword: {
    width: '80%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
});
