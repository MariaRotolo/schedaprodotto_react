
import './App.css';
import Product from './components/Product';

function App() {
  return (
    <div className="App">
      
        <Product 
          
          imgSrc = "https://res.cloudinary.com/db46klhlo/image/upload/v1639056543/jakob-owens-O_bhy3TnSYU-unsplash.jpg" 
          productTitle = "Backpack" 
          productPrice = "34" 
          productDescription = "Whit a concept design to be easy to understand, RAINS bridge the gap between geopraphy and lifestyle." 
          ColorTitle = "Colors" 
          SizeTitle = "Size" 
          productButton = "Add to cart" 

        />
     
    </div>
  );
}

export default App;
