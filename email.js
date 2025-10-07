import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Send a generic booking or custom email
 */
export async function sendBookingEmail(to, subject, message) {
  try {
    await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to,
      subject,
      text: message,
    });
    console.log("✅ Email sent to:", to);
  } catch (error) {
    console.error("❌ Email failed:", error);
  }
}

/**
 * Send a 1-hour reminder email to the patient
 */
export async function sendReminderEmail(patient, doctor, appointmentDate) {
  const formattedDate = appointmentDate.toLocaleString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  const message = `
Hi ${patient.name},

⏰ This is a reminder that your appointment with Dr. ${doctor.name} is coming up in 1 hour!

📅 Date & Time: ${formattedDate}

Please make sure to be ready for your appointment.

— BookMyDoc Team
`;

  try {
    await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: patient.email,
      subject: "Appointment Reminder - 1 Hour Left",
      text: message,
    });

    console.log("✅ Reminder email sent to:", patient.email);
  } catch (error) {
    console.error("❌ Failed to send reminder email:", error);
  }
}
