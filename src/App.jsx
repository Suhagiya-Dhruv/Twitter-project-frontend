import Signup from './Component/signupPage'
import Styles from './App.module.css';
import { Box } from '@mui/material';
import LoginPageStyle from './contianer/loginStyle';

function App() {

  return (
    <div className={Styles.signup_contianer}>
      <h1 className={`${Styles.main}`}>Twitter</h1>
      <Box className={Styles.box}>
        <LoginPageStyle>
          <Signup />
        </LoginPageStyle>
      </Box>
    </div>
  )
}

export default App
