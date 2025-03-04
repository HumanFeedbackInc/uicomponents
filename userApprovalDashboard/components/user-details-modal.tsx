"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, XCircle, HelpCircle, UserIcon, FileQuestion, FileText } from "lucide-react"
import type { User } from "@/types/user"
import { formatDate } from "@/lib/utils"
import { DocumentReview } from "@/components/document-review"

interface UserDetailsModalProps {
  user: User
  isOpen: boolean
  onClose: () => void
  onApprove: (userId: string) => void
  onReject: (userId: string) => void
  onRequestClarification: (userId: string, message: string) => void
}

export function UserDetailsModal({
  user,
  isOpen,
  onClose,
  onApprove,
  onReject,
  onRequestClarification,
}: UserDetailsModalProps) {
  const [clarificationMessage, setClarificationMessage] = useState("")
  const [showClarificationInput, setShowClarificationInput] = useState(false)

  const handleRequestClarification = () => {
    if (showClarificationInput) {
      if (clarificationMessage.trim()) {
        onRequestClarification(user.id, clarificationMessage)
        setClarificationMessage("")
        setShowClarificationInput(false)
      }
    } else {
      setShowClarificationInput(true)
    }
  }

  const handleCancel = () => {
    setShowClarificationInput(false)
    setClarificationMessage("")
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">User Review: {user.name}</DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="questionnaire" className="mt-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="questionnaire" className="flex items-center gap-2">
              <FileQuestion className="h-4 w-4" />
              KYC Questionnaire
            </TabsTrigger>
            <TabsTrigger value="personal" className="flex items-center gap-2">
              <UserIcon className="h-4 w-4" />
              Personal Details
            </TabsTrigger>
            <TabsTrigger value="documents" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Documents
            </TabsTrigger>
          </TabsList>

          <TabsContent value="questionnaire" className="mt-4 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h3 className="font-semibold text-muted-foreground">Investment Experience</h3>
                <p>{user.questionnaire.investmentExperience}</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-muted-foreground">Risk Tolerance</h3>
                <p>{user.questionnaire.riskTolerance}</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-muted-foreground">Investment Goals</h3>
                <p>{user.questionnaire.investmentGoals}</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-muted-foreground">Annual Income</h3>
                <p>{user.questionnaire.annualIncome}</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-muted-foreground">Net Worth</h3>
                <p>{user.questionnaire.netWorth}</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-muted-foreground">Source of Funds</h3>
                <p>{user.questionnaire.sourceOfFunds}</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-muted-foreground">Time Horizon</h3>
                <p>{user.questionnaire.timeHorizon}</p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="personal" className="mt-4 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h3 className="font-semibold text-muted-foreground">Full Name</h3>
                <p>{user.name}</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-muted-foreground">Email</h3>
                <p>{user.email}</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-muted-foreground">Address</h3>
                <p>{user.personalDetails.address}</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-muted-foreground">Phone</h3>
                <p>{user.personalDetails.phone}</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-muted-foreground">Date of Birth</h3>
                <p>{user.personalDetails.dateOfBirth}</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-muted-foreground">Occupation</h3>
                <p>{user.personalDetails.occupation}</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-muted-foreground">Employer</h3>
                <p>{user.personalDetails.employer}</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-muted-foreground">Tax Residency</h3>
                <p>{user.personalDetails.taxResidency}</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-muted-foreground">ID Number</h3>
                <p>{user.personalDetails.identificationNumber}</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-muted-foreground">Submitted At</h3>
                <p>{formatDate(user.submittedAt)}</p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="documents" className="mt-4 space-y-4">
            <DocumentReview governmentId={user.documents.governmentId} voidCheque={user.documents.voidCheque} />
          </TabsContent>
        </Tabs>

        {showClarificationInput ? (
          <div className="mt-4 space-y-4">
            <Textarea
              placeholder="Enter your clarification request..."
              value={clarificationMessage}
              onChange={(e) => setClarificationMessage(e.target.value)}
              className="min-h-[100px]"
            />
            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={handleCancel}>
                Cancel
              </Button>
              <Button onClick={handleRequestClarification} disabled={!clarificationMessage.trim()}>
                Send Request
              </Button>
            </div>
          </div>
        ) : (
          <DialogFooter className="mt-6 flex justify-between sm:justify-end gap-2">
            <Button variant="destructive" onClick={() => onReject(user.id)} className="flex items-center gap-2">
              <XCircle className="h-4 w-4" />
              Reject
            </Button>
            <Button variant="outline" onClick={handleRequestClarification} className="flex items-center gap-2">
              <HelpCircle className="h-4 w-4" />
              Request Clarification
            </Button>
            <Button variant="default" onClick={() => onApprove(user.id)} className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              Approve
            </Button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  )
}

