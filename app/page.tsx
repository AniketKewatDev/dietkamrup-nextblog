import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function Home() {
  const featuredPosts = [
    {
      title: "UPSC Civil Services 2024 Notification Released",
      category: "Jobs",
      date: "2024-03-20",
      description: "Applications are invited for Civil Services Examination 2024. Last date to apply is April 15, 2024.",
      link: "/posts/upsc-civil-services-2024"
    },
    {
      title: "SSC CGL 2023 Final Result Declared",
      category: "Results",
      date: "2024-03-18",
      description: "Staff Selection Commission has declared the final result for Combined Graduate Level Examination 2023.",
      link: "/posts/ssc-cgl-2023-result"
    },
    // Add more featured posts
  ];

  return (
    <div className="container py-8">
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Latest Updates</h2>
          <Link href="/posts" className="text-primary hover:underline">
            View all posts →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredPosts.map((post) => (
            <Card key={post.link} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge>{post.category}</Badge>
                  <span className="text-sm text-muted-foreground">{post.date}</span>
                </div>
                <CardTitle className="line-clamp-2">
                  <Link href={post.link} className="hover:underline">
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription className="line-clamp-2">
                  {post.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href={post.link}
                  className="text-sm text-primary hover:underline"
                >
                  Read more →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-16 space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">Browse by Category</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Latest Jobs", count: 156, href: "/category/jobs" },
            { title: "Results", count: 89, href: "/category/results" },
            { title: "Admit Cards", count: 34, href: "/category/admit-cards" },
            { title: "Merit Lists", count: 67, href: "/category/merit-lists" },
          ].map((category) => (
            <Card key={category.href} className="hover:shadow-lg transition-shadow">
              <Link href={category.href}>
                <CardHeader>
                  <CardTitle>{category.title}</CardTitle>
                  <CardDescription>{category.count} posts</CardDescription>
                </CardHeader>
              </Link>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}