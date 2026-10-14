/*import { motion } from "framer-motion";
import { Zap, Shield, Rocket } from "lucide-react";

const features = [
  { icon: <Zap />, title: "Fast", desc: "built for instant loads." },
  { icon: <Shield />, title: "Secure", desc: "modern practices." },
  { icon: <Rocket />, title: "Scalable", desc: "ready to grow with you." },
];

export default function Features() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 0.7, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true, margin: "-100px" }}

            viewport={{ 
              once: false,   // false = Animate every time it enters/leaves view
              amount: 0.2    // 0.2 = Wait until 20% of the card is visible
            }}

            className="p-8 bg-[#D5D5D8] border border-[#D5D5D8] rounded-2xl hover:bg-slate-400/20 transition-colors"
          >
            <div className="w-12 h-12 bg-brand-500/50 text-slate-500 rounded-lg flex items-center justify-center mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-2 text-slate-500 select-none">{feature.title}</h3>
            <p className="text-slate-500 select-none">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
*/
import { motion } from "framer-motion";
import { Code, Users, TrendingUp } from "lucide-react";
 
const features = [
  { icon: <Code />, title: "Purpose", desc: "i love coding and i want to use it in a meaningful way that makes a difference." },
  { icon: <Users />, title: "Collaboration", desc: "i know that good work comes from thriving teams and building through shared ideas." },
  { icon: <TrendingUp />, title: "Growth", desc: "i am always open to new opportunities; always learning, always improving." },
];
 
export default function Features() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 0.7, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: false, amount: 0.2 }}
            className="p-8 bg-[#D5D5D8] border border-[#D5D5D8] rounded-2xl hover:bg-slate-400/20 transition-colors"
          >
            <div className="w-12 h-12 bg-brand-500/50 text-slate-500 rounded-lg flex items-center justify-center mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-2 text-slate-500 select-none">{feature.title}</h3>
            <p className="text-slate-500 select-none">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}