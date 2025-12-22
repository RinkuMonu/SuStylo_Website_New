    "use client";
    import React from "react";

    export default function PrivacyPolicy() {
        return (
            <section className="min-h-screen bg-[#5d7d75] flex items-center justify-center px-4 py-12 mt-10">
                <div className="w-full max-w-5xl bg-[#f6efe4] rounded-lg shadow-xl p-8 md:p-12">

                    <div className="mb-5">
                        <h1 className="text-3xl md:text-4xl font-bold  text-center mb-6">
                        Privacy Policy
                    </h1>
                        <hr className="border-t-2 border-gray-500 mb-6" />                
                    <p className="mx-auto">
                        We value your privacy and are committed to protecting your personal
                        information. This Privacy Policy outlines how we collect, use, and
                        safeguard your data when you use our services.
                    </p>
                    </div>


                    <div className="space-y-6  leading-relaxed text-sm md:text-base">
                        <div>
                            <h2 className="text-lg font-semibold text-[#f6efe4] mb-2">
                                Information We Collect
                            </h2>
                            <p>
                                We may collect personal details such as your name, phone number,
                                email address, and service preferences when you interact with our
                                platform.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-[#f6efe4] mb-2">
                                How We Use Your Information
                            </h2>
                            <p>
                                Your information helps us manage appointments, improve our
                                services, process payments, and communicate important updates.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-[#f6efe4] mb-2">
                                Data Security
                            </h2>
                            <p>
                                We implement industry-standard security measures to protect your
                                personal data against unauthorized access or misuse.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-[#f6efe4] mb-2">
                                Third-Party Services
                            </h2>
                            <p>
                                We may share limited information with trusted third-party service
                                providers solely for operational and payment processing purposes.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-[#f6efe4] mb-2">
                                Your Rights
                            </h2>
                            <p>
                                You have the right to access, update, or request deletion of your
                                personal information at any time.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-[#f6efe4] mb-2">
                                Contact Us
                            </h2>
                            <p>
                                If you have any questions regarding this Privacy Policy, please
                                contact our support team.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
