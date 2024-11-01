import { Stack } from "expo-router"

const Layout =()=>{
    return(
        <Stack screenOptions={{headerShown:false}}>
            <Stack.Screen name="Signin" options={{headerShown:false}}/>
            <Stack.Screen name="Singup" options={{headerShown:false}}/>
        </Stack>
    )
}
export default Layout