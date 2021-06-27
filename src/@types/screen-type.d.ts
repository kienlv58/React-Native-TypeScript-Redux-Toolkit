import { ParamListBase, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ScreenParams } from 'constants/screens';

interface BaseScreenProps<
    RouteName extends keyof ParamList,
    ParamList extends ParamListBase = ScreenParams,
> {
    navigation: StackNavigationProp<ParamList, RouteName>;
    route: RouteProp<ParamList, RouteName>;
}

type RouteScreenProps<
    RouteName extends keyof ParamList,
    ParamList extends ParamListBase = ScreenParams,
> = RouteProp<ParamList, RouteName>;

type NavigationScreenProps<
    RouteName extends keyof ParamList,
    ParamList extends ParamListBase = ScreenParams,
> = StackNavigationProp<ParamList, RouteName>;
