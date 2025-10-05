<<<<<<< HEAD
"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TimelineContent } from "@/components/ui/timeline-animation";
import VerticalCutReveal from "@/components/ui/vertical-cut-reveal";
import Pill from "@/components/ui/pill";
import NumberFlow from "@number-flow/react";
import { Briefcase, CheckCheck, Database, Server } from "lucide-react";
import { motion } from "motion/react";
import { useRef, useState } from "react";

const plans = [
  {
    name: "Starter",
    description:
      "Great for small businesses and startups looking to get started with AI",
    price: 12,
    yearlyPrice: 99,
    buttonText: "Get started",
    buttonVariant: "outline" as const,
    features: [
      { text: "Up to 10 boards per workspace", icon: <Briefcase size={20} /> },
      { text: "Up to 10GB storage", icon: <Database size={20} /> },
      { text: "Limited analytics", icon: <Server size={20} /> },
    ],
    includes: [
      "Free includes:",
      "Unlimted Cards",
      "Custom background & stickers",
      "2-factor authentication",
    ],
  },
  {
    name: "Business",
    description:
      "Best value for growing businesses that need more advanced features",
    price: 48,
    yearlyPrice: 399,
    buttonText: "Get started",
    buttonVariant: "default" as const,
    popular: true,
    features: [
      { text: "Unlimted boards", icon: <Briefcase size={20} /> },
      { text: "Storage (250MB/file)", icon: <Database size={20} /> },
      { text: "100 workspace command runs", icon: <Server size={20} /> },
    ],
    includes: [
      "Everything in Starter, plus:",
      "Advanced checklists",
      "Custom fields",
      "Servedless functions",
    ],
  },
  {
    name: "Enterprise",
    description:
      "Advanced plan with enhanced security and unlimited access for large teams",
    price: 96,
    yearlyPrice: 899,
    buttonText: "Get started",
    buttonVariant: "outline" as const,
    features: [
      { text: "Unlimited board", icon: <Briefcase size={20} /> },
      { text: "Unlimited storage ", icon: <Database size={20} /> },
      { text: "Unlimited workspaces", icon: <Server size={20} /> },
    ],
    includes: [
      "Everything in Business, plus:",
      "Multi-board management",
      "Multi-board guest",
      "Attachment permissions",
    ],
  },
];

