import { ArrowRight, Calendar, Clock, Search, User } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export const metadata: Metadata = {
  title: "Blog | Staff Stack",
  description:
    "Insights on agency operations, AI-native workflows, and building delivery capacity. Learn how agencies scale with StackCertified operators.",
};

const blogCategories = [
  { name: "All Categories", count: 24 },
  { name: "Agency Operations", count: 8 },
  { name: "AI Workflows", count: 6 },
  { name: "Delivery Capacity", count: 5 },
  { name: "Case Studies", count: 3 },
  { name: "Industry Trends", count: 2 },
];

const featuredPost = {
  id: 1,
  title: "Why Agencies Are Moving from VAs to Certified Operators",
  excerpt:
    "The traditional VA model is breaking down for agencies with complex delivery needs. Learn why StackCertified operators are becoming the new standard for agency capacity.",
  imageUrl: "/images/blog/team-collaboration.jpg",
  category: "Agency Operations",
  publishDate: "January 10, 2026",
  author: "Staff Stack Team",
  readTime: "7 min read",
};

const recentPosts = [
  {
    id: 2,
    title: "AI Workflow Proof: What It Means and Why It Matters",
    excerpt:
      "Every StackCertified operator demonstrates they can work with AI tools. Here's what our AI workflow certification actually tests.",
    imageUrl: "/images/blog/financial-analysis.jpg",
    category: "AI Workflows",
    publishDate: "January 6, 2026",
    author: "Staff Stack Team",
    readTime: "5 min read",
  },
  {
    id: 3,
    title: "Building a QA System That Actually Catches Errors",
    excerpt:
      "Campaign errors cost agencies clients. Learn how StackOps QA checklists reduce error rates and improve delivery quality.",
    imageUrl: "/images/blog/customer-support.jpg",
    category: "Delivery Capacity",
    publishDate: "January 2, 2026",
    author: "Staff Stack Team",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Case Study: How a Klaviyo Agency Shipped 40% More Campaigns",
    excerpt:
      "A retention agency added two StackCertified email builders. Here's how they increased campaign volume without sacrificing quality.",
    imageUrl: "/images/blog/philippines.jpg",
    category: "Case Studies",
    publishDate: "December 28, 2025",
    author: "Staff Stack Team",
    readTime: "8 min read",
  },
  {
    id: 5,
    title: "The Communication Simulation: Why We Test Before Placement",
    excerpt:
      "Loom walkthroughs, written updates, and escalation messages — how we verify operators can communicate clearly before they start.",
    imageUrl: "/images/blog/remote-tools.jpg",
    category: "Agency Operations",
    publishDate: "December 22, 2025",
    author: "Staff Stack Team",
    readTime: "5 min read",
  },
  {
    id: 6,
    title: "Paid Media Ops: The Role Agencies Didn't Know They Needed",
    excerpt:
      "Ad ops assistants handle the execution work so strategists can focus on strategy. Here's what this role actually does day-to-day.",
    imageUrl: "/images/blog/ecommerce.jpg",
    category: "Delivery Capacity",
    publishDate: "December 18, 2025",
    author: "Staff Stack Team",
    readTime: "6 min read",
  },
];

