// "use client";

// import {
//     CheckCircle2,
//     Loader2,
//     XCircle,
// } from "lucide-react";

// import { UpgradeCheck } from "@/app/types/clientTypes/upgrade.types";

// interface UpgradeChecklistProps {
//     checks: UpgradeCheck[];

//     currentStep: number;

//     completedSteps: number[];
// }

// export default function UpgradeChecklist({
//     checks,
//     currentStep,
//     completedSteps,
// }: UpgradeChecklistProps) {
//     return (
//         <div className="space-y-4">
//             {checks.map((check, index) => {
//                 const active =
//                     currentStep === index;

//                 const completed =
//                     completedSteps.includes(index);

//                 return (
//                     <div
//                         key={check.key}
//                         className={`
//                             rounded-2xl
//                             border
//                             p-4
//                             transition-all
//                             duration-500
//                             ${
//                                 completed
//                                     ? check.passed
//                                         ? "border-green-200 bg-green-50"
//                                         : "border-red-200 bg-red-50"
//                                     : "border-slate-200 bg-white"
//                             }
//                         `}
//                     >
//                         <div className="flex items-start gap-4">
//                             {/* Status */}

//                             <div
//                                 className="
//                                     mt-0.5
//                                     flex
//                                     h-10
//                                     w-10
//                                     items-center
//                                     justify-center
//                                     rounded-full
//                                     bg-white
//                                     shadow-sm
//                                 "
//                             >
//                                 {active &&
//                                 !completed ? (
//                                     <Loader2
//                                         size={18}
//                                         className="
//                                             animate-spin
//                                             text-[#1592FF]
//                                         "
//                                     />
//                                 ) : completed ? (
//                                     check.passed ? (
//                                         <CheckCircle2
//                                             size={22}
//                                             className="text-green-500"
//                                         />
//                                     ) : (
//                                         <XCircle
//                                             size={22}
//                                             className="text-red-500"
//                                         />
//                                     )
//                                 ) : (
//                                     <div
//                                         className="
//                                             h-3
//                                             w-3
//                                             rounded-full
//                                             bg-slate-300
//                                         "
//                                     />
//                                 )}
//                             </div>

//                             {/* Content */}

//                             <div className="flex-1">
//                                 <h3
//                                     className="
//                                         text-sm
//                                         font-semibold
//                                         text-slate-900
//                                     "
//                                 >
//                                     {check.title}
//                                 </h3>

//                                 <p
//                                     className="
//                                         mt-1
//                                         text-xs
//                                         leading-5
//                                         text-slate-500
//                                     "
//                                 >
//                                     {check.description}
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 );
//             })}
//         </div>
//     );
// }