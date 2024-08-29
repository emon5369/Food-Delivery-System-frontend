import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Check if user is already logged in when the app loads
        const token = localStorage.getItem('userToken');
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);

    const signIn = () => setIsAuthenticated(true);
    const signOut = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('userToken');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
