"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Shield,
  Users,
  Mail,
  User,
  LogOut,
  MoreHorizontal,
  Eye,
  Edit,
  Trash,
  Search,
  Filter,
  Download,
  Plus,
} from "lucide-react"

// Sample data for inquiries
const inquiries = [
  {
    id: "INQ-001",
    name: "John Smith",
    email: "john@example.com",
    phone: "(555) 123-4567",
    service: "Security Guards",
    date: "2023-05-15",
    status: "New",
  },
  {
    id: "INQ-002",
    name: "Sarah Johnson",
    email: "sarah@example.com",
    phone: "(555) 987-6543",
    service: "Event Security",
    date: "2023-05-14",
    status: "In Progress",
  },
  {
    id: "INQ-003",
    name: "Michael Chen",
    email: "michael@example.com",
    phone: "(555) 456-7890",
    service: "Armed Personnel",
    date: "2023-05-13",
    status: "Contacted",
  },
  {
    id: "INQ-004",
    name: "Emily Rodriguez",
    email: "emily@example.com",
    phone: "(555) 234-5678",
    service: "Housekeeping",
    date: "2023-05-12",
    status: "Closed",
  },
  {
    id: "INQ-005",
    name: "David Wilson",
    email: "david@example.com",
    phone: "(555) 876-5432",
    service: "Bouncers",
    date: "2023-05-11",
    status: "New",
  },
]

