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
      message: "El nombre debe tener al menos 2 caracteres.",
    })
    .max(30, {
      message: "El nombre no debe tener más de 30 caracteres.",
    }),
  email: z
    .string({
      required_error: "Por favor, seleccione un correo electrónico para mostrar.",
    })
    .email(),
  phone: z
    .string()
    .min(9, {
      message: "El número de teléfono debe tener al menos 9 caracteres.",
    })
    .max(15, {
      message: "El número de teléfono no debe tener más de 15 caracteres.",
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

const ContactFormEs = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: "onChange",
  });

  const submitForm = async (data: ProfileFormValues) => {
    toast({
      title: "¡Un momento!",
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
        throw new Error("Error al enviar el correo electrónico");
      }

      const responseData = await response.json();

      toast({
        variant: "default",
        title: "¡Mensaje enviado!",
        description: "Nos pondremos en contacto contigo pronto.",
      });

      setLoading(false);
      form.reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "¡Mensaje no enviado!",
        description: "Arreglaremos el problema lo antes posible.",
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
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Escribe tu nombre aquí"
                    autoComplete="name"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Por favor, introduce tu nombre completo.
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
                <FormLabel>Correo electrónico</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Escribe tu correo electrónico aquí"
                    autoComplete="email"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Introduce tu dirección de correo electrónico para correspondencia.
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
                <FormLabel>Teléfono</FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="Escribe tu número de teléfono aquí"
                    autoComplete="tel"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Introduce tu número de teléfono para contacto rápido si es necesario.
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
                <FormLabel>Mensaje</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Escribe tu mensaje aquí"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Por favor, proporciona detalles sobre tu consulta o mensaje.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-end">
            <Button type="submit" disabled={loading}>
              Enviar
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ContactFormEs;