// "use client";

// import {
//     ArrowRight,
//     CreditCard,
//     Wallet,
//     Crown,
// } from "lucide-react";

// import { UpgradeValidationResponse } from "@/app/types/clientTypes/upgrade.types";

// interface UpgradeSummaryCardProps {
//     validation: UpgradeValidationResponse;
// }

// export default function UpgradeSummaryCard({
//     validation,
// }: UpgradeSummaryCardProps) {
//     const {
//         currentPlan,
//         requestedPlan,
//         wallet,
//     } = validation;

//     const enoughBalance = wallet.sufficient;

//     return (
//         <div
//             className="
//                 overflow-hidden
//                 rounded-3xl
//                 border
//                 border-slate-200
//                 bg-white
//                 shadow-[0_12px_40px_rgba(15,23,42,0.08)]
//             "
//         >
//             {/* Header */}
//             <div
//                 className="
//                     bg-gradient-to-r
//                     from-[#1592FF]
//                     via-[#2BA3FF]
//                     to-[#54B8FF]
//                     px-6
//                     py-7
//                     text-white
//                 "
//             >
//                 <div className="flex items-center gap-3">
//                     <div
//                         className="
//                             flex
//                             h-12
//                             w-12
//                             items-center
//                             justify-center
//                             rounded-2xl
//                             bg-white/15
//                             backdrop-blur
//                         "
//                     >
//                         <Crown size={24} />
//                     </div>

//                     <div>
//                         <p className="text-sm text-blue-100">
//                             Membership Upgrade
//                         </p>

//                         <h2 className="mt-1 text-2xl font-bold">
//                             Upgrade Summary
//                         </h2>
//                     </div>
//                 </div>
//             </div>

//             {/* Content */}
//             <div className="space-y-6 p-6">

//                 {/* Membership */}
//                 <div
//                     className="
//                         rounded-2xl
//                         border
//                         border-slate-200
//                         p-5
//                     "
//                 >
//                     <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
//                         Membership
//                     </p>

//                     <div className="flex items-center justify-between">

//                         <div>
//                             <p className="text-xs text-slate-500">
//                                 Current
//                             </p>

//                             <p className="mt-1 text-lg font-semibold text-slate-900">
//                                 {currentPlan.name}
//                             </p>
//                         </div>

//                         <ArrowRight
//                             size={22}
//                             className="text-[#1592FF]"
//                         />

//                         <div className="text-right">
//                             <p className="text-xs text-slate-500">
//                                 Upgrade To
//                             </p>

//                             <p className="mt-1 text-lg font-bold text-[#1592FF]">
//                                 {requestedPlan.name}
//                             </p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Upgrade Price */}
//                 <div
//                     className="
//                         flex
//                         items-center
//                         justify-between
//                         rounded-2xl
//                         bg-slate-50
//                         p-5
//                     "
//                 >
//                     <div className="flex items-center gap-3">
//                         <div
//                             className="
//                                 flex
//                                 h-11
//                                 w-11
//                                 items-center
//                                 justify-center
//                                 rounded-xl
//                                 bg-[#1592FF]/10
//                             "
//                         >
//                             <CreditCard
//                                 size={20}
//                                 className="text-[#1592FF]"
//                             />
//                         </div>

//                         <div>
//                             <p className="text-sm text-slate-500">
//                                 Upgrade Price
//                             </p>

//                             <p className="text-sm text-slate-400">
//                                 One-time payment
//                             </p>
//                         </div>
//                     </div>

//                     <p className="text-2xl font-bold text-slate-900">
//                         ₦
//                         {Number(
//                             requestedPlan.upgradePrice
//                         ).toLocaleString()}
//                     </p>
//                 </div>

//                 {/* Wallet */}
//                 <div
//                     className="
//                         flex
//                         items-center
//                         justify-between
//                         rounded-2xl
//                         border
//                         p-5
//                     "
//                 >
//                     <div className="flex items-center gap-3">
//                         <div
//                             className="
//                                 flex
//                                 h-11
//                                 w-11
//                                 items-center
//                                 justify-center
//                                 rounded-xl
//                                 bg-[#1592FF]/10
//                             "
//                         >
//                             <Wallet
//                                 size={20}
//                                 className="text-[#1592FF]"
//                             />
//                         </div>

//                         <div>
//                             <p className="text-sm text-slate-500">
//                                 Wallet Balance
//                             </p>

//                             <p
//                                 className={`mt-1 text-sm font-semibold ${
//                                     enoughBalance
//                                         ? "text-green-600"
//                                         : "text-red-600"
//                                 }`}
//                             >
//                                 {enoughBalance
//                                     ? "Sufficient Balance"
//                                     : "Insufficient Balance"}
//                             </p>
//                         </div>
//                     </div>

//                     <p className="text-xl font-bold text-slate-900">
//                         ₦
//                         {Number(
//                             wallet.balance
//                         ).toLocaleString()}
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// }