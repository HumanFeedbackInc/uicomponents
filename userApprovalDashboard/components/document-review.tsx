"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, Download } from "lucide-react"

interface DocumentReviewProps {
  governmentId: string
  voidCheque: string
}

export function DocumentReview({ governmentId, voidCheque }: DocumentReviewProps) {
  const [activeDocument, setActiveDocument] = useState<string | null>(null)

  const handleViewDocument = (documentUrl: string) => {
    setActiveDocument(documentUrl)
    // In a real application, you might want to open a modal or a new tab to view the document
    window.open(documentUrl, "_blank")
  }

  const handleDownloadDocument = (documentUrl: string, fileName: string) => {
    // In a real application, you would implement proper download functionality
    const link = document.createElement("a")
    link.href = documentUrl
    link.download = fileName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Government ID</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-between items-center">
          <p className="text-sm text-muted-foreground">{governmentId ? "Document uploaded" : "No document uploaded"}</p>
          <div className="space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleViewDocument(governmentId)}
              disabled={!governmentId}
            >
              <Eye className="h-4 w-4 mr-2" />
              View
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleDownloadDocument(governmentId, "government_id.pdf")}
              disabled={!governmentId}
            >
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Void Cheque / Direct Deposit Form</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-between items-center">
          <p className="text-sm text-muted-foreground">{voidCheque ? "Document uploaded" : "No document uploaded"}</p>
          <div className="space-x-2">
            <Button variant="outline" size="sm" onClick={() => handleViewDocument(voidCheque)} disabled={!voidCheque}>
              <Eye className="h-4 w-4 mr-2" />
              View
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleDownloadDocument(voidCheque, "void_cheque.pdf")}
              disabled={!voidCheque}
            >
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

