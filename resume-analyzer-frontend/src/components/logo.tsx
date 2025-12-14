import React from 'react'

// components/Logo.js
// export default function Logo({ className = "w-10 h-10" }) {
//   return (
//     <svg 
//       className={className} 
//       viewBox="0 0 24 24" 
//       fill="none" 
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       {/* Internal styles for the scan animation */}
//       <style>
//         {`
//           .scan-line {
//             animation: scan 2s infinite linear;
//             transform-origin: center;
//           }
//           @keyframes scan {
//             0% { transform: translateY(-4px); opacity: 0; }
//             20% { opacity: 1; }
//             80% { opacity: 1; }
//             100% { transform: translateY(4px); opacity: 0; }
//           }
//         `}
//       </style>
      
//       {/* Document Outline (Inherits color) */}
//       <path 
//         d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" 
//         stroke="currentColor" 
//         strokeWidth="2" 
//         strokeLinecap="round" 
//         strokeLinejoin="round"
//       />
      
//       {/* Blue Laser Scanner */}
//       <path 
//         className="scan-line" 
//         d="M7 12H17" 
//         stroke="#3B82F6" 
//         strokeWidth="2" 
//         strokeLinecap="round"
//       />
//     </svg>
//   );
// }

// components/MorphDocLogo.js
// components/NeuralYLogo.js
// components/PulseDocLogo.js
// components/IsometricYLogo.js
// export default function Logo({ className = "w-10 h-10" }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <style>{`
//         .levitate {
//           animation: float 3s ease-in-out infinite;
//         }
//         @keyframes float {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-3px); }
//         }
//       `}</style>
      
//       {/* Left Face (Darker shade in light mode for depth) */}
//       <path d="M12 13L2 8V18L12 23V13Z" fill="currentColor" opacity="0.75"/>
      
//       {/* Right Face (Medium shade) */}
//       <path d="M12 13L22 8V18L12 23V13Z" fill="currentColor" opacity="0.5"/>
      
//       {/* Top Face (The AI Intelligence - Blue) */}
//       <g class="levitate">
//         <path d="M12 11L2 6L12 1L22 6L12 11Z" fill="#3B82F6"/>
//         {/* Optional: A glow effect under the floating piece */}
//         <path d="M12 13L2 8L12 3L22 8L12 13Z" fill="black" opacity="0.2" transform="translate(0, 2) scale(0.9)"/>
//       </g>
//     </svg>
//   );
// }

// // components/HScannerLogo.js
// export default function HScannerLogo({ className = "w-10 h-10" }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <style>{`
//         .laser-beam {
//           animation: scanVertical 2.5s ease-in-out infinite alternate;
//         }
//         @keyframes scanVertical {
//           0% { transform: translateY(-4px); opacity: 0.5; }
//           50% { opacity: 1; }
//           100% { transform: translateY(4px); opacity: 0.5; }
//         }
//       `}</style>

//       {/* The Left Pillar of 'H' */}
//       <rect x="5" y="4" width="3" height="16" rx="1.5" fill="currentColor" />
      
//       {/* The Right Pillar of 'H' */}
//       <rect x="16" y="4" width="3" height="16" rx="1.5" fill="currentColor" />

//       {/* The Scanning Crossbar (The 'Sight') */}
//       <g className="laser-beam">
//          {/* The Bar */}
//         <path d="M8 12H16" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"/>
//         {/* The Glow effect */}
//         <circle cx="12" cy="12" r="2" fill="#3B82F6" opacity="0.3" filter="blur(1px)"/>
//       </g>
//     </svg>
//   );
// }

// // components/PolarisLogo.js
// export default function PolarisLogo({ className = "w-10 h-10" }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <style>{`
//         .core-pulse {
//           animation: starPulse 3s ease-in-out infinite alternate;
//           transform-origin: center;
//         }
//         .rays {
//           animation: raySpin 10s linear infinite;
//           transform-origin: center;
//         }
//         @keyframes starPulse {
//           0% { transform: scale(0.8); opacity: 0.8; }
//           100% { transform: scale(1.1); opacity: 1; filter: drop-shadow(0 0 2px #3B82F6); }
//         }
//         @keyframes raySpin {
//           0% { transform: rotate(0deg); }
//           100% { transform: rotate(360deg); }
//         }
//       `}</style>
      
//       {/* The Rotating Vision Rays (Future Expansion) */}
//       <g className="rays" opacity="0.3">
//         <path d="M12 2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
//         <path d="M12 18V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
//         <path d="M2 12H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
//         <path d="M18 12H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
//       </g>

//       {/* The Stable Container (The Brand) */}
//       <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" 
//             stroke="currentColor" strokeWidth="1.5" opacity="0.2"/>

//       {/* The AI Power Core (The Diamond Star) */}
//       <path className="core-pulse" d="M12 7L14.5 10.5L18 12L14.5 13.5L12 17L9.5 13.5L6 12L9.5 10.5L12 7Z" 
//             fill="#3B82F6"/>
//     </svg>
//   );
// }

// // components/GatewayLogo.js
export default function GatewayLogo({ className = "w-10 h-10" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <style>{`
        .shutter-cw {
          transform-origin: center;
          animation: spinCW 12s linear infinite;
        }
        .shutter-ccw {
          transform-origin: center;
          animation: spinCCW 12s linear infinite;
        }
        .core-glow {
          animation: deepPulse 4s ease-in-out infinite alternate;
        }
        @keyframes spinCW { 100% { transform: rotate(360deg); } }
        @keyframes spinCCW { 100% { transform: rotate(-360deg); } }
        @keyframes deepPulse {
          0% { r: 2.5; opacity: 0.7; }
          100% { r: 4; opacity: 1; filter: drop-shadow(0 0 3px #3B82F6); }
        }
      `}</style>
      
      {/* Static outer ring for structure */}
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="0.5" opacity="0.2"/>

      {/* Clockwise Shutter (Top/Bottom) */}
      {/* <g className="shutter-cw">
        <path d="M12 2C14 2 16 3 17 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 22C10 22 8 21 7 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </g> */}

      {/* Counter-Clockwise Shutter (Left/Right) */}
      <g className="shutter-ccw">
         <path d="M2 12C2 10 3 8 5 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
         <path d="M22 12C22 14 21 16 19 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </g>
      
      {/* The AI Core (The revealed insight) */}
      <circle className="core-glow" cx="12" cy="12" r="3" fill="#3B82F6" />
    </svg>
  );
}

