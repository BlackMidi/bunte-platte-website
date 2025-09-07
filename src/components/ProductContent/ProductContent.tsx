import React, { useState } from 'react';
import { useTheme } from '../../theme/ThemeContext';
import { getColor } from '../../theme/colors';
import { getTypography } from '../../theme/typography';
import { ToggleButton } from '../ToggleButton';
import { Button } from '../Button';
import styles from './ProductContent.module.css';

export type Product = {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  image: string;
  size: string[];
  stock: number;
};

type ProductContentProps = {
  product: Product;
  onAddToCart?: (productId: string, size: string) => void;
};

export const ProductContent: React.FC<ProductContentProps> = ({ product, onAddToCart }) => {
  const { theme } = useTheme();
  const [selectedSize, setSelectedSize] = useState<string>('');
  
  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
  };
  
  const handleAddToCart = () => {
    if (onAddToCart && selectedSize) {
      onAddToCart(product.id, selectedSize);
    }
  };
  
  const isButtonDisabled = product.stock === 0 || !selectedSize;
  
  // Typography styles
  const pageTitleStyle = getTypography('pageTitle');
  const baseRegularStyle = getTypography('baseRegular');
  const sectionTitleStyle = getTypography('sectionTitle');
  
  // Color styles
  const contentPrimaryColor = getColor(['content', 'primary'], theme);
  const contentSecondaryColor = getColor(['content', 'secondary'], theme);
  
  // Create size options for ToggleButton
  const sizeOptions = product.size.map(size => ({
    id: size,
    label: size
  }));
  
  return (
    <div className={styles.productContent}>
      <div className={styles.description}>
        <h1 className={styles.name} style={{
          fontFamily: pageTitleStyle.fontFamily,
          fontSize: pageTitleStyle.fontSize,
          fontWeight: pageTitleStyle.fontWeight,
          lineHeight: pageTitleStyle.lineHeight,
          color: contentPrimaryColor
        }}>
          {product.name}
        </h1>
        <p className={styles.longDescription} style={{
          fontFamily: baseRegularStyle.fontFamily,
          fontSize: baseRegularStyle.fontSize,
          fontWeight: baseRegularStyle.fontWeight,
          lineHeight: baseRegularStyle.lineHeight,
          color: contentPrimaryColor
        }}>
          {product.longDescription}
        </p>
      </div>
      
      <div className={styles.price} style={{
        fontFamily: sectionTitleStyle.fontFamily,
        fontSize: sectionTitleStyle.fontSize,
        fontWeight: sectionTitleStyle.fontWeight,
        lineHeight: sectionTitleStyle.lineHeight,
        color: contentPrimaryColor
      }}>
        ${product.price.toFixed(2)}
      </div>
      
      <div className={styles.toggleButtonContainer}>
        <ToggleButton
          label="Size:"
          options={sizeOptions}
          defaultSelectedId=""
          onChange={handleSizeChange}
        />
      </div>
      
      <div className={styles.buttonContainer}>
        <Button
          variant="primary"
          leftIcon=""
          rightIcon="arrow_right.svg"
          disabled={isButtonDisabled}
          onClick={handleAddToCart}
        >
          {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
        </Button>
      </div>
    </div>
  );
}; 