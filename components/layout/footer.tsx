import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/about" className="text-muted-foreground hover:text-foreground">About</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
              <li><Link href="/privacy-policy" className="text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Categories</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/category/jobs" className="text-muted-foreground hover:text-foreground">Jobs</Link></li>
              <li><Link href="/category/results" className="text-muted-foreground hover:text-foreground">Results</Link></li>
              <li><Link href="/category/admit-cards" className="text-muted-foreground hover:text-foreground">Admit Cards</Link></li>
              <li><Link href="/category/merit-lists" className="text-muted-foreground hover:text-foreground">Merit Lists</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Twitter</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Facebook</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">LinkedIn</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Telegram</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="mt-4 text-sm text-muted-foreground">Subscribe to get job updates directly in your inbox.</p>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} DietKamrup.in. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}