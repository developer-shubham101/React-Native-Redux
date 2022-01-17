import AsyncStorage from '@react-native-community/async-storage';
import messaging, {
  FirebaseMessagingTypes,
} from '@react-native-firebase/messaging';

import { Alert, Platform } from 'react-native';
import { FCM_TOKEN } from './helper/constants';
export default class FcmService {
  public messageListener: any;
  // we use this method to register notification service in our app.
  // we call this method in componetDidMount() so, we app load we get permission to
  // display notification.
  register = (
    onNotification: (message: FirebaseMessagingTypes.RemoteMessage) => void,
    onOpenNotification: (message: FirebaseMessagingTypes.RemoteMessage) => void,
  ) => {
    this.checkPermission(onNotification, onOpenNotification);
    // when register function call that time we create notification listener
    //this.createNoitificationListeners(onRegister, onNotification, onOpenNotification)
  };

  registerAppWithFCM = (
    onNotification: (message: FirebaseMessagingTypes.RemoteMessage) => void,
    onOpenNotification: (message: FirebaseMessagingTypes.RemoteMessage) => void,
  ) => {
    if (Platform.OS === 'ios') {
      messaging()
        .registerDeviceForRemoteMessages()
        .then((register) => {
          this.getToken(onNotification, onOpenNotification);
        });
      //await messaging().setAutoInitEnabled(true);
    } else {
      this.getToken(onNotification, onOpenNotification);
    }
  };

  checkPermission = (
    onNotification: (message: FirebaseMessagingTypes.RemoteMessage) => void,
    onOpenNotification: (message: FirebaseMessagingTypes.RemoteMessage) => void,
  ) => {
    if (Platform.OS === 'ios') {
      this.requestPermission(onNotification, onOpenNotification);
    } else {
      messaging()
        .hasPermission()
        .then((enabled) => {
          if (enabled) {
            this.registerAppWithFCM(onNotification, onOpenNotification);
            //user has permission
          } else {
            //user don't have permission
            this.requestPermission(onNotification, onOpenNotification);
          }
        })
        .catch((error) => {
          this.requestPermission(onNotification, onOpenNotification);
          let err = `check permission error${error}`;
          //Alert.alert('err',err)
          console.log('[FCMService] Permission rejected', error);
        });
    }
  };

  getToken = async (
    onNotification: (message: FirebaseMessagingTypes.RemoteMessage) => void,
    onOpenNotification: (message: FirebaseMessagingTypes.RemoteMessage) => void,
  ) => {
    let fcmToken = await AsyncStorage.getItem(FCM_TOKEN);
    console.log('fcmToken', fcmToken);
    if (!fcmToken) {
      messaging()
        .getToken()
        .then((fcmToken) => {
          // Alert.alert(fcmToken);
          console.log('fcmToken', fcmToken);
          if (fcmToken) {
            this.setToken(fcmToken);
            this.createNoitificationListeners(
              onNotification,
              onOpenNotification,
            );
            //onRegister(fcmToken)
          } else {
            // Alert.alert("[FCMService] User does not have a device token")
            console.log('[FCMService] User does not have a device token');
          }
        })
        .catch((error) => {
          let err = `FCm token get error${error}`;
          //Alert.alert('err',err)
          console.log('[FCMService] getToken rejected ', error);
        });
    } else {
      this.createNoitificationListeners(onNotification, onOpenNotification);
    }
  };

  async setToken(token: string) {
    await AsyncStorage.setItem(FCM_TOKEN, token);
  }

  requestPermission = (
    onNotification: (message: FirebaseMessagingTypes.RemoteMessage) => void,
    onOpenNotification: (message: FirebaseMessagingTypes.RemoteMessage) => void,
  ) => {
    messaging()
      .requestPermission()
      .then(() => {
        this.registerAppWithFCM(onNotification, onOpenNotification);
      })
      .catch((error) => {
        // console.log("[FCMService] Requested persmission rejected ", error)
      });
  };

  deletedToken = async () => {
    await messaging()
      .deleteToken()
      .catch((error) => {
        // console.log("Delected token error ", error)
      });
  };

  createNoitificationListeners = (
    onNotification: (message: FirebaseMessagingTypes.RemoteMessage) => void,
    onOpenNotification: (message: FirebaseMessagingTypes.RemoteMessage) => void,
  ) => {
    messaging().onNotificationOpenedApp(
      (remoteMessage: FirebaseMessagingTypes.RemoteMessage) => {
        //Alert.alert('remoteMessage',remoteMessage)
        console.log(
          '[FCMService] onNotificationOpenedApp Notification caused app to open from background state:',
          remoteMessage,
        );
        if (remoteMessage) {
          onOpenNotification(remoteMessage);
        }
      },
    );

    // when the application is opened form a quit state
    messaging()
      .getInitialNotification()
      .then((remoteMessage) => {
        //Alert.alert('remoteMessage',remoteMessage)
        console.log(
          '[FCMService] getInitialNotification Notification caused app to open from quit state:',
          remoteMessage,
        );
        if (remoteMessage) {
          onOpenNotification(remoteMessage);
        }
      });

    // Foreground state messages
    this.messageListener = messaging().onMessage(async (remoteMessage) => {
      //Alert.alert("remoteMessage",remoteMessage)
      console.log('[FCMService] A new FCM message arrived', remoteMessage);
      if (remoteMessage) {
        let notification: FirebaseMessagingTypes.RemoteMessage;
        if (Platform.OS === 'ios') {
          notification = remoteMessage;
        } else {
          notification = remoteMessage;
        }
        onNotification(notification);
      }
    });

    // Triggered when have new token
    messaging().onTokenRefresh((fcmToken) => {
      console.log('New token refresh: ', fcmToken);
      if (fcmToken) {
        this.setToken(fcmToken);
      }
    });
  };

  unRegister = () => {
    this.messageListener();
  };
}

// class Constants {
// 	static FCM_TOKEN = "FCM_TOKEN";
// }
