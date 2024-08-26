"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const profileFormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(30, {
      message: "Name must not be longer than 30 characters.",
    }),
  email: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email(),
  phone: z
    .string()
    .min(9, {
      message: "Phone number must be at least 9 characters.",
    })
    .max(15, {
      message: "Phone number must not be longer than 15 characters.",
    }),
  message: z.string().max(160).min(4),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

const defaultValues: Partial<ProfileFormValues> = {
  name: "",
  email: "",
  message: "",
  phone: "",
};

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: "onChange",
  });

  const submitForm = async (data: ProfileFormValues) => {
    toast({
      title: "Hold on!",
    });

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Error sending email");
      }

      const responseData = await response.json();

      toast({
        variant: "default",
        title: "Message sent!",
        description: "We'll get back to you soon.",
      });

      setLoading(false);
      form.reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Message not sent!",
        description: "We'll fix the problem ASAP.",
      });
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(submitForm)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Type your name here"
                    autoComplete="name"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Please enter your full name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Type your email here"
                    autoComplete="email"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Enter your email address for correspondence.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="Type your phone number here"
                    autoComplete="tel"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Enter your phone number for quick contact if needed.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Type your message here"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Please provide details about your inquiry or message.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-end">
            <Button type="submit" disabled={loading}>
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;