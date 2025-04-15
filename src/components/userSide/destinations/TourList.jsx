import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./TourList.css";

const tours = [
  { id: 1, name: "Bali Adventure", location: "Indonesia", type: "Beach", image: "/src/assets/destinations/b.jpg" },
  { id: 2, name: "Paris Lights", location: "France", type: "City", image: "/src/assets/destinations/a.jpg" },
  { id: 3, name: "Greek Escape", location: "Greece", type: "Island", image: "/src/assets/destinations/c.jpg" },
  { id: 4, name: "Tokyo Dreams", location: "Japan", type: "City", image: "/src/assets/destinations/d.jpg" },
  { id: 5, name: "Peruvian Trek", location: "Peru", type: "Mountain", image: "/src/assets/destinations/e.jpg" },
];

const categories = ["All", "Beach", "City", "Island", "Mountain"];

const TourList = () => {
  const [filter, setFilter] = useState("All");

  const filteredTours = filter === "All" ? tours : tours.filter(t => t.type === filter);

  return (
    <div className="tour-list-container">
      <h1>Explore Our Tours 🌍</h1>
      
      <div className="filter-buttons">
        {categories.map((cat) => (
          <button
            key={cat}
            className={filter === cat ? "active" : ""}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="tour-grid">
        <AnimatePresence>
          {filteredTours.map((tour) => (
            <motion.div
              className="tour-card"
              key={tour.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
            >
              <img src={tour.image} alt={tour.name} />
              <div className="tour-info">
                <h3>{tour.name}</h3>
                <p>{tour.location}</p>
                <span className="badge">{tour.type}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TourList;
