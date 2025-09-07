import { useTheme } from '../theme/ThemeContext';
import { Navbar } from '../components/Navbar/Navbar';
import { ApplicationLayout } from '../components/ApplicationLayout/ApplicationLayout';
import { Footer } from '../components/Footer/Footer';
import { Button } from '../components/Button';  

function Festival() {
    const { theme } = useTheme();
    
    return (
          <ApplicationLayout variant="oneColumn">
              <p>This is the Festival page using the one-column layout.</p>
              <Button variant="primary" leftIcon="placeholder.svg" rightIcon="">FESTIVAL</Button>
          </ApplicationLayout>
    )
  }
  
  export default Festival