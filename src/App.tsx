import Layout from './components/Layout';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ThemeProvider } from './hooks/useTheme';
import { UserProvider } from './hooks/useUser';
import { REACT_APP_GOOGLE_CLIENT_ID } from './constants/enviroment';

const App = () => {
  return (
    <>
      <GoogleOAuthProvider clientId={REACT_APP_GOOGLE_CLIENT_ID || ''}>
        <UserProvider>
          <ThemeProvider>
            <Layout />
          </ThemeProvider>
        </UserProvider>
      </GoogleOAuthProvider>
    </>
  )
}

export default App