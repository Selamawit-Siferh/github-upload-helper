
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

// Sample document details data
const sampleDocumentDetail = {
  documentName: "Work Permit",
  identificationNumber: "WP12345678",
  specificDocumentName: "Employment Authorization",
  nameOfIssuingAuthority: "Ministry of Labor",
  issuDate: "2023-01-15",
  expireddate: "2025-01-14",
  nameOfEmployer: "Tech Solutions Inc.",
  addressOfEmployer: "123 Business Park, Suite 500",
  country: "Ethiopia",
  regionStateOrProvince: "Addis Ababa",
  cityOrTown: "Addis Ababa",
  subCity: "Bole",
  weredaOrDistrict: "District 05",
  kebeleOrVillage: "Kebele 12",
  phoneNumber: "+251 911 234 567"
};

const Index = () => {
  const [documentDetail] = useState(sampleDocumentDetail);

  return (
    <div className="min-h-screen p-4 md:p-8 bg-gray-50">
      <Card className="mx-auto max-w-5xl shadow-md">
        <CardHeader className="bg-primary/5">
          <CardTitle className="text-2xl font-bold text-center">Document Details</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Document Information */}
            <DocumentDetailItem label="Document Name" value={documentDetail.documentName} />
            <DocumentDetailItem label="Identification Number" value={documentDetail.identificationNumber} />
            <DocumentDetailItem label="Document" value={documentDetail.specificDocumentName} />
            <DocumentDetailItem label="Issued By" value={documentDetail.nameOfIssuingAuthority} />
            <DocumentDetailItem label="Issued Date" value={documentDetail.issuDate} />
            <DocumentDetailItem label="Expiry Date" value={documentDetail.expireddate} />
            <DocumentDetailItem label="Name Of Employer" value={documentDetail.nameOfEmployer} />
            <DocumentDetailItem label="Address Of Employer" value={documentDetail.addressOfEmployer} />
            
            {/* Location Information */}
            <DocumentDetailItem label="Country" value={documentDetail.country} />
            <DocumentDetailItem label="State" value={documentDetail.regionStateOrProvince} />
            <DocumentDetailItem label="City/Town" value={documentDetail.cityOrTown} />
            <DocumentDetailItem label="Sub City" value={documentDetail.subCity} />
            <DocumentDetailItem label="District" value={documentDetail.weredaOrDistrict} />
            <DocumentDetailItem label="Village" value={documentDetail.kebeleOrVillage} />
            <DocumentDetailItem label="Telephone" value={documentDetail.phoneNumber} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Component for individual detail items
const DocumentDetailItem = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="flex flex-col p-3 bg-white rounded-md border border-gray-200 hover:bg-gray-50 transition-colors">
      <span className="text-sm font-medium text-gray-500">{label}</span>
      <span className="text-base font-semibold mt-1 text-gray-800">{value}</span>
    </div>
  );
};

export default Index;
