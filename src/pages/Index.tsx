
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
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
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium w-1/3">Document Name</TableCell>
                <TableCell>{documentDetail.documentName}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Identification Number</TableCell>
                <TableCell>{documentDetail.identificationNumber}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Document</TableCell>
                <TableCell>{documentDetail.specificDocumentName}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Issued By</TableCell>
                <TableCell>{documentDetail.nameOfIssuingAuthority}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Issued Date</TableCell>
                <TableCell>{documentDetail.issuDate}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Expiry Date</TableCell>
                <TableCell>{documentDetail.expireddate}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Name Of Employer</TableCell>
                <TableCell>{documentDetail.nameOfEmployer}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Address Of Employer</TableCell>
                <TableCell>{documentDetail.addressOfEmployer}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Country</TableCell>
                <TableCell>{documentDetail.country}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">State</TableCell>
                <TableCell>{documentDetail.regionStateOrProvince}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">City/Town</TableCell>
                <TableCell>{documentDetail.cityOrTown}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Sub City</TableCell>
                <TableCell>{documentDetail.subCity}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">District</TableCell>
                <TableCell>{documentDetail.weredaOrDistrict}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Village</TableCell>
                <TableCell>{documentDetail.kebeleOrVillage}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Telephone</TableCell>
                <TableCell>{documentDetail.phoneNumber}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
