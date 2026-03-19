"use client";

import React from "react";
import { texts } from "@/i18n";

export default function PrivacyPolicy() {
  const t = texts["en"]; // English version

  return (
    <main className="bg-[rgb(var(--bg))] text-[rgb(var(--fg))] min-h-screen px-5 py-20 max-w-4xl mx-auto">
      <h1 className="text-4xl font-[var(--font-serif)] mb-8">Privacy Policy</h1>

      <p className="mb-4">
        At Una Trattoria, we value your privacy and are committed to protecting
        any personal information you share with us. This Privacy Policy explains
        how we collect, use, and safeguard your information.
      </p>

      <h2 className="text-2xl font-[var(--font-serif)] mt-6 mb-3">Information We Collect</h2>
      <p className="mb-4">
        We may collect personal information such as your name, email address,
        phone number, and delivery address when you place an order, make a
        reservation, or contact us.
      </p>

      <h2 className="text-2xl font-[var(--font-serif)] mt-6 mb-3">How We Use Your Information</h2>
      <p className="mb-4">
        Your information is used solely for the purpose of:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Processing your orders and reservations</li>
        <li>Responding to inquiries or requests</li>
        <li>Improving our services and website experience</li>
      </ul>

      <h2 className="text-2xl font-[var(--font-serif)] mt-6 mb-3">Sharing Your Information</h2>
      <p className="mb-4">
        We do not sell, trade, or rent your personal information to others.
        Information may be shared with trusted third-party service providers
        solely to fulfill your orders or reservations.
      </p>

      <h2 className="text-2xl font-[var(--font-serif)] mt-6 mb-3">Cookies</h2>
      <p className="mb-4">
        Our website uses cookies to enhance your browsing experience. Cookies
        help us remember your preferences and improve website functionality.
      </p>

      <h2 className="text-2xl font-[var(--font-serif)] mt-6 mb-3">Security</h2>
      <p className="mb-4">
        We implement appropriate security measures to protect your personal
        information. However, no method of transmission over the internet is
        completely secure.
      </p>

      <h2 className="text-2xl font-[var(--font-serif)] mt-6 mb-3">Your Rights</h2>
      <p className="mb-4">
        You have the right to access, update, or delete your personal
        information. For any requests, please contact us at:
      </p>
      <p className="mb-4 font-medium">
        Email: info@unatrattoria.rs
      </p>

      <h2 className="text-2xl font-[var(--font-serif)] mt-6 mb-3">Changes to This Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. Changes will be
        posted on this page, and the updated policy will be effective
        immediately upon posting.
      </p>

      <p className="mt-8 text-sm text-white/60">
        © {new Date().getFullYear()} Una Trattoria. All rights reserved.
      </p>
    </main>
  );
}