const popularPosts = [
  {
    id: 7,
    title: "How to Onboard a StackCertified Operator in 7 Days",
    publishDate: "December 12, 2025",
    category: "Agency Operations",
  },
  {
    id: 8,
    title: "Practical Tests vs. Generic Assessments: What's the Difference?",
    publishDate: "December 5, 2025",
    category: "AI Workflows",
  },
  {
    id: 9,
    title: "The 14-Day Replacement Guarantee: How It Works",
    publishDate: "November 28, 2025",
    category: "Agency Operations",
  },
  {
    id: 10,
    title: "Weekly KPI Check-ins: What We Track and Why",
    publishDate: "November 20, 2025",
    category: "Delivery Capacity",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="pt-24 pb-10 bg-gradient-to-b from-brand/5 to-background">
        <div className="container max-w-6xl">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-lexend font-bold mb-6 relative">
              Staff Stack <span className="text-brand">Blog</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 font-inter">
              Insights on agency operations, AI-native workflows, and building
              delivery capacity with StackCertified operators.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 bg-background">
        <div className="container max-w-6xl">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Main Content */}
            <div className="md:w-3/4">
              {/* Featured Article */}
              <div className="mb-12">
                <h2 className="text-2xl font-lexend font-bold mb-6">
                  Featured Article
                </h2>
                <Card className="overflow-hidden border-0 shadow-md">
                  <div className="relative h-80 w-full">
                    <Image
                      src={featuredPost.imageUrl}
                      alt={featuredPost.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge
                        variant="secondary"
                        className="bg-brand/10 hover:bg-brand/20 text-brand"
                      >
                        {featuredPost.category}
                      </Badge>
                      <span className="text-muted-foreground text-sm flex items-center gap-1 font-inter">
                        <Calendar className="h-3 w-3" />{" "}
                        {featuredPost.publishDate}
                      </span>
                    </div>
                    <CardTitle className="text-2xl font-lexend hover:text-brand transition-colors">
                      <Link href={`/blog/${featuredPost.id}`}>
                        {featuredPost.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="text-base font-inter">
                      {featuredPost.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="border-t pt-4 flex justify-between">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground font-inter">
                      <User className="h-3 w-3" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground font-inter">
                      <Clock className="h-3 w-3" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <Link
                      href={`/blog/${featuredPost.id}`}
                      className="text-sm font-medium text-brand hover:text-brand/80 flex items-center gap-1 font-lexend"
                    >
                      Read Article <ArrowRight className="h-4 w-4" />
                    </Link>
                  </CardFooter>
                </Card>
              </div>

              {/* Recent Articles */}
              <div className="mb-12">
                <h2 className="text-2xl font-lexend font-bold mb-6">
                  Recent Articles
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {recentPosts.map((post) => (
                    <Card
                      key={post.id}
                      className="overflow-hidden border shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="relative h-48 w-full">
                        <Image
                          src={post.imageUrl}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge
                            variant="secondary"
                            className="bg-brand/10 hover:bg-brand/20 text-brand"
                          >
                            {post.category}
                          </Badge>
                          <span className="text-muted-foreground text-xs flex items-center gap-1 font-inter">
                            <Calendar className="h-3 w-3" /> {post.publishDate}
                          </span>
                        </div>
                        <CardTitle className="text-lg font-lexend hover:text-brand transition-colors">
                          <Link href={`/blog/${post.id}`}>{post.title}</Link>
                        </CardTitle>
                        <CardDescription className="text-sm line-clamp-3 mt-1 font-inter">
                          {post.excerpt}
                        </CardDescription>
                      </CardHeader>
                      <CardFooter className="border-t pt-3 flex justify-between">
                        <div className="flex items-center gap-1 text-xs text-muted-foreground font-inter">
                          <User className="h-3 w-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground font-inter">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                <div className="mt-8 flex justify-center">
                  <Button
                    variant="outline"
                    className="text-brand border-brand hover:bg-brand/5 font-lexend"
                  >
                    View All Articles
                  </Button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="md:w-1/4">
              {/* Search */}
              <div className="mb-8">
                <h3 className="text-lg font-lexend font-semibold mb-3">
                  Search
                </h3>
                <div className="relative">
                  <Input
                    placeholder="Search articles..."
                    className="pr-10 font-inter"
                  />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                </div>
              </div>

              {/* Categories */}
              <div className="mb-8">
                <h3 className="text-lg font-lexend font-semibold mb-3">
                  Categories
                </h3>
                <div className="bg-muted/40 rounded-lg p-4">
                  <ul className="space-y-2">
                    {blogCategories.map((category) => (
                      <li
                        key={category.name}
                        className="flex justify-between items-center"
                      >
                        <Link
                          href={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
                          className="text-muted-foreground hover:text-foreground transition-colors font-inter"
                        >
                          {category.name}
                        </Link>
                        <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                          {category.count}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Popular Posts */}
              <div className="mb-8">
                <h3 className="text-lg font-lexend font-semibold mb-3">
                  Popular Posts
                </h3>
                <div className="bg-muted/40 rounded-lg p-4">
                  <ul className="space-y-4">
                    {popularPosts.map((post) => (
                      <li
                        key={post.id}
                        className="border-b pb-4 last:border-0 last:pb-0"
                      >
                        <Link
                          href={`/blog/${post.id}`}
                          className="font-medium hover:text-brand transition-colors text-sm block mb-1 font-lexend"
                        >
                          {post.title}
                        </Link>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground font-inter">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" /> {post.publishDate}
                          </span>
                          <Badge variant="outline" className="text-xs py-0 h-5">
                            {post.category}
                          </Badge>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Subscribe */}
              <div className="mb-8">
                <h3 className="text-lg font-lexend font-semibold mb-3">
                  Subscribe
                </h3>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base font-lexend">
                      Agency Capacity Insights
                    </CardTitle>
                    <CardDescription className="font-inter">
                      Get weekly insights on agency operations, AI workflows,
                      and delivery capacity.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Input placeholder="Your email" className="font-inter" />
                      <Button className="w-full bg-brand hover:bg-brand/90 font-lexend">
                        Subscribe
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-6xl">
          <div className="text-center p-8 md:p-12 bg-brand rounded-2xl text-white">
            <h3 className="text-2xl md:text-3xl font-lexend font-bold mb-4">
              Ready to add delivery capacity?
            </h3>
            <p className="mb-6 text-white/80 max-w-2xl mx-auto font-inter">
              StackCertified operators for your agency. Tested on real work.
              Ready in 7 days.
            </p>
            <Button
              size="lg"
              className="bg-brand-accent hover:bg-brand-accent/90 text-white font-lexend"
              asChild
            >
              <Link href="/contact-us">Get Your First Operator</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
