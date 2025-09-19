import { NextRequest, NextResponse } from 'next/server';
import * as nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields. Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Check if email credentials are configured
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;

    if (!emailUser || !emailPass) {
      console.error('Email credentials not configured');
      return NextResponse.json(
        { 
          error: 'Email service not configured. Please set up EMAIL_USER and EMAIL_PASS environment variables.',
          details: 'Check EMAIL_SETUP.md for setup instructions'
        },
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    // Verify transporter configuration
    try {
      await transporter.verify();
    } catch (verifyError) {
      console.error('Email transporter verification failed:', verifyError);
      return NextResponse.json(
        { 
          error: 'Email service configuration error. Please check your email credentials.',
          details: 'Make sure you\'re using an App Password for Gmail, not your regular password'
        },
        { status: 500 }
      );
    }

    // Email content for you (the nutritionist)
    const adminEmailContent = {
      from: emailUser,
      to: emailUser, // Your email where you want to receive contact messages
      subject: `New Contact Form Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #4CAF50, #FF9800); padding: 20px; text-align: center; color: white;">
            <h1 style="margin: 0; font-size: 24px;">New Contact Form Message</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Someone reached out through your website</p>
          </div>
          
          <div style="padding: 30px; background: #f9f9f9;">
            <h2 style="color: #4CAF50; margin-bottom: 20px;">Contact Details</h2>
            
            <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px 0; font-weight: bold; color: #333; width: 30%;">Name:</td>
                  <td style="padding: 10px 0; color: #666;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; font-weight: bold; color: #333;">Email:</td>
                  <td style="padding: 10px 0; color: #666;">
                    <a href="mailto:${email}" style="color: #4CAF50; text-decoration: none;">${email}</a>
                  </td>
                </tr>
                ${phone ? `
                <tr>
                  <td style="padding: 10px 0; font-weight: bold; color: #333;">Phone:</td>
                  <td style="padding: 10px 0; color: #666;">
                    <a href="tel:${phone}" style="color: #4CAF50; text-decoration: none;">${phone}</a>
                  </td>
                </tr>
                ` : ''}
                <tr>
                  <td style="padding: 10px 0; font-weight: bold; color: #333; vertical-align: top;">Message:</td>
                  <td style="padding: 10px 0; color: #666; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</td>
                </tr>
              </table>
            </div>
            
            <div style="margin-top: 20px; padding: 15px; background: #e8f5e8; border-radius: 8px; border-left: 4px solid #4CAF50;">
              <p style="margin: 0; color: #2e7d32; font-weight: bold;">
                📧 Please respond to this inquiry within 24 hours for best customer service.
              </p>
            </div>
            
            <div style="margin-top: 15px; padding: 15px; background: #fff3e0; border-radius: 8px; border-left: 4px solid #FF9800;">
              <p style="margin: 0; color: #e65100; font-weight: bold;">
                💡 Quick Reply: Click the email address above to respond directly.
              </p>
            </div>
          </div>
          
          <div style="background: #333; color: white; padding: 20px; text-align: center;">
            <p style="margin: 0;">Fiza - Professional Nutritionist & Dietitian</p>
            <p style="margin: 5px 0 0 0; font-size: 14px; opacity: 0.8;">
              This message was sent from your website contact form.
            </p>
          </div>
        </div>
      `,
    };

    // Email content for the client (confirmation)
    const clientEmailContent = {
      from: emailUser,
      to: email,
      subject: `Thank you for contacting Fiza - Nutritionist & Dietitian`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #4CAF50, #FF9800); padding: 20px; text-align: center; color: white;">
            <h1 style="margin: 0; font-size: 24px;">Thank You for Reaching Out!</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Your message has been received</p>
          </div>
          
          <div style="padding: 30px; background: #f9f9f9;">
            <h2 style="color: #4CAF50; margin-bottom: 20px;">Hi ${name}!</h2>
            
            <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 20px;">
              <p style="margin: 0 0 15px 0; color: #333; line-height: 1.6;">
                Thank you for taking the time to contact me. I've received your message and will get back to you within 24 hours.
              </p>
              
              <p style="margin: 0; color: #666; line-height: 1.6;">
                <strong>Your message:</strong><br>
                <em style="color: #888;">"${message.replace(/\n/g, '<br>')}"</em>
              </p>
            </div>
            
            <div style="margin-bottom: 20px; padding: 15px; background: #e8f5e8; border-radius: 8px; border-left: 4px solid #4CAF50;">
              <h3 style="margin: 0 0 10px 0; color: #2e7d32;">What happens next?</h3>
              <ul style="margin: 0; padding-left: 20px; color: #2e7d32;">
                <li>I'll review your message carefully</li>
                <li>You'll receive a personalized response within 24 hours</li>
                <li>If needed, we can schedule a consultation</li>
              </ul>
            </div>
            
            <div style="padding: 15px; background: #fff3e0; border-radius: 8px; border-left: 4px solid #FF9800;">
              <h3 style="margin: 0 0 10px 0; color: #e65100;">Need immediate assistance?</h3>
              <p style="margin: 0; color: #bf360c;">
                For urgent nutrition concerns, please call me directly or book an appointment online.
              </p>
            </div>
          </div>
          
          <div style="background: #333; color: white; padding: 20px; text-align: center;">
            <p style="margin: 0; font-weight: bold;">Fiza - Professional Nutritionist & Dietitian</p>
            <p style="margin: 5px 0 0 0; font-size: 14px; opacity: 0.8;">
              Looking forward to helping you achieve your health goals!
            </p>
          </div>
        </div>
      `,
    };

    // Send both emails
    await transporter.sendMail(adminEmailContent);
    await transporter.sendMail(clientEmailContent);

    return NextResponse.json(
      { message: 'Contact message sent successfully! Confirmation emails sent.' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending contact email:', error);
    return NextResponse.json(
      { error: 'Failed to send contact message' },
      { status: 500 }
    );
  }
}
