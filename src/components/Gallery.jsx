"use client";
import { motion } from "framer-motion";

const travels = [
  { id: 1, place: "Bali, Indonesia", image: "bali.jpg" },
  { id: 2, place: "Swiss Alps", image: "swiss.jpg" },
  { id: 3, place: "Tokyo, Japan", image: "tokyo.jpg" },
];

export default function Gallery() {
  return (
    <section className="py-20 bg-white px-4 md:px-20">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-12"
      >
        Recent Journeys
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {travels.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer"
          >
            <div className="absolute inset-0 bg-gray-300 group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
            <div className="absolute bottom-6 left-6">
              <h3 className="text-white text-2xl font-semibold">{item.place}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}