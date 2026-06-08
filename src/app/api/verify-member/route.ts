import { NextRequest, NextResponse } from "next/server";
import membersData from "@/data/members.json";

type MemberRecord = {
  name: string;
  email: string;
  mobile: string;
  chapter: string;
  type: string;
  status: string;
};

const members = membersData as Record<string, MemberRecord>;

export async function POST(req: NextRequest) {
  try {
    const { membershipNumber } = await req.json();

    if (!membershipNumber) {
      return NextResponse.json({ valid: false, message: "Membership number is required" }, { status: 400 });
    }

    const normalised = String(membershipNumber).trim().toUpperCase();
    const member = members[normalised];

    if (!member) {
      return NextResponse.json({
        valid: false,
        memberStatus: "not_found",
        message: "Membership number not found in IIA Telangana Chapter records",
      });
    }

    const statusLower = (member.status || "").toLowerCase();

    if (statusLower === "defaulter") {
      return NextResponse.json({
        valid: false,
        memberStatus: "defaulter",
        message: "Your membership has outstanding dues.",
      });
    }

    if (statusLower !== "active") {
      return NextResponse.json({
        valid: false,
        memberStatus: "inactive",
        memberName: member.name,
        message: `Membership is ${member.status}.`,
      });
    }

    return NextResponse.json({
      valid: true,
      memberStatus: "active",
      memberName: member.name,
      memberType: member.type,
      message: `Verified: ${member.name} (${member.type} Member)`,
    });
  } catch {
    return NextResponse.json({ valid: false, message: "Verification error" }, { status: 500 });
  }
}
