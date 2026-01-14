"use client";

import { Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    id: "1",
    company: "Retention Agency (Klaviyo Partner)",
    vertical: "Retention",
    author: "Sarah Chen",
    role: "Founder",
    text: "We added two Klaviyo email builders through Staff Stack. They passed their certification tests before we even interviewed them — we could see their actual flow builds. Now we're shipping 40% more campaigns without adding to our core team.",
    rating: 5,
  },
  {
    id: "2",
    company: "Performance Media Co",
    vertical: "Paid Media",
    author: "Marcus Williams",
    role: "Head of Operations",
    text: "Our strategists were drowning in campaign builds and reporting. The ad ops assistant we hired handles all the execution work now. Our strategist time freed up by 15+ hours per week — exactly what we needed to take on more clients.",
    rating: 5,
  },
  {
    id: "3",
    company: "Shopify Plus Agency",
    vertical: "Shopify",
    author: "James Park",
    role: "Technical Director",
    text: "Project overflow was killing our deadlines. We brought on a StackCertified Shopify developer who hit the ground running — their certification included fixing a real bug under time pressure. That's exactly the test that matters for our work.",
    rating: 5,
  },
  {
    id: "4",
    company: "Email Growth Partners",
    vertical: "Retention",
    author: "Emily Rodriguez",
    role: "Managing Partner",
    text: "The QA specialist we hired catches issues our team was missing. Links, rendering, UTMs — they have a checklist for everything. Our error rate dropped significantly in the first month. Worth every penny.",
    rating: 5,
  },
  {
    id: "5",
    company: "Conversion Lab Agency",
    vertical: "Paid Media",
    author: "David Kim",
    role: "CEO",
    text: "We needed reporting capacity fast. The analyst we got can build Looker dashboards, automate reports, and actually understands attribution. They proved it in their certification — not just talked about it in an interview.",
    rating: 5,
  },
];

const verticalColors: Record<string, string> = {
  Retention: "bg-purple-100 text-purple-700",
  "Paid Media": "bg-blue-100 text-blue-700",
  Shopify: "bg-green-100 text-green-700",
};

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-lexend font-bold mb-4">
            What Agency Leaders Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-inter">
            Agencies using StackCertified operators to add capacity without adding chaos.
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
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="md:basis-1/2 lg:basis-1/3 pl-4"
              >
                <div className="h-full">
                  <Card className="border-none shadow-sm h-full">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
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
                          <span
                            className={`text-xs px-2 py-1 rounded-full font-inter ${verticalColors[testimonial.vertical]}`}
                          >
                            {testimonial.vertical}
                          </span>
                        </div>
                        <p className="text-muted-foreground font-inter text-sm leading-relaxed">
                          "{testimonial.text}"
                        </p>
                        <div className="flex items-center gap-3 pt-4 border-t">
                          <Avatar className="h-10 w-10">
                            <AvatarFallback className="bg-brand/10 text-brand font-lexend font-medium">
                              {testimonial.author
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-lexend font-medium text-sm">
                              {testimonial.author}
                            </h4>
                            <p className="text-muted-foreground text-xs font-inter">
                              {testimonial.role}, {testimonial.company}
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
          <h3 className="text-center text-lg font-lexend font-medium mb-6">
            Trusted by Agencies Across Three Verticals
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full">
              <span className="w-2 h-2 bg-purple-500 rounded-full" />
              <span className="text-sm font-inter text-purple-700">
                Retention & Klaviyo
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
              <span className="w-2 h-2 bg-blue-500 rounded-full" />
              <span className="text-sm font-inter text-blue-700">
                Paid Media Ops
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              <span className="text-sm font-inter text-green-700">
                Shopify Dev
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
