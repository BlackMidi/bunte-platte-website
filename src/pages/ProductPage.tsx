import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTheme } from '../theme/ThemeContext';
import { ApplicationLayout } from '../components/ApplicationLayout/ApplicationLayout';
import { ProductContent, Product as ProductType } from '../components/ProductContent/ProductContent';
import { Navbar } from '../components/Navbar/Navbar';
import { Footer } from '../components/Footer/Footer';

const ProductPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const { theme } = useTheme();
  const [product, setProduct] = useState<ProductType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch('/products.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const products = await response.json();
        const foundProduct = products.find((p: ProductType) => p.id === productId);
        
        if (foundProduct) {
          // Transform the product data to match the ProductContent component's expected format
          const transformedProduct: ProductType = {
            id: foundProduct.id,
            name: foundProduct.name,
            description: foundProduct.shortDescription,
            longDescription: foundProduct.longDescription,
            price: foundProduct.price,
            image: foundProduct.images[0], // Use the first image as the main image
            size: foundProduct.size,
            stock: foundProduct.stock
          };
          setProduct(transformedProduct);
        } else {
          setError('Product not found');
          navigate('/shop'); // Redirect to shop if product not found
        }
      } catch (error) {
        console.error('Error fetching product:', error);
        setError('Failed to load product');
        navigate('/shop'); // Redirect to shop on error
      } finally {
        setLoading(false);
      }
    };

    if (productId) {
      fetchProduct();
    }
  }, [productId, navigate]);

  const handleAddToCart = (productId: string, size: string) => {
    // This function will be implemented later for cart functionality
    console.log(`Adding product ${productId} with size ${size} to cart`);
  };

  if (loading) {
    return (
      <div style={{ padding: '0px', width: '100vw', height: '100vh' }}>
        <Navbar />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          Loading...
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div style={{ padding: '0px', width: '100vw', height: '100vh' }}>
        <Navbar />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          {error || 'Product not found'}
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div style={{ padding: '0px', width: '100vw', height: '100vh' }}>
      <Navbar />
      <ApplicationLayout 
        variant="twoColumn" 
        leftColumnImage={product.image} 
        imagePosition="left"
        rightColumnContent={
          <div style={{ padding: '24px', width: '100%' }}>
            <ProductContent 
              product={product} 
              onAddToCart={handleAddToCart} 
            />
          </div>
        }
        children={null}
      />
      <Footer />
    </div>
  );
};

export default ProductPage; 