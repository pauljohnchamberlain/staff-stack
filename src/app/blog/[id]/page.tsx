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
import { Separator } from "@/components/ui/separator";
import {
  ArrowRight,
  Calendar,
  Clock,
  MessageSquare,
  Share2,
  Tag,
  User,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "How Offshore Teams Can Drive Innovation for Technology Companies | Staff Stack Blog",
  description:
    "Discover how building offshore development teams can accelerate innovation while reducing costs for technology companies.",
};

const post = {
  id: 1,
  title: "How Offshore Teams Can Drive Innovation for Technology Companies",
  excerpt:
    "Discover how leading tech companies are leveraging offshore development teams to accelerate innovation and gain a competitive edge in today's fast-paced market.",
  imageUrl: "/images/blog/team-collaboration.jpg",
  category: "Offshore Staffing",
  publishDate: "May 14, 2025",
  author: {
    name: "Sarah Johnson",
    role: "Head of Business Development",
    avatar: "/images/blog/author-avatar.jpg",
  },
  readTime: "7 min read",
  tags: ["Offshore Development", "Innovation", "Technology", "Remote Teams"],
  content: [
    {
      type: "paragraph",
      content:
        "In today's rapidly evolving technology landscape, companies face immense pressure to innovate faster while keeping costs under control. This challenge has led many forward-thinking tech companies to look beyond their geographical boundaries for talented developers and technologists who can help drive innovation.",
    },
    {
      type: "heading",
      content: "The Innovation Challenge for Tech Companies",
    },
    {
      type: "paragraph",
      content:
        "Technology companies, particularly startups and scale-ups, face a common set of challenges when it comes to innovation:",
    },
    {
      type: "list",
      items: [
        "Limited access to specialized talent in local markets",
        "High costs associated with hiring and maintaining in-house teams",
        "Difficulty scaling teams up or down based on project needs",
        "Intense competition for top tech talent",
        "Pressure to reduce time-to-market for new features and products",
      ],
    },
    {
      type: "paragraph",
      content:
        "These challenges can significantly hamper a company's ability to innovate and stay competitive. However, offshore development teams have emerged as a strategic solution that addresses these pain points while enabling companies to accelerate their innovation initiatives.",
    },
    {
      type: "heading",
      content: "How Offshore Teams Drive Innovation",
    },
    {
      type: "paragraph",
      content:
        "Offshore teams can be powerful drivers of innovation for technology companies in several key ways:",
    },
    {
      type: "subheading",
      content: "1. Access to Global Talent Pools",
    },
    {
      type: "paragraph",
      content:
        "Perhaps the most significant advantage of offshore teams is access to vast pools of specialized talent that might not be readily available in a company's local market. Countries like the Philippines have emerged as technology hubs with large numbers of highly skilled developers, engineers, and technologists across various specializations.",
    },
    {
      type: "paragraph",
      content:
        "By tapping into these global talent pools, companies can find specialists in emerging technologies like artificial intelligence, blockchain, IoT, and cloud computing, even when such talent is scarce or prohibitively expensive in their home countries.",
    },
    {
      type: "subheading",
      content: "2. Cost-Effective Scaling",
    },
    {
      type: "paragraph",
      content:
        "Innovation often requires experimentation and iteration, which means companies need the flexibility to scale teams up or down quickly. Offshore teams provide this flexibility at a fraction of the cost of maintaining similar capabilities in-house.",
    },
    {
      type: "paragraph",
      content:
        "For example, a US-based tech company might pay $150,000-$200,000 annually for a senior developer, whereas a similarly qualified developer in the Philippines might cost $30,000-$50,000. This cost advantage allows companies to build larger, more specialized teams than they could afford domestically, enabling them to pursue more innovative projects simultaneously.",
    },
    {
      type: "subheading",
      content: "3. 24-Hour Development Cycles",
    },
    {
      type: "paragraph",
      content:
        "With teams distributed across different time zones, companies can implement a 'follow-the-sun' development model, where work continues around the clock. This approach can significantly reduce development timelines and accelerate time-to-market for new products and features.",
    },
    {
      type: "paragraph",
      content:
        "For instance, a team in the Philippines can pick up where a US team left off at the end of their workday, effectively creating a continuous development cycle that can dramatically speed up innovation processes.",
    },
    {
      type: "heading",
      content: "Real-World Success Stories",
    },
    {
      type: "paragraph",
      content:
        "Many technology companies have successfully leveraged offshore teams to drive innovation. Here are a few examples:",
    },
    {
      type: "paragraph",
      content:
        "A US-based SaaS company expanded its development capacity by building an offshore team of 15 developers and QA specialists in the Philippines. This team took ownership of several key product features, allowing the company to accelerate its product roadmap and launch new capabilities 40% faster than previously possible.",
    },
    {
      type: "paragraph",
      content:
        "A European fintech startup utilized an offshore team to develop and implement AI-driven fraud detection algorithms. By accessing specialized machine learning expertise in the Philippines, they were able to bring this innovative capability to market months ahead of competitors at a significantly lower cost.",
    },
    {
      type: "heading",
      content: "Best Practices for Innovation with Offshore Teams",
    },
    {
      type: "paragraph",
      content:
        "To maximize the innovation potential of offshore teams, technology companies should follow these best practices:",
    },
    {
      type: "list",
      items: [
        "Treat offshore team members as integral parts of your organization, not as vendors",
        "Implement robust communication and collaboration tools to bridge geographic distances",
        "Create clear processes for knowledge sharing between onshore and offshore teams",
        "Establish dedicated innovation initiatives that offshore teams can lead or contribute to",
        "Invest in cultural alignment and team-building activities to foster cohesion",
        "Provide offshore teams with the autonomy and resources they need to experiment and innovate",
      ],
    },
    {
      type: "heading",
      content: "Conclusion",
    },
    {
      type: "paragraph",
      content:
        "As technology companies face increasing pressure to innovate faster and more efficiently, offshore teams have emerged as a strategic asset that can provide access to specialized talent, cost-effective scaling, and accelerated development cycles.",
    },
    {
      type: "paragraph",
      content:
        "By following best practices and working with experienced offshore staffing partners like Staff Stack, technology companies can transform their offshore teams into powerful engines of innovation that drive competitive advantage in today's fast-paced market.",
    },
  ],
};

