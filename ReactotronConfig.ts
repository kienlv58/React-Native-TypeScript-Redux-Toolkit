import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { reactotronRedux } from 'reactotron-redux';

const reactotron = Reactotron.configure({ name: 'base_app' })
    .setAsyncStorageHandler?.(AsyncStorage)
    .use(reactotronRedux())
    .useReactNative() // add all built-in react native plugins
    .connect(); // let's connect!
export default reactotron;
