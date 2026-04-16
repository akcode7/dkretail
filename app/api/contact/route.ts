import type { NextRequest } from "next/server";
import { sendContactEmails, validateContactPayload } from "@/lib/mail";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as {
      name?: string;
      email?: string;
      subject?: string;
      message?: string;
      website?: string;
    };

    const payload = {
      name: body.name?.toString() ?? "",
      email: body.email?.toString() ?? "",
      subject: body.subject?.toString() ?? "",
      message: body.message?.toString() ?? "",
      website: body.website?.toString() ?? "",
    };

    const validationError = validateContactPayload(payload);
    if (validationError) {
      return Response.json({ message: validationError }, { status: 400 });
    }

    await sendContactEmails(payload);

    return Response.json(
      { message: "Message sent successfully. A confirmation email has been sent." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form submit error:", error);
    return Response.json(
      { message: "Unable to send your message right now. Please try again shortly." },
      { status: 500 }
    );
  }
}