const relatedPosts = [
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

export default function BlogPostPage({ params }: { params: { id: string } }) {
  return (
    <>
      <section className="pt-24 pb-10 bg-gradient-to-b from-sky-50 to-background">
        <div className="container max-w-6xl">
          <div className="flex flex-col max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Badge
                variant="secondary"
                className="bg-brand/10 hover:bg-brand/20 text-brand"
              >
                {post.category}
              </Badge>
              <span className="text-muted-foreground text-sm flex items-center gap-1">
                <Calendar className="h-3 w-3" /> {post.publishDate}
              </span>
              <span className="text-muted-foreground text-sm flex items-center gap-1">
                <Clock className="h-3 w-3" /> {post.readTime}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 mb-8">
              <div className="relative h-12 w-12 rounded-full overflow-hidden">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-medium">{post.author.name}</p>
                <p className="text-sm text-muted-foreground">
                  {post.author.role}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-background">
        <div className="container max-w-6xl">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Main Content */}
            <div className="md:w-3/4">
              {/* Featured Image */}
              <div className="relative h-[400px] w-full mb-8 rounded-xl overflow-hidden">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Article Content */}
              <article className="prose prose-lg max-w-none">
                {post.content.map((block, index) => {
                  if (block.type === "paragraph" && block.content) {
                    return (
                      <p
                        key={`paragraph-${block.content.substring(0, 20)}-${index}`}
                        className="mb-6 text-muted-foreground"
                      >
                        {block.content}
                      </p>
                    );
                  }

                  if (block.type === "heading" && block.content) {
                    return (
                      <h2
                        key={`heading-${block.content.substring(0, 20)}-${index}`}
                        className="text-2xl font-bold mt-10 mb-4"
                      >
                        {block.content}
                      </h2>
                    );
                  }

                  if (block.type === "subheading" && block.content) {
                    return (
                      <h3
                        key={`subheading-${block.content.substring(0, 20)}-${index}`}
                        className="text-xl font-bold mt-8 mb-3"
                      >
                        {block.content}
                      </h3>
                    );
                  }

                  if (
                    block.type === "list" &&
                    block.items &&
                    block.items.length > 0
                  ) {
                    return (
                      <ul
                        key={`list-${block.items.length}-${block.items[0].substring(0, 20)}`}
                        className="space-y-2 mb-6 list-disc pl-6"
                      >
                        {block.items.map((item, itemIndex) => (
                          <li
                            key={`item-${item.substring(0, 20)}-${itemIndex}`}
                            className="text-muted-foreground"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    );
                  }

                  return null;
                })}
              </article>

              {/* Tags */}
              <div className="flex flex-wrap items-center gap-3 mt-12 mb-8">
                <Tag className="h-4 w-4 text-muted-foreground" />
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="hover:bg-muted">
                    {tag}
                  </Badge>
                ))}
              </div>

              <Separator className="my-10" />

              {/* Share and Comment */}
              <div className="flex justify-between items-center mb-16">
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Comments (5)
                  </Button>
                </div>
              </div>

              {/* Author Bio */}
              <div className="bg-muted/30 rounded-xl p-6 mb-16">
                <div className="flex items-start gap-4">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">
                      About {post.author.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {post.author.role}
                    </p>
                    <p className="text-muted-foreground">
                      Sarah Johnson is a business development expert with over
                      10 years of experience in the offshore staffing industry.
                      She has helped dozens of companies build successful remote
                      teams and optimize their global operations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Related Articles */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <Card
                      key={relatedPost.id}
                      className="overflow-hidden border shadow hover:shadow-md transition-shadow"
                    >
                      <div className="relative h-40 w-full">
                        <Image
                          src={relatedPost.imageUrl}
                          alt={relatedPost.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <Badge
                          variant="secondary"
                          className="w-fit mb-2 bg-brand/10 hover:bg-brand/20 text-brand"
                        >
                          {relatedPost.category}
                        </Badge>
                        <CardTitle className="text-base hover:text-brand transition-colors">
                          <Link href={`/blog/${relatedPost.id}`}>
                            {relatedPost.title}
                          </Link>
                        </CardTitle>
                      </CardHeader>
                      <CardFooter className="pt-0 flex justify-between">
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          <span>{relatedPost.publishDate}</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          <span>{relatedPost.readTime}</span>
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="md:w-1/4">
              <div className="sticky top-24 space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Subscribe to Our Newsletter
                    </CardTitle>
                    <CardDescription>
                      Get the latest insights on offshore staffing delivered to
                      your inbox.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-brand hover:bg-brand/90">
                      Subscribe Now
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Need Help Building Your Team?
                    </CardTitle>
                    <CardDescription>
                      Our experts can help you find the perfect offshore staff
                      for your business needs.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      className="w-full bg-brand-accent hover:bg-brand-accent/90 text-white"
                      asChild
                    >
                      <Link href="/contact-us">Contact Us</Link>
                    </Button>
                  </CardContent>
                </Card>

                <div className="bg-muted/40 rounded-lg p-4">
                  <h3 className="font-semibold mb-3">Popular Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-brand/10 hover:bg-brand/20 text-brand">
                      <Link href="/blog/category/offshore-staffing">
                        Offshore Staffing
                      </Link>
                    </Badge>
                    <Badge className="bg-brand/10 hover:bg-brand/20 text-brand">
                      <Link href="/blog/category/remote-teams">
                        Remote Teams
                      </Link>
                    </Badge>
                    <Badge className="bg-brand/10 hover:bg-brand/20 text-brand">
                      <Link href="/blog/category/business-strategy">
                        Business Strategy
                      </Link>
                    </Badge>
                    <Badge className="bg-brand/10 hover:bg-brand/20 text-brand">
                      <Link href="/blog/category/case-studies">
                        Case Studies
                      </Link>
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand text-white">
        <div className="container max-w-6xl text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to build your offshore team?
          </h3>
          <p className="mb-6 text-white/80 max-w-2xl mx-auto">
            Let's discuss how Staff Stack can help grow and manage your business
            with dedicated offshore professionals.
          </p>
          <Button
            size="lg"
            className="bg-white text-brand hover:bg-white/90"
            asChild
          >
            <Link href="/contact-us">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
