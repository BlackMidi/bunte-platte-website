import React from 'react';
import { useTheme } from '../../theme/ThemeContext';
import { getColor } from '../../theme/colors';
import { getTypography } from '../../theme/typography';
import { getBorderRadius } from '../../theme/borderRadius';
import { LinkButton } from '../LinkButton';
import styles from './ProductCard.module.css';


type Product = {
  id: string;
  cardImage: string;
  images: string[];
  stock: number;
  name: string;
  shortDescription: string;
  longDescription: string;
  size: string[];
  price: number;
};

type ProductCardProps = {
  product: Product;
  onClick?: () => void;
}; 

export const ProductCard = ({ product, onClick }: ProductCardProps) => {
  const { theme } = useTheme();

  const cardStyle: React.CSSProperties = {
    backgroundColor: getColor(['background', 'primary'], theme),
    ['--hover-color' as string]: getColor(['fill', 'grey'], theme),
    borderRadius: getBorderRadius('roundedLarge')
  };

  const cardImageStyle: React.CSSProperties = {
    backgroundImage: `url(${product.cardImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };


// Apply typography values directly instead of spreading
const typographyMedium = getTypography('baseMedium');
const typographyRegular = getTypography('baseRegular');

const nameStyle: React.CSSProperties = {
  color: getColor(['content', 'primary'], theme),
  fontSize: typographyMedium?.fontSize,
  fontWeight: typographyMedium?.fontWeight,
  lineHeight: typographyMedium?.lineHeight
};

const shortDescriptionStyle: React.CSSProperties = {
  color: getColor(['content', 'primary'], theme),
  fontSize: typographyRegular?.fontSize,
  fontWeight: typographyRegular?.fontWeight,
  lineHeight: typographyRegular?.lineHeight
};

const priceStyle: React.CSSProperties = {
  color: getColor(['content', 'primary'], theme),
  fontSize: typographyMedium?.fontSize,
  fontWeight: typographyMedium?.fontWeight,
  lineHeight: typographyMedium?.lineHeight
};

  return (
    <div className={styles.productCard} style={cardStyle}>
      <div className={styles.cardImage} style={cardImageStyle} />
      <div className={styles.cardContent}>
      <div className={styles.cardTextContent}>
        <div className={styles.name} style={nameStyle}>
          {product.name}
        </div>
        <div className={styles.shortDescription} style={shortDescriptionStyle}>
          {product.shortDescription}
        </div>
      </div>
        <div className={styles.price} style={priceStyle}>
        €{product.price.toFixed(2)}
        <LinkButton 
          label="View" 
          iconSrc="/arrow_right.svg" 
          iconAlt="View details"
          onClick={onClick}
        />
      </div>
      </div>

    </div>
  );
}; 