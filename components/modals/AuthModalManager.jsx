// "use client";
// import React, { useState } from "react";
// import LoginModal from "./LoginModal";
// import SignupModal from "./SignupModal";
// import ForgetPasswordModal from "./ForgetPasswordModal";
// import OTPModal from "./OTPModal";
// import ResetPasswordModal from "./ResetPasswordModal";
// import SuccessModal from "./SuccessModal";

// export default function AuthModalManager({ isOpen, onClose }) {
//   const [currentModal, setCurrentModal] = useState("login");
//   const [storedPhone, setStoredPhone] = useState(""); // Store phone for OTP flow

//   if (!isOpen) return null;

//   const handleCloseAll = () => {
//     setCurrentModal("login");
//     setStoredPhone("");
//     onClose();
//   };

//   return (
//     <>
//       {currentModal === "login" && (
//         <LoginModal
//           isOpen
//           onClose={handleCloseAll}
//           onSignup={() => setCurrentModal("signup")}
//           onForget={() => setCurrentModal("forget")}
//         />
//       )}

//       {currentModal === "signup" && (
//         <SignupModal
//           isOpen
//           onClose={handleCloseAll}
//           onLogin={() => setCurrentModal("login")}
//         />
//       )}

//       {currentModal === "forget" && (
//         <ForgetPasswordModal
//           isOpen
//           onClose={() => setCurrentModal("login")}
//           onNext={(phone) => {
//             setStoredPhone(phone);
//             setCurrentModal("otp");
//           }}
//         />
//       )}

//       {currentModal === "otp" && (
//         <OTPModal
//           isOpen
//           storedPhone={storedPhone}
//           onClose={() => {
//             setStoredPhone("");
//             setCurrentModal("forget");
//           }}
//           onNext={() => setCurrentModal("reset")}
//         />
//       )}

//       {currentModal === "reset" && (
//         <ResetPasswordModal
//           isOpen
//           onClose={() => setCurrentModal("otp")}
//           onNext={() => setCurrentModal("success")}
//         />
//       )}

//       {currentModal === "success" && (
//         <SuccessModal isOpen onClose={handleCloseAll} />
//       )}
//     </>
//   );
// }



"use client";
import React, { useState } from "react";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import ForgetPasswordModal from "./ForgetPasswordModal";
import OTPModal from "./OTPModal";
import ResetPasswordModal from "./ResetPasswordModal";
import SuccessModal from "./SuccessModal";

export default function AuthModalManager({ isOpen, onClose }) {
  const [currentModal, setCurrentModal] = useState("login");
  const [storedPhone, setStoredPhone] = useState("");
  const [verifiedOTP, setVerifiedOTP] = useState(""); // Store verified OTP

  if (!isOpen) return null;

  const handleCloseAll = () => {
    setCurrentModal("login");
    setStoredPhone("");
    setVerifiedOTP("");
    onClose();
  };

  return (
    <>
      {currentModal === "login" && (
        <LoginModal
          isOpen
          onClose={handleCloseAll}
          onSignup={() => setCurrentModal("signup")}
          onForget={() => setCurrentModal("forget")}
        />
      )}

      {currentModal === "signup" && (
        <SignupModal
          isOpen
          onClose={handleCloseAll}
          onLogin={() => setCurrentModal("login")}
        />
      )}

      {currentModal === "forget" && (
        <ForgetPasswordModal
          isOpen
          onClose={() => {
            setStoredPhone("");
            setCurrentModal("login");
          }}
          onNext={(phone) => {
            setStoredPhone(phone);
            setCurrentModal("otp");
          }}
        />
      )}

      {currentModal === "otp" && (
        <OTPModal
          isOpen
          storedPhone={storedPhone}
          onClose={() => {
            setStoredPhone("");
            setVerifiedOTP("");
            setCurrentModal("forget");
          }}
          onNext={(otp) => {
            setVerifiedOTP(otp); // Store the verified OTP
            setCurrentModal("reset");
          }}
        />
      )}

      {currentModal === "reset" && (
        <ResetPasswordModal
          isOpen
          verifiedOTP={verifiedOTP} // Pass verified OTP
          onClose={() => {
            setVerifiedOTP("");
            setCurrentModal("otp");
          }}
          onNext={() => setCurrentModal("success")}
        />
      )}

      {currentModal === "success" && (
        <SuccessModal isOpen onClose={handleCloseAll} />
      )}
    </>
  );
}