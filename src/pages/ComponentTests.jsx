import { useTheme } from '../theme/ThemeContext';
import { Navbar } from '../components/Navbar/Navbar';
import { ApplicationLayout } from '../components/ApplicationLayout/ApplicationLayout';
import { Footer } from '../components/Footer/Footer';
import { Button } from '../components/Button';  
import { LinkButton } from '../components/LinkButton';  
import { ProductCard } from '../components/ProductCard/ProductCard';
import { ToggleButton } from '../components/ToggleButton';



function ComponentTest() {
  const { theme } = useTheme();
  
  const toggleOptions = [
    { id: 'option1', label: 'Option 1' },
    { id: 'option2', label: 'Option 2' },
    { id: 'option3', label: 'Option 3' },
    { id: 'option4', label: 'Option 4' },
  ];
  
  const handleToggleChange = (selectedId) => {
    console.log('Selected option:', selectedId);
  };
  
  return (
        <ApplicationLayout variant="oneColumn">
              <Button variant="primary" leftIcon="placeholder.svg" rightIcon="">This Is A Primary Button Label</Button>
              <Button variant="primary" leftIcon="placeholder.svg" rightIcon=""></Button>
              <Button variant="secondary" leftIcon="" rightIcon="placeholder.svg">This Is A Secondary Button Label</Button>
              <Button variant="tertiary" leftIcon="placeholder.svg" rightIcon="">This Is A Tertiary Button Label</Button>
              <Button variant="quaternary" leftIcon="" rightIcon="">This Is A Quaternary Button Label</Button>
              <LinkButton label="This Is A LinkButton Label" iconSrc="placeholder.svg" iconAlt="Placeholder Icon" />
              <ToggleButton 
              label="Selection:" 
              options={toggleOptions}
              defaultSelectedId="option1"
              onChange={handleToggleChange}
              />
        </ApplicationLayout>
  )
}

export default ComponentTest