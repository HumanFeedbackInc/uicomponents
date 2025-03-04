"use client"

import { useState } from "react"
import { UserTable } from "@/components/user-table"
import { UserDetailsModal } from "@/components/user-details-modal"
import { ThemeToggle } from "@/components/theme-toggle"
import type { User } from "@/types/user"

// Mock data for demonstration
const mockPendingUsers: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    status: "pending",
    submittedAt: "2023-05-15T10:30:00Z",
    questionnaire: {
      investmentExperience: "Intermediate",
      riskTolerance: "Medium",
      investmentGoals: "Retirement",
      annualIncome: "$100,000 - $150,000",
      netWorth: "$500,000 - $1,000,000",
      sourceOfFunds: "Employment",
      timeHorizon: "10+ years",
    },
    personalDetails: {
      address: "123 Main St, New York, NY 10001",
      phone: "+1 (555) 123-4567",
      dateOfBirth: "1985-07-22",
      occupation: "Software Engineer",
      employer: "Tech Solutions Inc.",
      taxResidency: "United States",
      identificationNumber: "XXX-XX-1234",
    },
    documents: {
      governmentId: "/placeholder.svg?height=300&width=400",
      voidCheque: "/placeholder.svg?height=300&width=400",
    },
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    status: "pending",
    submittedAt: "2023-05-16T14:45:00Z",
    questionnaire: {
      investmentExperience: "Beginner",
      riskTolerance: "Low",
      investmentGoals: "Education",
      annualIncome: "$75,000 - $100,000",
      netWorth: "$250,000 - $500,000",
      sourceOfFunds: "Savings",
      timeHorizon: "5-10 years",
    },
    personalDetails: {
      address: "456 Park Ave, Boston, MA 02108",
      phone: "+1 (555) 987-6543",
      dateOfBirth: "1990-03-15",
      occupation: "Marketing Manager",
      employer: "Brand Builders LLC",
      taxResidency: "United States",
      identificationNumber: "XXX-XX-5678",
    },
    documents: {
      governmentId: "/placeholder.svg?height=300&width=400",
      voidCheque: "/placeholder.svg?height=300&width=400",
    },
  },
  {
    id: "3",
    name: "Robert Johnson",
    email: "robert.johnson@example.com",
    status: "pending",
    submittedAt: "2023-05-17T09:15:00Z",
    questionnaire: {
      investmentExperience: "Advanced",
      riskTolerance: "High",
      investmentGoals: "Wealth Accumulation",
      annualIncome: "$200,000+",
      netWorth: "$1,000,000+",
      sourceOfFunds: "Business Income",
      timeHorizon: "15+ years",
    },
    personalDetails: {
      address: "789 Oak Dr, San Francisco, CA 94107",
      phone: "+1 (555) 456-7890",
      dateOfBirth: "1975-11-30",
      occupation: "Business Owner",
      employer: "Johnson Enterprises",
      taxResidency: "United States",
      identificationNumber: "XXX-XX-9012",
    },
    documents: {
      governmentId: "/placeholder.svg?height=300&width=400",
      voidCheque: "/placeholder.svg?height=300&width=400",
    },
  },
]

export function UserApprovalDashboard() {
  const [users, setUsers] = useState<User[]>(mockPendingUsers)
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleUserSelect = (user: User) => {
    setSelectedUser(user)
    setIsModalOpen(true)
  }

  const handleApproveUser = (userId: string) => {
    setUsers(users.map((user) => (user.id === userId ? { ...user, status: "approved" } : user)))
    setIsModalOpen(false)
  }

  const handleRejectUser = (userId: string) => {
    setUsers(users.map((user) => (user.id === userId ? { ...user, status: "rejected" } : user)))
    setIsModalOpen(false)
  }

  const handleRequestClarification = (userId: string, message: string) => {
    setUsers(
      users.map((user) =>
        user.id === userId ? { ...user, status: "clarification_requested", clarificationMessage: message } : user,
      ),
    )
    setIsModalOpen(false)
  }

  const pendingUsers = users.filter((user) => user.status === "pending")

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-primary">User Approval Dashboard</h1>
        <ThemeToggle />
      </div>

      <UserTable users={pendingUsers} onUserSelect={handleUserSelect} />

      {selectedUser && (
        <UserDetailsModal
          user={selectedUser}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onApprove={handleApproveUser}
          onReject={handleRejectUser}
          onRequestClarification={handleRequestClarification}
        />
      )}
    </div>
  )
}

