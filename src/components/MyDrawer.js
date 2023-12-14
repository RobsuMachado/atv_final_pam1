//IMPORTAÇÃO DO MENU DRAWER
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

//IMPORTAÇÃO DAS TELAS NAVEGAVEIS NO DRAWERMENU
import FeedGames from '../screen/FeedGames'
import Categoria from '../screen/Categoria';
import Home from '../screen/Home';

//CRIAÇÃO DO NAVIGATOR DO DRAWERMENU
const Drawer = createDrawerNavigator();

//CONSTRUÇÃO DE UM FUNCTIONAL COMPONENT
export default function MyDrawer() {

    return (
        <Drawer.Navigator>

            <Drawer.Screen
                name='Home'
                component={Home}
                options={
                    {
                        title: 'Home',
                        headerTitleStyle: {
                            color: 'transparent',
                        }
                    }
                }
            />

            <Drawer.Screen
                name='FeedGames'
                component={FeedGames}
                options={
                    {
                        title: 'Feed de Jogos',
                        headerTitleStyle: {
                            color: 'transparent',
                        }
                    }
                }
            />

            <Drawer.Screen
                name='Categoria'
                component={Categoria}
                options={
                    {
                        title: 'Categoria',
                        headerTitleStyle: {
                            color: 'transparent',
                        }
                    }
                }
            />

        </Drawer.Navigator>
    );
}