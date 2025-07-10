"use client"



import Link from "next/link"

import { useState } from "react"
import {
  Search,
  Plus,
  Code,
  Key,
  Download,
  Users,
  Trophy,
  Coins,
  TrendingUp,
  Star,
  Clock,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"

// Mock data for projects
const projects = [
  {
    id: 1,
    name: "AptosSwap",
    description: "Leading DEX on Aptos with automated market making",
    logo: "/placeholder.svg?height=60&width=60",
    category: "DeFi",
    chain: "Aptos",
    activeUsers: 12500,
    totalPoints: 2500000,
    activeQuests: 8,
    rewardsClaimed: 1250,
    trending: true,
    new: false,
    activity: 95,
  },
  {
    id: 2,
    name: "Aptos Punks",
    description: "Premier NFT collection and marketplace on Aptos",
    logo: "/placeholder.svg?height=60&width=60",
    category: "NFT",
    chain: "Aptos",
    activeUsers: 8900,
    totalPoints: 1800000,
    activeQuests: 5,
    rewardsClaimed: 890,
    trending: false,
    new: true,
    activity: 87,
  },
  {
    id: 3,
    name: "MoveQuest",
    description: "Adventure RPG game built natively on Move",
    logo: "/placeholder.svg?height=60&width=60",
    category: "GameFi",
    chain: "Aptos",
    activeUsers: 15600,
    totalPoints: 3200000,
    activeQuests: 12,
    rewardsClaimed: 2100,
    trending: true,
    new: false,
    activity: 98,
  },
  {
    id: 4,
    name: "Aptos Lend",
    description: "Decentralized lending protocol with dynamic rates",
    logo: "/placeholder.svg?height=60&width=60",
    category: "DeFi",
    chain: "Aptos",
    activeUsers: 6700,
    totalPoints: 1400000,
    activeQuests: 6,
    rewardsClaimed: 670,
    trending: false,
    new: false,
    activity: 78,
  },
  {
    id: 5,
    name: "Aptos Arena",
    description: "Competitive gaming platform with tournaments",
    logo: "/placeholder.svg?height=60&width=60",
    category: "GameFi",
    chain: "Aptos",
    activeUsers: 11200,
    totalPoints: 2100000,
    activeQuests: 9,
    rewardsClaimed: 1400,
    trending: true,
    new: true,
    activity: 92,
  },
  {
    id: 6,
    name: "Move Markets",
    description: "Prediction markets powered by Move smart contracts",
    logo: "/placeholder.svg?height=60&width=60",
    category: "DeFi",
    chain: "Aptos",
    activeUsers: 4500,
    totalPoints: 950000,
    activeQuests: 4,
    rewardsClaimed: 380,
    trending: false,
    new: false,
    activity: 65,
  },
]

export default function CredaDashboard() {
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [sortBy, setSortBy] = useState("activity")

  const filteredProjects = projects
    .filter((project) => {
      const matchesSearch =
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = categoryFilter === "all" || project.category === categoryFilter
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "activity":
          return b.activity - a.activity
        case "users":
          return b.activeUsers - a.activeUsers
        case "points":
          return b.totalPoints - a.totalPoints
        default:
          return 0
      }
    })

  const totalStats = projects.reduce(
    (acc, project) => ({
      users: acc.users + project.activeUsers,
      points: acc.points + project.totalPoints,
      quests: acc.quests + project.activeQuests,
      rewards: acc.rewards + project.rewardsClaimed,
    }),
    { users: 0, points: 0, quests: 0, rewards: 0 },
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      
      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 bg-gradient-to-r from-blue-500/10 to-blue-600/10 border-blue-200/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Active Users</CardTitle>
              <Users className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalStats.users.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                <TrendingUp className="w-3 h-3 inline mr-1" />
                +12.5% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 bg-gradient-to-r from-purple-500/10 to-purple-600/10 border-purple-200/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Points Earned</CardTitle>
              <Coins className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{(totalStats.points / 1000000).toFixed(1)}M</div>
              <p className="text-xs text-muted-foreground">
                <TrendingUp className="w-3 h-3 inline mr-1" />
                +8.2% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 bg-gradient-to-r from-green-500/10 to-green-600/10 border-green-200/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Quests</CardTitle>
              <Trophy className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalStats.quests}</div>
              <p className="text-xs text-muted-foreground">
                <Plus className="w-3 h-3 inline mr-1" />5 new this week
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 bg-gradient-to-r from-orange-500/10 to-orange-600/10 border-orange-200/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Rewards Claimed</CardTitle>
              <Star className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalStats.rewards.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                <TrendingUp className="w-3 h-3 inline mr-1" />
                +15.3% from last month
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Developer Resources */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Developer Resources</CardTitle>
                  <CardDescription>Build with Creda&apos;s developer-first infrastructure</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                <div>
                    <Link href="https://www.npmjs.com/package/creda-sdk">
                    <Button variant="outline" className="w-full justify-start bg-transparent" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Download SDK
                    </Button>
                    </Link>
                </div>

                <div>
                    <Link href="">
                    <Button variant="outline" className="w-full justify-start bg-transparent" size="sm">
                        <Code className="w-4 h-4 mr-2" />
                        Smart Contracts
                    </Button>
                    </Link>
                </div>

                <div>
                    <Link href="/dashboard/api-keys">
                    <Button variant="outline" className="w-full justify-start bg-transparent" size="sm">
                        <Key className="w-4 h-4 mr-2" />
                        API Keys
                    </Button>
                    </Link>
                </div>
                </CardContent>


              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                    <Plus className="w-4 h-4 mr-2" />
                    Launch Admin Panel
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent" size="sm">
                    Create New Quest
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent" size="sm">
                    View Analytics
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="DeFi">DeFi</SelectItem>
                    <SelectItem value="NFT">NFT</SelectItem>
                    <SelectItem value="GameFi">GameFi</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="activity">Activity</SelectItem>
                    <SelectItem value="users">Users</SelectItem>
                    <SelectItem value="points">Points</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProjects.map((project) => (
                <Card
                  key={project.id}
                  className="group hover:shadow-lg transition-all duration-200 cursor-pointer border-0 bg-card/50 backdrop-blur"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={project.logo || "/placeholder.svg"} />
                          <AvatarFallback>{project.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center gap-2">
                            <CardTitle className="text-lg">{project.name}</CardTitle>
                            {project.trending && (
                              <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200">
                                <TrendingUp className="w-3 h-3 mr-1" />
                                Trending
                              </Badge>
                            )}
                            {project.new && (
                              <Badge variant="secondary" className="bg-blue-100 text-blue-700 border-blue-200">
                                <Clock className="w-3 h-3 mr-1" />
                                New
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="outline" className="text-xs">
                              {project.category}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {project.chain}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                    </div>
                    <CardDescription className="mt-2">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Activity Progress */}
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-muted-foreground">Activity Level</span>
                          <span className="font-medium">{project.activity}%</span>
                        </div>
                        <Progress value={project.activity} className="h-2" />
                      </div>

                      {/* Stats Grid */}
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="text-muted-foreground">Active Users</div>
                          <div className="font-semibold">{project.activeUsers.toLocaleString()}</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Total Points</div>
                          <div className="font-semibold">{(project.totalPoints / 1000).toFixed(0)}K</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Active Quests</div>
                          <div className="font-semibold">{project.activeQuests}</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Rewards Claimed</div>
                          <div className="font-semibold">{project.rewardsClaimed}</div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2 pt-2">
                        <Button size="sm" className="flex-1">
                          View Details
                        </Button>
                        <Button size="sm" variant="outline">
                          Manage
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <div className="text-muted-foreground mb-2">No projects found</div>
                <div className="text-sm text-muted-foreground">Try adjusting your search or filter criteria</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
