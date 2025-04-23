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
import { ArrowRight, Calendar, Clock, Search, User } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Staff Stack",
  description:
    "Stay informed with the latest insights, trends, and best practices in outsourcing, remote team management, and the Philippines IT industry.",
};

const blogCategories = [
  { name: "All Categories", count: 38 },
  { name: "Offshore Staffing", count: 12 },
  { name: "Remote Teams", count: 10 },
  { name: "Business Strategy", count: 8 },
  { name: "Industry Insights", count: 5 },
  { name: "Case Studies", count: 3 },
];

const featuredPost = {
  id: 1,
  title: "How Offshore Teams Can Drive Innovation for Technology Companies",
  excerpt:
    "Discover how leading tech companies are leveraging offshore development teams to accelerate innovation and gain a competitive edge in today's fast-paced market.",
  imageUrl: "/images/blog/team-collaboration.jpg",
  category: "Offshore Staffing",
  publishDate: "May 14, 2025",
  author: "Sarah Johnson",
  readTime: "7 min read",
};

const recentPosts = [
  {
    id: 2,
    title:
      "5 Key Benefits of Hiring Remote Financial Analysts for Your Business",
    excerpt:
      "Financial analysis is a critical function for businesses of all sizes. Learn how remote financial analysts can provide expertise while reducing costs.",
    imageUrl: "/images/blog/financial-analysis.jpg",
    category: "Remote Teams",
    publishDate: "May 10, 2025",
    author: "Michael Chen",
    readTime: "5 min read",
  },
  {
    id: 3,
    title: "Building a Successful Customer Support Team with Offshore Staff",
    excerpt:
      "Customer support can make or break your business. Discover how to build, train, and manage an effective offshore customer support team.",
    imageUrl: "/images/blog/customer-support.jpg",
    category: "Offshore Staffing",
    publishDate: "May 5, 2025",
    author: "Jessica Torres",
    readTime: "6 min read",
  },
  {
    id: 4,
    title:
      "The Philippines: Why It's the Premier Destination for IT Outsourcing",
    excerpt:
      "With a highly educated workforce, strong English skills, and competitive costs, the Philippines has become a top choice for IT outsourcing.",
    imageUrl: "/images/blog/philippines.jpg",
    category: "Industry Insights",
    publishDate: "April 28, 2025",
    author: "David Reyes",
    readTime: "8 min read",
  },
  {
    id: 5,
    title: "Essential Tools for Managing Your Remote Development Team",
    excerpt:
      "The right tools can make remote team management seamless. Explore the essential software and systems for effective remote development team coordination.",
    imageUrl: "/images/blog/remote-tools.jpg",
    category: "Remote Teams",
    publishDate: "April 22, 2025",
    author: "Lisa Wang",
    readTime: "6 min read",
  },
  {
    id: 6,
    title:
      "Case Study: How E-commerce Giant Scaled Operations with Offshore Staff",
    excerpt:
      "This case study examines how a growing e-commerce company used offshore staff to scale operations during peak seasons while maintaining customer satisfaction.",
    imageUrl: "/images/blog/ecommerce.jpg",
    category: "Case Studies",
    publishDate: "April 15, 2025",
    author: "Marcus Johnson",
    readTime: "10 min read",
  },
];

