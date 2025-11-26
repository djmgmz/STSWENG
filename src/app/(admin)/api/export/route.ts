// src/app/api/export/route.ts

import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongoose';
import { unparse } from 'papaparse'; // Import CSV parser
import JSZip from 'jszip'; // Import zip library
import { flatten } from 'flat';

// Import the 6 models
import Member from '@/lib/models/households/member';
import Household from '@/lib/models/households/household';
import Donation from '@/lib/models/donations/donation';
import Intervention from '@/lib/models/interventions/intervention';
import FeedingProgram from '@/lib/models/feeding/feeding_program';
import Livelihood from '@/lib/models/business/livelihood';

// We'll keep the unsecured 'isAdmin' for now as requested
async function isAdmin(request: Request): Promise<boolean> {
  console.warn("WARNING: API route /api/export is not secured.");
  return true;
}

// ++++++++++++++++ NEW CODE BLOCK ++++++++++++++++
// This is the new config object we will pass to papaparse
const papaparseConfig = {
  delimiter: ";", // Use a semicolon instead of a comma
  header: true,   // Explicitly include the header row
  bom: true,      // Adds a special character (BOM) to help Excel understand UTF-8
};
// ++++++++++++++++++++++++++++++++++++++++++++++++

export async function GET(request: Request) {
  // 1. Security Check
  const authorized = await isAdmin(request);
  if (!authorized) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
  }

  try {
    await dbConnect();

    // 2. Fetch All 6 Data Types
    const [
      members,
      households,
      donations,
      interventions,
      feedingPrograms,
      livelihoods,
    ] = await Promise.all([
      Member.find({}).lean(),
      Household.find({}).lean(),
      Donation.find({}).lean(),
      Intervention.find({}).lean(),
      FeedingProgram.find({}).lean(),
      Livelihood.find({}).lean(),
    ]);

    // 3. Create a New Zip File in Memory
    const zip = new JSZip();

    // 4. Convert each data array to CSV and add to the zip
    //    *** THIS IS THE UPDATED SECTION ***
    zip.file("members.csv", unparse(members, papaparseConfig));
    zip.file("households.csv", unparse(households, papaparseConfig));
    zip.file("donations.csv", unparse(donations, papaparseConfig));
    zip.file("interventions.csv", unparse(interventions, papaparseConfig));
    zip.file("feeding_programs.csv", unparse(feedingPrograms, papaparseConfig));
    zip.file("livelihoods.csv", unparse(livelihoods, papaparseConfig));

    // 5. Generate the zip file as a data blob
    const zipBlob = await zip.generateAsync({ type: "blob" });

    // 6. Send the zip file back to the user
    return new Response(zipBlob, {
      status: 200,
      headers: {
        'Content-Type': 'application/zip',
        'Content-Disposition': `attachment; filename="data-export-${new Date().toISOString().split('T')[0]}.zip"`,
      },
    });

  } catch (error) {
    console.error('Data export failed:', error);
    return NextResponse.json({ error: 'Failed to export data' }, { status: 500 });
  }
}