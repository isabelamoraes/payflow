import React, {
    createContext,
    useContext,
    useState,
    ReactNode,
    useEffect
} from 'react';
import * as AuthSession from 'expo-auth-session';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { CLIENT_ID } = process.env
const { REDIRECT_URI } = process.env

type User = {
    id: string,
    username: string;
    avatar: string;
    email: string;
}

type AuthContextData = {
    user: User;
    loading: boolean;
    signIn: () => Promise<void>;
    signOut: () => Promise<void>;
}

type AuthProviderProps = {
    children: ReactNode
}

interface AuthorizationResponse{
    params: {
        access_token: string;
    };
    type: string;
}

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User>({} as User);
    const [loading, setLoading] = useState(false);

    const dataKey = `@payflow:user`;

    async function signIn() {
        try {
            setLoading(true);
            const RESPONSE_TYPE = 'token';
            const SCOPE = encodeURI('profile email');

            const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

            const { type, params } = await AuthSession
                .startAsync({ authUrl }) as AuthorizationResponse;

            if (type === 'success') {
                const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`);
                const userInfo = await response.json();

                const userLogged = {
                    id: userInfo.id,
                    username: userInfo.given_name,
                    avatar: userInfo.picture,
                    email: userInfo.email,
                };

                setUser(userLogged);
                await AsyncStorage.setItem(dataKey, JSON.stringify(userLogged));
            }

        } catch (error) {
            throw new Error(error);
        } finally {
            setLoading(false);
        }
    }

    async function signOut() {
        setUser({} as User);

        await AsyncStorage.removeItem(dataKey);
    }

    async function loadUserStorageData() {
        const userStoraged = await AsyncStorage.getItem(dataKey);
        
        if(userStoraged){
            const userLogged = JSON.parse(userStoraged) as User;
            setUser(userLogged);
        }

        setLoading(false);
    }

    useEffect(() => {
        loadUserStorageData();
    }, [])

    return (
        <AuthContext.Provider value={{
            user,
            loading,
            signIn,
            signOut
        }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);

    return context;
}

export {
    AuthProvider,
    useAuth
}