const PricingSwitch = ({ onSwitch }: { onSwitch: (value: string) => void }) => {
  const [selected, setSelected] = useState("0");

  const handleSwitch = (value: string) => {
    setSelected(value);
    onSwitch(value);
  };

  return (
    <div className="flex justify-center">
      <div className="relative z-50 mx-auto flex w-fit rounded-full bg-neutral-50 dark:bg-neutral-900 border border-gray-200 dark:border-gray-700 p-1">
        <button
          onClick={() => handleSwitch("0")}
          className={`relative z-10 w-fit sm:h-12 h-10 rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors ${
            selected === "0"
              ? "text-white"
              : "text-muted-foreground hover:text-black dark:hover:text-white"
          }`}
        >
          {selected === "0" && (
            <motion.span
              layoutId={"switch"}
              className="absolute top-0 left-0 sm:h-12 h-10 w-full rounded-full border-4 shadow-sm shadow-blue-600 border-blue-600 bg-gradient-to-t from-blue-500 via-blue-400 to-blue-600"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative">Monthly</span>
        </button>

        <button
          onClick={() => handleSwitch("1")}
          className={`relative z-10 w-fit sm:h-12 h-10 flex-shrink-0 rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors ${
            selected === "1"
              ? "text-white"
              : "text-muted-foreground hover:text-black dark:hover:text-white"
          }`}
        >
          {selected === "1" && (
            <motion.span
              layoutId={"switch"}
              className="absolute top-0 left-0 sm:h-12 h-10 w-full rounded-full border-4 shadow-sm shadow-blue-600 border-blue-600 bg-gradient-to-t from-blue-500 via-blue-400 to-blue-600"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative flex items-center gap-2">
            Yearly
            <span className="rounded-full bg-blue-50 dark:bg-blue-900 px-2 py-0.5 text-xs font-medium text-black dark:text-white">
              Save 20%
            </span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default function PricingSection6() {
  const [isYearly, setIsYearly] = useState(false);
  const pricingRef = useRef<HTMLDivElement>(null);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  const togglePricingPeriod = (value: string) =>
    setIsYearly(Number.parseInt(value) === 1);

  return (
    <div
      className="w-full min-h-screen relative bg-white dark:bg-black"
      ref={pricingRef}
    >
      {/* Keep original heading and subheading */}
      <article className="text-center mb-8 pt-32 w-full mx-auto space-y-3 relative z-50 px-4">
        {/* Add the pill at the top */}
        <div className="flex justify-center mb-6">
          <Pill variant="primary">
            {/* <span></span> */}
            Pricing
          </Pill>
        </div>
        
        <h2 className="text-4xl font-medium text-gray-900 dark:text-white mb-3">
          <VerticalCutReveal
            splitBy="words"
            staggerDuration={0.15}
            staggerFrom="first"
            reverse={true}
            containerClassName="justify-center "
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 40,
              delay: 0, // First element
            }}
          >
            Plans that works best for your
          </VerticalCutReveal>
        </h2>

        <TimelineContent
          as="p"
          animationNum={0}
          timelineRef={pricingRef}
          customVariants={revealVariants}
          className="text-gray-600 dark:text-gray-300 mb-8"
        >
          Trusted by millions, We help teams all around the world, Explore which
          option is right for you.
        </TimelineContent>

        <TimelineContent
          as="div"
          animationNum={1}
          timelineRef={pricingRef}
          customVariants={revealVariants}
          className="mt-8"
        >
          <PricingSwitch onSwitch={togglePricingPeriod} />
        </TimelineContent>
      </article>

      <div className="grid md:grid-cols-3 max-w-6xl gap-6 py-6 mx-auto px-4 lg:px-8">
        {plans.map((plan, index) => (
          <TimelineContent
            key={plan.name}
            as="div"
            animationNum={4 + index}
            timelineRef={pricingRef}
            customVariants={revealVariants}
          >
            <Card
              className={`relative border-neutral-200 dark:border-neutral-800 ${
                plan.popular 
                  ? "ring-2 ring-blue-500 bg-blue-50 dark:bg-blue-950/20" 
                  : "bg-white dark:bg-neutral-900"
              }`}
            >
              <CardHeader className="text-left">
                <div className="flex justify-between">
                  <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  {plan.popular && (
                    <div className="">
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Popular
                      </span>
                    </div>
                  )}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{plan.description}</p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-semibold text-gray-900 dark:text-white">
                    $
                    <NumberFlow
                      value={isYearly ? plan.yearlyPrice : plan.price}
                      className="text-4xl font-semibold"
                    />
                  </span>
                  <span className="text-gray-600 dark:text-gray-300 ml-1">
                    /{isYearly ? "year" : "month"}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <button
                  className={`w-full mb-6 p-4 text-xl rounded-xl cursor-pointer transition-all duration-200 hover:scale-105 ${
                    plan.popular
                      ? "bg-gradient-to-t from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg shadow-blue-500/50 border border-blue-400 text-white"
                      : plan.buttonVariant === "outline"
                        ? "bg-gradient-to-t from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 dark:from-neutral-800 dark:to-neutral-700 dark:hover:from-neutral-700 dark:hover:to-neutral-600 shadow-lg shadow-gray-200 dark:shadow-neutral-900 border border-gray-300 dark:border-neutral-600 text-gray-900 dark:text-white"
                        : ""
                  }`}
                >
                  {plan.buttonText}
                </button>
                
                <ul className="space-y-2 font-semibold py-5">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <span className="text-neutral-800 dark:text-neutral-200 grid place-content-center mt-0.5 mr-3">
                        {feature.icon}
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-3 pt-4 border-t border-neutral-200 dark:border-neutral-700">
                  <h4 className="font-medium text-base text-gray-900 dark:text-white mb-3">
                    {plan.includes[0]}
                  </h4>
                  <ul className="space-y-2 font-semibold">
                    {plan.includes.slice(1).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <span className="h-6 w-6 bg-green-50 dark:bg-green-900/30 border border-blue-500 rounded-full grid place-content-center mt-0.5 mr-3">
                          <CheckCheck className="h-4 w-4 text-blue-500" />
                        </span>
                        <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TimelineContent>
        ))}
      </div>
    </div>
  );
}
=======
// "use client";
// import { Card, CardContent, CardHeader } from "@/components/ui/card";
// import { TimelineContent } from "@/components/ui/timeline-animation";
// import VerticalCutReveal from "@/components/ui/vertical-cut-reveal";
// import Pill from "@/components/ui/pill";
// import NumberFlow from "@number-flow/react";
// import { Briefcase, CheckCheck, Database, Server } from "lucide-react";
// import { motion } from "motion/react";
// import { useRef, useState } from "react";

// const plans = [
//   {
//     name: "Starter",
//     description:
//       "Great for small businesses and startups looking to get started with AI",
//     price: 12,
//     yearlyPrice: 99,
//     buttonText: "Get started",
//     buttonVariant: "outline" as const,
//     features: [
//       { text: "Up to 10 boards per workspace", icon: <Briefcase size={20} /> },
//       { text: "Up to 10GB storage", icon: <Database size={20} /> },
//       { text: "Limited analytics", icon: <Server size={20} /> },
//     ],
//     includes: [
//       "Free includes:",
//       "Unlimted Cards",
//       "Custom background & stickers",
//       "2-factor authentication",
//     ],
//   },
//   {
//     name: "Business",
//     description:
//       "Best value for growing businesses that need more advanced features",
//     price: 48,
//     yearlyPrice: 399,
//     buttonText: "Get started",
//     buttonVariant: "default" as const,
//     popular: true,
//     features: [
//       { text: "Unlimted boards", icon: <Briefcase size={20} /> },
//       { text: "Storage (250MB/file)", icon: <Database size={20} /> },
//       { text: "100 workspace command runs", icon: <Server size={20} /> },
//     ],
//     includes: [
//       "Everything in Starter, plus:",
//       "Advanced checklists",
//       "Custom fields",
//       "Servedless functions",
//     ],
//   },
//   {
//     name: "Enterprise",
//     description:
//       "Advanced plan with enhanced security and unlimited access for large teams",
//     price: 96,
//     yearlyPrice: 899,
//     buttonText: "Get started",
//     buttonVariant: "outline" as const,
//     features: [
//       { text: "Unlimited board", icon: <Briefcase size={20} /> },
//       { text: "Unlimited storage ", icon: <Database size={20} /> },
//       { text: "Unlimited workspaces", icon: <Server size={20} /> },
//     ],
//     includes: [
//       "Everything in Business, plus:",
//       "Multi-board management",
//       "Multi-board guest",
//       "Attachment permissions",
//     ],
//   },
// ];

// const PricingSwitch = ({ onSwitch }: { onSwitch: (value: string) => void }) => {
//   const [selected, setSelected] = useState("0");

//   const handleSwitch = (value: string) => {
//     setSelected(value);
//     onSwitch(value);
//   };

//   return (
//     <div className="flex justify-center">
//       <div className="relative z-50 mx-auto flex w-fit rounded-full bg-neutral-50 dark:bg-neutral-900 border border-gray-200 dark:border-gray-700 p-1">
//         <button
//           onClick={() => handleSwitch("0")}
//           className={`relative z-10 w-fit sm:h-12 h-10 rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors ${
//             selected === "0"
//               ? "text-white"
//               : "text-muted-foreground hover:text-black dark:hover:text-white"
//           }`}
//         >
//           {selected === "0" && (
//             <motion.span
//               layoutId={"switch"}
//               className="absolute top-0 left-0 sm:h-12 h-10 w-full rounded-full border-4 shadow-sm shadow-blue-600 border-blue-600 bg-gradient-to-t from-blue-500 via-blue-400 to-blue-600"
//               transition={{ type: "spring", stiffness: 500, damping: 30 }}
//             />
//           )}
//           <span className="relative">Monthly</span>
//         </button>

//         <button
//           onClick={() => handleSwitch("1")}
//           className={`relative z-10 w-fit sm:h-12 h-10 flex-shrink-0 rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors ${
//             selected === "1"
//               ? "text-white"
//               : "text-muted-foreground hover:text-black dark:hover:text-white"
//           }`}
//         >
//           {selected === "1" && (
//             <motion.span
//               layoutId={"switch"}
//               className="absolute top-0 left-0 sm:h-12 h-10 w-full rounded-full border-4 shadow-sm shadow-blue-600 border-blue-600 bg-gradient-to-t from-blue-500 via-blue-400 to-blue-600"
//               transition={{ type: "spring", stiffness: 500, damping: 30 }}
//             />
//           )}
//           <span className="relative flex items-center gap-2">
//             Yearly
//             <span className="rounded-full bg-blue-50 dark:bg-blue-900 px-2 py-0.5 text-xs font-medium text-black dark:text-white">
//               Save 20%
//             </span>
//           </span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default function PricingSection6() {
//   const [isYearly, setIsYearly] = useState(false);
//   const pricingRef = useRef<HTMLDivElement>(null);

//   const revealVariants = {
//     visible: (i: number) => ({
//       y: 0,
//       opacity: 1,
//       filter: "blur(0px)",
//       transition: {
//         delay: i * 0.4,
//         duration: 0.5,
//       },
//     }),
//     hidden: {
//       filter: "blur(10px)",
//       y: -20,
//       opacity: 0,
//     },
//   };

//   const togglePricingPeriod = (value: string) =>
//     setIsYearly(Number.parseInt(value) === 1);

//   return (
//     <div
//       className="w-full min-h-screen relative bg-white dark:bg-black"
//       ref={pricingRef}
//     >
//       {/* Keep original heading and subheading */}
//       <article className="text-center mb-8 pt-32 w-full mx-auto space-y-3 relative z-50 px-4">
//         {/* Add the pill at the top */}
//         <div className="flex justify-center mb-6">
//           <Pill variant="primary">
//             {/* <span></span> */}
//             Pricing
//           </Pill>
//         </div>
        
//         <h2 className="text-4xl font-medium text-gray-900 dark:text-white mb-3">
//           <VerticalCutReveal
//             splitBy="words"
//             staggerDuration={0.15}
//             staggerFrom="first"
//             reverse={true}
//             containerClassName="justify-center "
//             transition={{
//               type: "spring",
//               stiffness: 250,
//               damping: 40,
//               delay: 0, // First element
//             }}
//           >
//             Plans that works best for your
//           </VerticalCutReveal>
//         </h2>

//         <TimelineContent
//           as="p"
//           animationNum={0}
//           timelineRef={pricingRef}
//           customVariants={revealVariants}
//           className="text-gray-600 dark:text-gray-300 mb-8"
//         >
//           Trusted by millions, We help teams all around the world, Explore which
//           option is right for you.
//         </TimelineContent>

//         <TimelineContent
//           as="div"
//           animationNum={1}
//           timelineRef={pricingRef}
//           customVariants={revealVariants}
//           className="mt-8"
//         >
//           <PricingSwitch onSwitch={togglePricingPeriod} />
//         </TimelineContent>
//       </article>

//       <div className="grid md:grid-cols-3 max-w-6xl gap-6 py-6 mx-auto px-4 lg:px-8">
//         {plans.map((plan, index) => (
//           <TimelineContent
//             key={plan.name}
//             as="div"
//             animationNum={4 + index}
//             timelineRef={pricingRef}
//             customVariants={revealVariants}
//           >
//             <Card
//               className={`relative border-neutral-200 dark:border-neutral-800 ${
//                 plan.popular 
//                   ? "ring-2 ring-blue-500 bg-blue-50 dark:bg-blue-950/20" 
//                   : "bg-white dark:bg-neutral-900"
//               }`}
//             >
//               <CardHeader className="text-left">
//                 <div className="flex justify-between">
//                   <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-2">
//                     {plan.name}
//                   </h3>
//                   {plan.popular && (
//                     <div className="">
//                       <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
//                         Popular
//                       </span>
//                     </div>
//                   )}
//                 </div>
//                 <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{plan.description}</p>
//                 <div className="flex items-baseline">
//                   <span className="text-4xl font-semibold text-gray-900 dark:text-white">
//                     $
//                     <NumberFlow
//                       value={isYearly ? plan.yearlyPrice : plan.price}
//                       className="text-4xl font-semibold"
//                     />
//                   </span>
//                   <span className="text-gray-600 dark:text-gray-300 ml-1">
//                     /{isYearly ? "year" : "month"}
//                   </span>
//                 </div>
//               </CardHeader>

//               <CardContent className="pt-0">
//                 <button
//                   className={`w-full mb-6 p-4 text-xl rounded-xl cursor-pointer transition-all duration-200 hover:scale-105 ${
//                     plan.popular
//                       ? "bg-gradient-to-t from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg shadow-blue-500/50 border border-blue-400 text-white"
//                       : plan.buttonVariant === "outline"
//                         ? "bg-gradient-to-t from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 dark:from-neutral-800 dark:to-neutral-700 dark:hover:from-neutral-700 dark:hover:to-neutral-600 shadow-lg shadow-gray-200 dark:shadow-neutral-900 border border-gray-300 dark:border-neutral-600 text-gray-900 dark:text-white"
//                         : ""
//                   }`}
//                 >
//                   {plan.buttonText}
//                 </button>
                
//                 <ul className="space-y-2 font-semibold py-5">
//                   {plan.features.map((feature, featureIndex) => (
//                     <li key={featureIndex} className="flex items-center">
//                       <span className="text-neutral-800 dark:text-neutral-200 grid place-content-center mt-0.5 mr-3">
//                         {feature.icon}
//                       </span>
//                       <span className="text-sm text-gray-600 dark:text-gray-300">
//                         {feature.text}
//                       </span>
//                     </li>
//                   ))}
//                 </ul>

//                 <div className="space-y-3 pt-4 border-t border-neutral-200 dark:border-neutral-700">
//                   <h4 className="font-medium text-base text-gray-900 dark:text-white mb-3">
//                     {plan.includes[0]}
//                   </h4>
//                   <ul className="space-y-2 font-semibold">
//                     {plan.includes.slice(1).map((feature, featureIndex) => (
//                       <li key={featureIndex} className="flex items-center">
//                         <span className="h-6 w-6 bg-green-50 dark:bg-green-900/30 border border-blue-500 rounded-full grid place-content-center mt-0.5 mr-3">
//                           <CheckCheck className="h-4 w-4 text-blue-500" />
//                         </span>
//                         <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </CardContent>
//             </Card>
//           </TimelineContent>
//         ))}
//       </div>
//     </div>
//   );
// }
>>>>>>> 6bdcb071f8f981c2f992021d395030db71fccd29
