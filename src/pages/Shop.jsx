import { useTheme } from '../theme/ThemeContext';
import { getColor } from '../theme/colors';
import { getTypography } from '../theme/typography';
import { Navbar } from '../components/Navbar/Navbar';
import { ApplicationLayout } from '../components/ApplicationLayout/ApplicationLayout';
import { Footer } from '../components/Footer/Footer';
import { ProductCardList } from '../components/ProductCard';

function Shop() {
  const { theme } = useTheme();

  
  return (
      <ApplicationLayout variant="oneColumn">
          <ProductCardList />
      </ApplicationLayout>
  );
}

export default Shop;