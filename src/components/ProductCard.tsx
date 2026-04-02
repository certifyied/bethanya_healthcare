// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// interface ProductCardProps {
//   id: string;
//   name: string;
//   price: string;
//   category: string;
//   image: string;
//   description: string;
// }

// const ProductCard = ({ id, name, price, category, image, description }: ProductCardProps) => (
//   <motion.div
//     whileHover={{ y: -8, boxShadow: "0 0 30px -5px hsl(122 39% 49% / 0.25)" }}
//     transition={{ duration: 0.3 }}
//   >
//     <Link
//       to={`/products/${id}`}
//       className="block bg-card rounded-3xl overflow-hidden shadow-card transition-all duration-300 group"
//     >
//       <div className="aspect-square overflow-hidden bg-muted relative">
//         <img
//           src={image}
//           alt={name}
//           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//           loading="lazy"
//         />
//         <span className="absolute top-4 left-4 bg-primary/90 text-primary-foreground font-body text-xs px-3 py-1 rounded-full">
//           {category}
//         </span>
//       </div>
//       <div className="p-5">
//         <h3 className="font-heading text-lg text-foreground mb-1">{name}</h3>
//         <p className="font-body text-sm text-muted-foreground mb-3 line-clamp-2">{description}</p>
//         <span className="font-heading text-xl text-forest font-semibold">{price}</span>
//       </div>
//     </Link>
//   </motion.div>
// );

// export default ProductCard;



import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;
  name: string;
  price: string;
  category: string;
  image: string;
  description: string;
}

const ProductCard = ({ id, name, price, category, image, description }: ProductCardProps) => (
  <div>
    <Link
      to={`/products/${id}`}
      className="block bg-card rounded-3xl overflow-hidden 
border border-[#c2a97a] 
shadow-card transition-all duration-300"
    >
      <div className="aspect-square overflow-hidden bg-muted relative">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <span className="absolute top-4 left-4 bg-primary/90 text-primary-foreground font-body text-xs px-3 py-1 rounded-full">
          {category}
        </span>
      </div>

      <div className="p-5">
        <h3 className="font-heading text-lg text-[#c2a97a] mb-1">
          {name}
        </h3>

        <p className="font-body text-sm text-[#c2a97a]/80 mb-3 line-clamp-2">
          {description}
        </p>
        {/* <span className="font-heading text-xl text-forest font-semibold">
          {price}
        </span> */}
      </div>
    </Link>
  </div>
);

export default ProductCard;