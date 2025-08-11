import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { name, email, message } = await request.json();

        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            return Response.json({ error: 'Invalid email address' }, { status: 400 });
        }

        const data = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: ['nikostsaridis29@gmail.com'],
            subject: `New Message from ${name} via Portfolio`,
            html: `<p>You have a new message from your portfolio contact form.</p>
             <p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong></p>
             <p>${message}</p>`,
        });

        return Response.json(data);
    } catch (error) {
        return Response.json({ error });
    }
}