const popularPosts = [
  {
    id: 7,
    title: "10 Tips for Successfully Onboarding Offshore Team Members",
    publishDate: "April 8, 2025",
    category: "Offshore Staffing",
  },
  {
    id: 8,
    title: "Cost Comparison: In-house vs. Offshore Development Teams",
    publishDate: "March 30, 2025",
    category: "Business Strategy",
  },
  {
    id: 9,
    title: "How to Overcome Cultural Differences in Global Teams",
    publishDate: "March 22, 2025",
    category: "Remote Teams",
  },
  {
    id: 10,
    title: "The Future of Work: Trends Shaping Remote and Offshore Staffing",
    publishDate: "March 15, 2025",
    category: "Industry Insights",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="pt-24 pb-10 bg-gradient-to-b from-sky-50 to-background">
        <div className="container max-w-6xl">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 relative">
              Staff Stack <span className="text-brand">Blog</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Industry insights, tips, and news about offshore staffing, remote
              teams, and growing your business with dedicated offshore
              professionals.
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
                <h2 className="text-2xl font-bold mb-6">Featured Article</h2>
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
                      <span className="text-muted-foreground text-sm flex items-center gap-1">
                        <Calendar className="h-3 w-3" />{" "}
                        {featuredPost.publishDate}
                      </span>
                    </div>
                    <CardTitle className="text-2xl hover:text-brand transition-colors">
                      <Link href={`/blog/${featuredPost.id}`}>
                        {featuredPost.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="text-base">
                      {featuredPost.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="border-t pt-4 flex justify-between">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <User className="h-3 w-3" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <Link
                      href={`/blog/${featuredPost.id}`}
                      className="text-sm font-medium text-brand hover:text-brand/80 flex items-center gap-1"
                    >
                      Read Article <ArrowRight className="h-4 w-4" />
                    </Link>
                  </CardFooter>
                </Card>
              </div>

              {/* Recent Articles */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Recent Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {recentPosts.map((post) => (
                    <Card
                      key={post.id}
                      className="overflow-hidden border shadow hover:shadow-md transition-shadow"
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
                          <span className="text-muted-foreground text-xs flex items-center gap-1">
                            <Calendar className="h-3 w-3" /> {post.publishDate}
                          </span>
                        </div>
                        <CardTitle className="text-lg hover:text-brand transition-colors">
                          <Link href={`/blog/${post.id}`}>{post.title}</Link>
                        </CardTitle>
                        <CardDescription className="text-sm line-clamp-3 mt-1">
                          {post.excerpt}
                        </CardDescription>
                      </CardHeader>
                      <CardFooter className="border-t pt-3 flex justify-between">
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <User className="h-3 w-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
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
                    className="text-brand border-brand hover:bg-brand/5"
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
                <h3 className="text-lg font-semibold mb-3">Search</h3>
                <div className="relative">
                  <Input placeholder="Search articles..." className="pr-10" />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                </div>
              </div>

              {/* Categories */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3">Categories</h3>
                <div className="bg-muted/40 rounded-lg p-4">
                  <ul className="space-y-2">
                    {blogCategories.map((category) => (
                      <li
                        key={category.name}
                        className="flex justify-between items-center"
                      >
                        <Link
                          href={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
                          className="text-muted-foreground hover:text-foreground transition-colors"
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
                <h3 className="text-lg font-semibold mb-3">Popular Posts</h3>
                <div className="bg-muted/40 rounded-lg p-4">
                  <ul className="space-y-4">
                    {popularPosts.map((post) => (
                      <li
                        key={post.id}
                        className="border-b pb-4 last:border-0 last:pb-0"
                      >
                        <Link
                          href={`/blog/${post.id}`}
                          className="font-medium hover:text-brand transition-colors text-sm block mb-1"
                        >
                          {post.title}
                        </Link>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
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
                <h3 className="text-lg font-semibold mb-3">Subscribe</h3>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">
                      Get Latest Updates
                    </CardTitle>
                    <CardDescription>
                      Subscribe to our newsletter for the latest industry
                      insights.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Input placeholder="Your email" />
                      <Button className="w-full bg-brand hover:bg-brand/90">
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
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to build your offshore team?
            </h3>
            <p className="mb-6 text-white/80 max-w-2xl mx-auto">
              Let's discuss how Staff Stack can help grow and manage your
              business with dedicated offshore professionals.
            </p>
            <Button
              size="lg"
              className="bg-white text-brand hover:bg-white/90"
              asChild
            >
              <Link href="/contact-us">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
