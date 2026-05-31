"use client";

import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics";

const WHATSAPP_NUMBER = "6236155588 99".replace(/\s/g, "");

interface WhatsAppButtonProps {
  vehicleName?: string;
  variant?: "default" | "floating" | "icon";
  className?: string;
}

function buildMessage(vehicleName?: string): string {
  if (vehicleName) {
    return `Hi Sanur Ride Co.! I'm interested in renting the ${vehicleName}. Can you share availability and pricing?`;
  }
  return "Hi Sanur Ride Co.! I'm interested in renting a vehicle. Can you help me?";
}

export function WhatsAppButton({
  vehicleName,
  variant = "default",
  className,
}: WhatsAppButtonProps) {
  const handleClick = () => {
    trackEvent("whatsapp_click", { vehicle: vehicleName ?? "general" });
    const message = buildMessage(vehicleName);
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  if (variant === "floating") {
    return (
      <button
        onClick={handleClick}
        aria-label="Chat on WhatsApp"
        className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 ${className ?? ""}`}
      >
        <MessageCircle className="h-7 w-7 fill-white stroke-none" />
      </button>
    );
  }

  if (variant === "icon") {
    return (
      <Button
        onClick={handleClick}
        variant="ghost"
        size="icon"
        aria-label="Chat on WhatsApp"
        className={className}
      >
        <MessageCircle className="h-5 w-5 text-[#25D366]" />
      </Button>
    );
  }

  return (
    <Button
      onClick={handleClick}
      className={`bg-[#25D366] text-white hover:bg-[#1ebe5d] ${className ?? ""}`}
    >
      <MessageCircle className="mr-2 h-4 w-4" />
      WhatsApp Us
    </Button>
  );
}
