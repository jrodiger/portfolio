"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      // Here you would typically send the data to your email service
      // For now, we'll just simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSuccess(true);
      e.currentTarget.reset();
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="flex flex-col items-center justify-center min-h-[60vh] py-12">
      <div className="container flex items-center justify-center">
        <div className="w-full max-w-2xl px-4 md:px-6">
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
                Get in Touch
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-lg text-center">
                Have a question or want to work together? Feel free to reach out!
              </p>
            </div>
            <Card className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-3 py-2 border rounded-md bg-background text-foreground"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 py-2 border rounded-md bg-background text-foreground"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-3 py-2 border rounded-md bg-background text-foreground resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
                {isSuccess && (
                  <p className="text-green-500 dark:text-green-400 text-center">
                    Message sent successfully! I'll get back to you soon.
                  </p>
                )}
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
} 