// Sample data for personnel
const personnel = [
  {
    id: "EMP-001",
    name: "Robert Johnson",
    position: "Security Guard",
    location: "New York",
    status: "Active",
    experience: "5 years",
  },
  {
    id: "EMP-002",
    name: "Lisa Thompson",
    position: "Security Guard",
    location: "Chicago",
    status: "Active",
    experience: "3 years",
  },
  {
    id: "EMP-003",
    name: "James Wilson",
    position: "Bouncer",
    location: "New York",
    status: "On Leave",
    experience: "4 years",
  },
  {
    id: "EMP-004",
    name: "Maria Garcia",
    position: "Housekeeping",
    location: "Los Angeles",
    status: "Active",
    experience: "2 years",
  },
  {
    id: "EMP-005",
    name: "Thomas Brown",
    position: "Armed Guard",
    location: "Miami",
    status: "Active",
    experience: "7 years",
  },
]

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTab, setSelectedTab] = useState("inquiries");
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<string | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple authentication for demo purposes
    if (username === "admin" && password === "password") {
      setIsAuthenticated(true);
      setLoginError("");
    } else {
      setLoginError("Invalid username or password");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername("");
    setPassword("");
  };

  const handleDelete = (id: string, type: string) => {
    setItemToDelete(id);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    console.log(`Deleting ${itemToDelete}`);
    setDeleteDialogOpen(false);
    setItemToDelete(null);
    // In a real application, you would delete the item from your database here
  };

  // Filter inquiries based on search query
  const filteredInquiries = inquiries.filter(inquiry => 
    inquiry.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    inquiry.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    inquiry.service.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Filter personnel based on search query
  const filteredPersonnel = personnel.filter(person => 
    person.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    person.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
    person.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <div className="flex justify-center">
              <Shield className="h-12 w-12 text-primary" />
            </div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight">
              Admin Dashboard Login
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Enter your credentials to access the admin dashboard
            </p>
          </div>
          
          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleLogin} className="space-y-4">
                {loginError && (
                  <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm">
                    {loginError}
                  </div>
                )}
                
                <div className="space-y-2">
                  <label htmlFor="username" className="text-sm font-medium">
                    Username
                  </label>
                  <Input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium">
                    Password
                  </label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  Sign In
                </Button>
              </form>
            </CardContent>
            <CardFooter className="text-center text-xs text-muted-foreground">
              <p className="w-full">
                For demo purposes, use username: <span className="font-semibold">admin</span> and password: <span className="font-semibold">password</span>
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Admin Header */}
      <header className="border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">SecureForce Admin</span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="h-4 w-4 text-primary" />
              </div>
              <span className="text-sm font-medium">Admin User</span>
            </div>
            
            <Button variant="ghost" size="icon" onClick={handleLogout}>
              <LogOut className="h-5 w-5" />
              <span className="sr-only">Log out</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Admin Dashboard */}
      <main className="flex-1 bg-slate-50 py-8">
        <div className="container">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
            <p className="text-muted-foreground">
              Manage inquiries and personnel from a central location
            </p>
          </div>
          
          {/* Dashboard Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Inquiries</p>
                    <h3 className="text-3xl font-bold">42</h3>
                  </div>
                  <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">New Inquiries</p>
                    <h3 className="text-3xl font-bold">12</h3>
                  </div>
                  <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-green-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Active Personnel</p>
                    <h3 className="text-3xl font-bold">156</h3>
                  </div>
                  <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Assignments</p>
                    <h3 className="text-3xl font-bold">38</h3>
                  </div>
                  <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Search and Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search inquiries or personnel..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
                <span className="sr-only">Filter</span>
              </Button>
              <Button variant="outline" size="icon">
                <Download className="h-4 w-4" />
                <span className="sr-only">Download</span>
              </Button>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                <span>Add New</span>
              </Button>
            </div>
          </div>
          
          {/* Tabs for Inquiries and Personnel */}
          <Tabs defaultValue="inquiries" onValueChange={setSelectedTab}>
            <TabsList className="mb-6">
              <TabsTrigger value="inquiries">Inquiries</TabsTrigger>
              <TabsTrigger value="personnel">Personnel</TabsTrigger>
            </TabsList>
            
            <TabsContent value="inquiries">
              <Card>
                <CardHeader>
                  <CardTitle>Inquiries</CardTitle>
                  <CardDescription>
                    Manage and respond to customer inquiries and service requests.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Service</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredInquiries.length > 0 ? (
                        filteredInquiries.map((inquiry) => (
                          <TableRow key={inquiry.id}>
                            <TableCell className="font-medium">{inquiry.id}</TableCell>
                            <TableCell>
                              <div>
                                <div>{inquiry.name}</div>
                                <div className="text-xs text-muted-foreground">{inquiry.email}</div>
                              </div>
                            </TableCell>
                            <TableCell>{inquiry.service}</TableCell>
                            <TableCell>{inquiry.date}</TableCell>
                            <TableCell>
                              <div className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                                inquiry.status === "New" 
                                  ? "bg-green-100 text-green-800" 
                                  : inquiry.status === "In Progress" 
                                  ? "bg-blue-100 text-blue-800"
                                  : inquiry.status === "Contacted"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-slate-100 text-slate-800"
                              }`}>
                                {inquiry.status}
                              </div>
                            </TableCell>
                            <TableCell className="text-right">
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="icon">
                                    <MoreHorizontal className="h-4 w-4" />
                                    <span className="sr-only">Actions</span>
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem>
                                    <Eye className="h-4 w-4 mr-2" />
                                    View Details
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <Edit className="h-4 w-4 mr-2" />
                                    Edit Inquiry
                                  </DropdownMenuItem>
                                  <DropdownMenuItem onClick={() => handleDelete(inquiry.id, "inquiry")}>
                                    <Trash className="h-4 w-4 mr-2" />
                                    Delete Inquiry
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </TableRow>
                        ))
                      ) : (
                        <TableRow>
                          <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                            No inquiries found matching your search.
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="personnel">
              <Card>
                <CardHeader>
                  <CardTitle>Personnel</CardTitle>
                  <CardDescription>
                    Manage security personnel, their assignments, and availability.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Position</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredPersonnel.length > 0 ? (
                        filteredPersonnel.map((person) => (
                          <TableRow key={person.id}>
                            <TableCell className="font-medium">{person.id}</TableCell>
                            <TableCell>
                              <div className="flex items-center gap-3">
                                <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center">
                                  <User className="h-4 w-4 text-slate-600" />
                                </div>
                                <div>{person.name}</div>
                              </div>
                            </TableCell>
                            <TableCell>{person.position}</TableCell>
                            <TableCell>{person.location}</TableCell>
                            <TableCell>
                              <div className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                                person.status === "Active" 
                                  ? "bg-green-100 text-green-800" 
                                  : "bg-yellow-100 text-yellow-800"
                              }`}>
                                {person.status}
                              </div>
                            </TableCell>
                            <TableCell className="text-right">
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="icon">
                                    <MoreHorizontal className="h-4 w-4" />
                                    <span className="sr-only">Actions</span>
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem>
                                    <Eye className="h-4 w-4 mr-2" />
                                    View Profile
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <Edit className="h-4 w-4 mr-2" />
                                    Edit Personnel
                                  </DropdownMenuItem>
                                  <DropdownMenuItem onClick={() => handleDelete(person.id, "personnel")}>
                                    <Trash className="h-4 w-4 mr-2" />
                                    Delete Personnel
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </TableRow>
                        ))
                      ) : (
                        <TableRow>
                          <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                            No personnel found matching your search.
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  
