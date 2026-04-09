import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, company, title, interest } = body;

    if (!name || !email) {
      return Response.json({ error: 'Name and email are required' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'TARGA AI <noreply@targa.ai>',
      to: ['jthompson@targatek.com'],
      replyTo: email,
      subject: `TARGA AI Inquiry: ${interest} - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #1f476a;">New Inquiry from targa.ai</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #666; width: 100px;">Name</td><td style="padding: 8px 0; font-weight: bold;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Company</td><td style="padding: 8px 0;">${company || 'Not provided'}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Title</td><td style="padding: 8px 0;">${title || 'Not provided'}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Interest</td><td style="padding: 8px 0; font-weight: bold; color: #0eb2af;">${interest}</td></tr>
          </table>
          <hr style="margin: 24px 0; border: none; border-top: 1px solid #e2e8f0;" />
          <p style="color: #999; font-size: 12px;">Submitted via targa.ai contact form</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return Response.json({ error: 'Failed to send' }, { status: 500 });
    }

    return Response.json({ success: true, id: data.id });
  } catch (err) {
    console.error('API error:', err);
    return Response.json({ error: 'Server error' }, { status: 500 });
  }
}
