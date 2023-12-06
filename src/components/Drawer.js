//IMPORTAÇÃO DO MENU DRAWER
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

//IMPORTAÇÃO DAS TELAS NAVEGAVEIS NO DRAWERMENU
import FeedBooks from '../screen/FeedBook'

//CRIAÇÃO DO NAVIGATOR DO DRAWERMENU
const Drawer = createDrawerNavigator();

//CONSTRUÇÃO DE UM FUNCTIONAL COMPONENT
export default function Drawer() {

    return (
        <Drawer.Navigator>

            <Drawer.Screen
                name='FeedBooks'
                component={FeedBooks}
                options={
                    {
                        title: 'Feed de livros',
                        headerTitleStyle: {
                            color: 'transparent',
                        }
                    }
                }
            />

        </Drawer.Navigator>
    );
}