"use client";
import React, { useState } from "react";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import ForgetPasswordModal from "./ForgetPasswordModal";
import OTPModal from "./OTPModal";
import ResetPasswordModal from "./ResetPasswordModal";
import SuccessModal from "./SuccessModal";
//h
export default function AuthModalManager({ isOpen, onClose }) {
  const [currentModal, setCurrentModal] = useState("login");

  if (!isOpen) return null;

  const handleCloseAll = () => {
    setCurrentModal("login");
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
          onClose={() => setCurrentModal("login")}
          onNext={() => setCurrentModal("otp")}
        />
      )}

      {currentModal === "otp" && (
        <OTPModal
          isOpen
          onClose={() => setCurrentModal("forget")}
          onNext={() => setCurrentModal("reset")}
        />
      )}

      {currentModal === "reset" && (
        <ResetPasswordModal
          isOpen
          onClose={() => setCurrentModal("otp")}
          onNext={() => setCurrentModal("success")}
        />
      )}

      {currentModal === "success" && (
        <SuccessModal isOpen onClose={handleCloseAll} />
      )}
    </>
  );
}
