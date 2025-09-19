import { NextRequest, NextResponse } from 'next/server';
import * as nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, date, time, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !service || !date || !time) {
      return NextResponse.json(
        { error: 'Missing required fields' },
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

    // Create transporter (using Gmail as example - you can change this)
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
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Your email where you want to receive appointments
      subject: `New Appointment Booking - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #4CAF50, #FF9800); padding: 20px; text-align: center; color: white;">
            <h1 style="margin: 0; font-size: 24px;">New Appointment Booking</h1>
          </div>
          
          <div style="padding: 30px; background: #f9f9f9;">
            <h2 style="color: #4CAF50; margin-bottom: 20px;">Appointment Details</h2>
            
            <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px 0; font-weight: bold; color: #333; width: 30%;">Name:</td>
                  <td style="padding: 10px 0; color: #666;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; font-weight: bold; color: #333;">Email:</td>
                  <td style="padding: 10px 0; color: #666;">${email}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; font-weight: bold; color: #333;">Phone:</td>
                  <td style="padding: 10px 0; color: #666;">${phone}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; font-weight: bold; color: #333;">Service:</td>
                  <td style="padding: 10px 0; color: #666;">${service}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; font-weight: bold; color: #333;">Date:</td>
                  <td style="padding: 10px 0; color: #666;">${date}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; font-weight: bold; color: #333;">Time:</td>
                  <td style="padding: 10px 0; color: #666;">${time}</td>
                </tr>
                ${message ? `
                <tr>
                  <td style="padding: 10px 0; font-weight: bold; color: #333; vertical-align: top;">Message:</td>
                  <td style="padding: 10px 0; color: #666;">${message}</td>
                </tr>
                ` : ''}
              </table>
            </div>
            
            <div style="margin-top: 20px; padding: 15px; background: #e8f5e8; border-radius: 8px; border-left: 4px solid #4CAF50;">
              <p style="margin: 0; color: #2e7d32; font-weight: bold;">
                📅 Please confirm this appointment with the client and add it to your calendar.
              </p>
            </div>
          </div>
          
          <div style="background: #333; color: white; padding: 20px; text-align: center;">
            <p style="margin: 0;">Fiza - Professional Nutritionist & Dietitian</p>
            <p style="margin: 5px 0 0 0; font-size: 14px; opacity: 0.8;">
              This email was sent from your appointment booking system.
            </p>
          </div>
        </div>
      `,
    };

    // Email content for the client
    const clientEmailContent = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Appointment Confirmation - ${service}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #4CAF50, #FF9800); padding: 20px; text-align: center; color: white;">
            <h1 style="margin: 0; font-size: 24px;">Appointment Confirmed!</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Thank you for choosing Fiza's nutrition services</p>
          </div>
          
          <div style="padding: 30px; background: #f9f9f9;">
            <h2 style="color: #4CAF50; margin-bottom: 20px;">Your Appointment Details</h2>
            
            <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px 0; font-weight: bold; color: #333; width: 30%;">Service:</td>
                  <td style="padding: 10px 0; color: #666;">${service}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; font-weight: bold; color: #333;">Date:</td>
                  <td style="padding: 10px 0; color: #666;">${date}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; font-weight: bold; color: #333;">Time:</td>
                  <td style="padding: 10px 0; color: #666;">${time}</td>
                </tr>
              </table>
            </div>
            
            <div style="margin-top: 20px; padding: 15px; background: #fff3e0; border-radius: 8px; border-left: 4px solid #FF9800;">
              <h3 style="margin: 0 0 10px 0; color: #e65100;">What to Expect:</h3>
              <ul style="margin: 0; padding-left: 20px; color: #bf360c;">
                <li>Comprehensive health assessment</li>
                <li>Personalized nutrition plan</li>
                <li>Lifestyle recommendations</li>
                <li>Follow-up guidance</li>
              </ul>
            </div>
            
            <div style="margin-top: 20px; padding: 15px; background: #e8f5e8; border-radius: 8px; border-left: 4px solid #4CAF50;">
              <p style="margin: 0; color: #2e7d32; font-weight: bold;">
                📞 If you need to reschedule or have any questions, please contact us.
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
      { message: 'Appointment booked successfully! Confirmation emails sent.' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send appointment email' },
      { status: 500 }
    );
  }
}
