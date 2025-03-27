import { Users, Trophy, Compass, ShieldCheck, Github, Twitter, Facebook, DiscIcon as Discord } from "lucide-react"

export default function Home(){
    return(<div className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
            <div className="flex gap-6 md:gap-10">
              <a href="/" className="flex items-center space-x-2">
                <Compass className="h-6 w-6 text-primary" />
                <span className="inline-block font-bold ewert-regular">CARAVAN ONLINE</span>
              </a>
              <nav className="hidden gap-6 md:flex">
                <a
                  href="#features"
                  className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
                >
                  Features
                </a>
                <a
                  href="#screenshots"
                  className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
                >
                  Screenshots
                </a>
                <a
                  href="#community"
                  className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
                >
                  Community
                </a>
                <a
                  href="#faq"
                  className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
                >
                  FAQ
                </a>
              </nav>
            </div>
            <div className="flex flex-1 items-center justify-end space-x-4">
              <nav className="flex items-center space-x-2">
                <a
                  href="/login"
                  className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Login
                </a>
                <a
                  href="/register"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Play Now
                </a>
              </nav>
            </div>
          </div>
        </header>
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-30">
              <img src="/placeholder.jpg" alt="Caravan Online background" className="object-cover w-full h-full" />
            </div>
            <div className="container relative z-10 px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="ewert-regular text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white">
                    CARAVAN ONLINE
                  </h1>
                  <p className="mx-auto max-w-[700px] text-zinc-200 md:text-xl playfair-display">
                    The card game from the wasteland.
                  </p>
                </div>
                <div className="space-x-4">
                  <button className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                    Play Now
                  </button>
                  <button className="inline-flex h-11 items-center justify-center rounded-md border border-white bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                    Watch Trailer
                  </button>
                </div>
              </div>
            </div>
          </section>
  
          <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-background">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Game Features</h2>
                  <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                    Discover what makes Caravan Online a unique gaming experience
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                <div className="grid gap-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Compass className="h-5 w-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">Vast Open World</h3>
                      <p className="text-muted-foreground">
                        Explore diverse landscapes from deserts to mountains, each with unique challenges and treasures.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">Multiplayer Trading</h3>
                      <p className="text-muted-foreground">
                        Build your caravan empire by trading with other players in a dynamic economy.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid gap-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Trophy className="h-5 w-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">Competitive Gameplay</h3>
                      <p className="text-muted-foreground">
                        Compete in seasonal events and climb the leaderboards to earn exclusive rewards.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <ShieldCheck className="h-5 w-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">Strategic Combat</h3>
                      <p className="text-muted-foreground">
                        Defend your caravan from bandits and rival traders with tactical combat mechanics.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
  
          <section id="screenshots" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Game Screenshots</h2>
                  <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                    Take a glimpse into the world of Caravan Online
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="overflow-hidden rounded-lg">
                    <img
                      src={`/screenshot-${i}.jpg`}
                      alt={`Game screenshot ${i}`}
                      className="aspect-video w-full object-cover transition-all hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
  
          <section id="community" className="w-full py-12 md:py-24 lg:py-32 bg-background">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Join Our Community</h2>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                      Connect with thousands of players, share strategies, and stay updated on the latest game
                      developments.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 gap-1">
                      <Discord className="h-5 w-5" />
                      Join Discord
                    </button>
                    <button className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 gap-1">
                      <Twitter className="h-5 w-5" />
                      Follow on Twitter
                    </button>
                  </div>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">10,000+ Players</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Trophy className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Daily Tournaments</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="overflow-hidden rounded-lg border bg-background p-2">
                    <img
                      src="/community-hub.jpg"
                      alt="Community hub screenshot"
                      className="aspect-video rounded-md object-cover w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
  
          <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ready to Begin Your Journey?</h2>
                  <p className="mx-auto max-w-[700px] text-zinc-200 md:text-xl">
                    Join thousands of players already exploring the world of Caravan Online.
                  </p>
                </div>
                <div className="mx-auto w-full max-w-sm space-y-2">
                  <button className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                    Play Now for Free
                  </button>
                  <p className="text-xs text-zinc-400">Available on PC, Mac, and mobile devices</p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="w-full border-t bg-background py-6">
          <div className="container flex flex-col items-center justify-between gap-4 md:flex-row md:gap-0">
            <div className="flex items-center gap-2">
              <Compass className="h-6 w-6 text-primary" />
              <p className="text-sm font-medium">© 2025 Caravan Online. All rights reserved.</p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
            <nav className="flex gap-4 text-sm">
              <a href="#" className="text-muted-foreground hover:text-foreground">
                Privacy
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                Terms
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                Contact
              </a>
            </nav>
          </div>
        </footer>
      </div>)
}