# Email Setup Instructions for Appointment Booking

## 📧 Setting up Email Notifications

To enable email notifications when appointments are booked, you need to configure your email credentials.

### Step 1: Create Environment File

Create a `.env.local` file in your project root with the following content:

```env
# Email Configuration for Nodemailer
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

### Step 2: Gmail Setup (Recommended)

#### Option A: Using Gmail with App Password

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password**:
   - Go to [Google Account Settings](https://myaccount.google.com/)
   - Security → 2-Step Verification
   - App passwords → Generate app password
   - Select "Mail" and your device
   - Copy the generated 16-character password
3. **Update `.env.local`**:
   ```env
   EMAIL_USER=your-gmail@gmail.com
   EMAIL_PASS=your-16-character-app-password
   ```

#### Option B: Using Other Email Services

**Outlook/Hotmail:**
```env
EMAIL_USER=your-email@outlook.com
EMAIL_PASS=your-password
```

**Yahoo:**
```env
EMAIL_USER=your-email@yahoo.com
EMAIL_PASS=your-app-password
```

### Step 3: Test the Setup

1. Start your development server: `npm run dev`
2. Go to the appointment page
3. Fill out and submit the appointment form
4. Check your email for the confirmation

### Step 4: Production Deployment

For production (Vercel), add the environment variables in your Vercel dashboard:

1. Go to your project in Vercel
2. Settings → Environment Variables
3. Add:
   - `EMAIL_USER` = your-email@gmail.com
   - `EMAIL_PASS` = your-app-password

## 📋 Email Features

### What happens when someone books an appointment:

1. **You receive an email** with:
   - Client's contact information
   - Selected service
   - Date and time
   - Any additional notes
   - Professional HTML formatting

2. **Client receives a confirmation email** with:
   - Appointment details
   - What to expect
   - Contact information
   - Professional branding

### What happens when someone sends a contact message:

1. **You receive an email** with:
   - Client's contact information (name, email, phone)
   - Their message content
   - Clickable email and phone links
   - Professional HTML formatting
   - Reminder to respond within 24 hours

2. **Client receives a confirmation email** with:
   - Thank you message
   - Copy of their original message
   - What happens next
   - Contact information for urgent needs
   - Professional branding

### Email Templates Include:

- ✅ Professional HTML design
- ✅ Brand colors (Green & Orange)
- ✅ Responsive layout
- ✅ Clear appointment details
- ✅ Contact information
- ✅ Professional branding

## 🔧 Troubleshooting

### Common Issues:

1. **"Invalid login" error**:
   - Make sure you're using an App Password, not your regular password
   - Ensure 2-Factor Authentication is enabled

2. **"Connection timeout" error**:
   - Check your internet connection
   - Verify email credentials are correct

3. **Emails not sending**:
   - Check the console for error messages
   - Verify environment variables are set correctly
   - Make sure the email service allows SMTP

### Testing Locally:

```bash
# Check if environment variables are loaded
console.log(process.env.EMAIL_USER) // Should show your email
console.log(process.env.EMAIL_PASS) // Should show your app password
```

## 📞 Support

If you need help setting up email notifications, check:
- [Nodemailer Documentation](https://nodemailer.com/about/)
- [Gmail App Passwords Guide](https://support.google.com/accounts/answer/185833)
- [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)

---

**Note**: Never commit your `.env.local` file to version control. It's already included in `.gitignore`.
