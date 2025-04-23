"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const testimonials = [
  {
    id: "1",
    company: "TechVision Software",
    logo: "https://ext.same-assets.com/2073858358/2822076010.svg",
    author: "David Wilson",
    role: "CTO",
    text: "Exceeded my expectations in every way. The developers we hired through Staff Stack have transformed our development capacity, delivering high-quality code and innovative solutions.",
    rating: 5,
  },
  {
    id: "2",
    company: "Global Support Solutions",
    logo: "https://ext.same-assets.com/2073858358/1617793967.svg",
    author: "Sarah Miller",
    role: "Customer Service Director",
    text: "We've been working with Staff Stack for three years now and couldn't be happier with our dedicated support team. They've become an integral part of our operations. Their dedication, expertise, and professionalism make them a valuable asset.",
    rating: 5,
  },
  {
    id: "3",
    company: "FinTech Innovations",
    logo: "https://ext.same-assets.com/2073858358/3553358302.svg",
    author: "Michael Chen",
    role: "COO",
    text: "Staff Stack helped us quickly scale our business with highly qualified staff. The transition was smooth, and we now have a talented team that feels like an extension of our company rather than a separate entity.",
    rating: 5,
  },
  {
    id: "4",
    company: "Creative Digital Agency",
    logo: "https://ext.same-assets.com/2073858358/3387356777.svg",
    author: "Emily Rodriguez",
    role: "Creative Director",
    text: "The creative team we hired through Staff Stack has transformed our brand presence. They consistently deliver exceptional quality and fresh ideas that have significantly boosted our engagement metrics.",
    rating: 5,
  },
];

const brands = [
  {
    id: "forbes1",
    name: "Forbes",
    url: "https://ext.same-assets.com/1414563758/2522500107.svg",
  },
  {
    id: "inc",
    name: "Inc",
    url: "https://ext.same-assets.com/1414563758/2458401565.svg",
  },
  {
    id: "usatoday",
    name: "USA Today",
    url: "https://ext.same-assets.com/1414563758/2338476488.svg",
  },
  {
    id: "clutch",
    name: "Clutch",
    url: "https://ext.same-assets.com/1414563758/822725178.svg",
  },
  {
    id: "forbes2",
    name: "Forbes",
    url: "https://ext.same-assets.com/2941768483/535086739.png",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-lexend font-bold mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-inter">
            Hear from businesses like yours who have transformed their
            operations with our offshore staffing solutions.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={testimonial.id}
                className="md:basis-1/2 lg:basis-1/3 pl-4"
              >
                <div className="h-full">
                  <Card className="border-none shadow-sm h-full">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          {Array(5)
                            .fill(0)
                            .map((_, i) => (
                              <Star
                                key={`star-${testimonial.id}-${i}`}
                                className={`h-4 w-4 ${
                                  i < testimonial.rating
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "text-muted-foreground/30"
                                }`}
                              />
                            ))}
                        </div>
                        <p className="italic text-muted-foreground font-inter">
                          "{testimonial.text}"
                        </p>
                        <div className="flex items-center gap-3 pt-4">
                          <Avatar>
                            <AvatarImage
                              src={testimonial.logo}
                              alt={testimonial.company}
                              crossOrigin="anonymous"
                            />
                            <AvatarFallback>
                              {testimonial.company.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-lexend font-medium">
                              {testimonial.author}
                            </h4>
                            <p className="text-muted-foreground text-sm font-inter">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-8">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>

        <div className="mt-16 pt-8 border-t">
          <h3 className="text-center text-lg font-lexend font-medium mb-8">
            Trusted by Leading Companies
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {brands.map((brand) => (
              <div
                key={brand.id}
                className="w-24 md:w-32 opacity-70 hover:opacity-100 transition-opacity"
              >
                <img
                  src={brand.url}
                  alt={brand.name}
                  width={120}
                  height={40}
                  className="mx-auto"
                  crossOrigin="anonymous"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
