import { useTheme } from '../theme/ThemeContext';
import { Navbar } from '../components/Navbar/Navbar';
import { ApplicationLayout } from '../components/ApplicationLayout/ApplicationLayout';
import { Footer } from '../components/Footer/Footer';
import { Button } from '../components/Button';  

function Festival() {
    const { theme } = useTheme();
    
    return (
          <ApplicationLayout variant="oneColumn">
              <p>This is the Volunteers page.</p>
              <Button variant="primary" leftIcon="placeholder.svg" rightIcon="">VOLUNTEERS</Button>
          </ApplicationLayout>
    )
  }
  
  export default Festival