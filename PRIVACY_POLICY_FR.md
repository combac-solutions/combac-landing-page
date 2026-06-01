# Privacy Policy for Combac

**Last Updated: May 26, 2026**

---

## 1. Introduction

Combac ("**we**," "**us**," "**our**," or "**Company**") operates a loyalty rewards platform that connects customers with businesses. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and related services (collectively, the "**Service**").

**Please read this Privacy Policy carefully.** If you do not agree with our policies and practices, please do not use our Service.

---

## 2. Information We Collect

### 2.1 Information You Provide Directly

#### Authentication & Account Information
- **Phone Number**: Collected for account creation, OTP-based authentication, and account recovery
- **Email Address**: Collected for email-based authentication, password recovery, and communications
- **Personal Details**: First name, last name, date of birth, city, state, country
- **Profile Picture**: Avatar/profile images you upload
- **Password**: Encrypted and securely stored using bcrypt hashing

#### Business & Location Information
- **Address & Location Coordinates**: Business addresses with GPS coordinates (latitude/longitude) provided by business owners
- **Loyalty Program Preferences**: Your preferred loyalty tiers and program participation
- **Payment/Reward Preferences**: Stored preferences for redeeming rewards

#### User-Generated Content
- **Reviews & Ratings**: When you review a business, we collect your rating (1-5 stars) and review text
- **Uploaded Images**: Images, photos, and documents you upload to your profile or business listings (stored via Google Drive)
- **Transaction History**: Records of points earned, redeemed, and transferred

### 2.2 Device & Location Information

#### Camera & Photo Access
- We request permission to access your device's camera for QR code scanning at participating businesses
- We request permission to access your photo library for profile picture uploads
- We do **NOT** store or transmit raw camera footage or photos without your explicit action

#### Location Data
- **Foreground Location**: When you use the "Discover Nearby" feature, we request permission to access your approximate location (GPS coordinates)
- **Purpose**: To display nearby participating businesses within a configurable radius
- **Frequency**: Location is requested only when you actively use the nearby search feature
- **Storage**: Your location is NOT stored permanently; it is used only for the current search session

#### Device Information
- **Device Type**: iOS or Android
- **Device Model & OS Version**: For app compatibility and performance monitoring
- **Device Token**: A unique identifier for push notifications (see Section 2.3)

### 2.3 Automatic & Background Information

#### Push Notification Device Tokens
- When you install and open Combac, we collect a device token (unique identifier) from Firebase Cloud Messaging
- This token is used to send you push notifications about loyalty points, tier upgrades, rewards, and system alerts
- Device tokens are stored securely in our database and associated with your user account
- You can disable push notifications anytime in your device settings or within the app

#### Authentication Tokens & Session Management
- **Access Tokens**: Short-lived tokens (validity period configured by us) used to authenticate API requests
- **Refresh Tokens**: Long-lived tokens used to obtain new access tokens when they expire
- Tokens are signed with cryptographic keys and verified on every request
- Tokens are cleared when you log out

#### Event & Analytics Logs
- **Business Activity Logs**: When employees or business owners perform actions (add points, redeem rewards, manage employees), we log the action, timestamp, actor ID, and metadata
- **Loyalty Transaction Records**: Every points transaction is logged with: transaction type, amount, rule applied, performer, timestamp, and optional metadata
- Purpose: Audit trail, fraud detection, analytics, and business insights

#### OTP & Authentication Attempts
- When you request an OTP (One-Time Password), we collect and securely hash the code
- OTP records include: email, OTP type, hashed code, expiration time, failed attempt count, and usage status
- Rate limiting is enforced: maximum 5 OTP requests per email per hour
- After 10 failed OTP verification attempts, the OTP is locked for security

### 2.4 Third-Party Information

We may receive limited information from third-party services (if applicable):
- **Google Services**: Location data, calendar events (if integrated)
- **Firebase**: Device information for notification delivery
- **Twilio**: SMS delivery logs (if SMS-based OTP is enabled)

---

## 3. How We Use Your Information

### 3.1 Providing & Improving Services

We use collected information to:
- **Account Management**: Create and maintain your account, process authentication, and manage login sessions
- **Loyalty Platform**: Track points, manage wallet balances, calculate tier status, and process rewards redemptions
- **QR Code Functionality**: Link QR codes to your customer identity for seamless point earning
- **Push Notifications**: Send transactional notifications (points earned, tier upgrades, rewards expiring, birthday gifts, security alerts)
- **Location Services**: Display nearby businesses based on your location preferences

### 3.2 Communications

We use your email and phone to:
- Send account verification emails and OTPs
- Send password reset emails
- Send loyalty-related notifications (points credited, rewards available)
- Send promotional emails or SMS (with your opt-in consent)
- Respond to your support inquiries

### 3.3 Analytics & Business Intelligence

We use anonymized and aggregated data to:
- Understand how customers interact with businesses
- Identify popular loyalty programs and features
- Generate business analytics dashboards for business owners
- Improve user experience and platform performance
- Conduct market research

**Note**: Aggregated data does NOT identify individuals and may be shared with business owners (e.g., "25% of customers prefer Tier 1 rewards").

### 3.4 Safety & Security

We use information to:
- Detect and prevent fraudulent transactions or unauthorized access
- Enforce our Terms & Conditions
- Protect against abuse and unauthorized use of the platform
- Comply with legal obligations

---

## 4. How We Share Your Information

### 4.1 Information Shared with Business Owners

When you participate in a business's loyalty program, that business can see:
- Your name, email, and phone number (for contact purposes)
- Your loyalty wallet for their business: points balance, tier, visit history
- Your transaction history with their business (points earned, redeemed)
- Your reviews and ratings of their business
- Your contact information for customer service

**You control this sharing**: If you do NOT want to participate in a business's loyalty program, simply don't join it.

### 4.2 Information Shared with Employees

Business employees (authorized by the business owner) can see:
- Customer names and contact information
- Customer loyalty wallet data (points, tier) for their business
- The ability to award or redeem points for customers during in-store interactions

### 4.3 Third-Party Service Providers

We share necessary information with third parties to operate the platform:

#### Google Drive API
- **Images & Documents**: Photos, documents, and files you upload are securely stored on Google Drive via our API integration
- **Google Policies**: This data is subject to [Google's Privacy Policy](https://policies.google.com/privacy)
- **Data**: Google receives file metadata (name, size, creation time) and file contents

#### Firebase Cloud Messaging
- **Device Tokens**: Device tokens are shared with Firebase to send push notifications
- **Google Policies**: This data is subject to [Google's Privacy Policy](https://policies.google.com/privacy)
- **Data**: Firebase receives device tokens, push notification content, and delivery status

#### Twilio (if SMS enabled)
- **Phone Number**: If you opt into SMS-based OTP, your phone number is transmitted to Twilio's servers
- **Twilio Policies**: This data is subject to [Twilio's Privacy Policy](https://www.twilio.com/legal/privacy)
- **Data**: Twilio receives phone numbers and SMS message content

#### Email Service Provider (SMTP)
- **Email Address & Content**: Account verification emails, OTPs, and notifications are transmitted to our configured SMTP service
- **Provider Policies**: Subject to the SMTP provider's privacy policies
- **Data**: Email address, email content, and delivery status

#### Expo Push Notifications
- **Device Identifiers**: If using Expo's notification service, device identifiers may be processed by Expo
- **Expo Policies**: Subject to [Expo's Privacy Policy](https://expo.dev/privacy)

### 4.4 Legal Requirements & Safety

We may disclose information if required by law or to:
- Respond to lawful requests from government agencies or courts
- Enforce our Terms & Conditions
- Protect the safety, rights, and property of Combac, users, or the public
- Prevent or investigate possible wrongdoing

### 4.5 Business Transfers

If Combac is merged, acquired, or undergoes bankruptcy, your information may be transferred as part of that transaction. We will notify you of any such change and provide you with choices regarding your information.

### 4.6 Information NOT Shared

We **DO NOT**:
- Sell, rent, or lease your personal data to third parties for marketing purposes
- Share passwords, OTP codes, or authentication tokens
- Share raw location history (beyond current session data for nearby search)
- Share your credit card or payment information (we do not handle direct payments; reward redemptions are managed by businesses)

---

## 5. Data Retention & Deletion

### 5.1 Retention Periods

We retain data for as long as necessary to provide services:

- **Active Accounts**: Account data is retained while your account is active
- **Authentication Data**: OTP codes are retained for 24 hours, then deleted
- **Loyalty Transactions**: Transaction history is retained indefinitely (required for loyalty program integrity)
- **Event Logs**: Business event logs are retained for at least 2 years for audit purposes
- **Device Tokens**: Device tokens are retained until: (a) you logout/uninstall, (b) you revoke notification permissions, or (c) the token expires
- **Inactive Accounts**: Accounts inactive for 2+ years may be archived or deleted at our discretion

### 5.2 Account Deletion

You can request account deletion at any time:
- Contact us at: **[support@combac.app]** with your account email and phone number
- We will delete your personal data within 30 days, except:
  - **Loyalty Transactions**: May be retained if required by business or legal obligations
  - **Legal Records**: Data retained to comply with tax, fraud, or legal requirements
  - **Anonymized Data**: Aggregate/anonymized data may be retained for analytics

### 5.3 Data Portability

You have the right to request a copy of your personal data in a structured, commonly-used format. Contact us at **[support@combac.app]**.

---

## 6. Security Measures

We implement industry-standard security practices to protect your data:

- **Encryption**: Data in transit uses HTTPS/TLS encryption
- **Password Hashing**: Passwords are hashed using bcrypt with salting (BCRYPT_ROUNDS = 10)
- **OTP Hashing**: OTP codes are bcrypt-hashed before storage
- **Token Signing**: Authentication tokens are cryptographically signed
- **Database Security**: PostgreSQL database with restricted access
- **Access Controls**: Role-based access control (RBAC) for employees and business owners
- **Rate Limiting**: OTP requests and login attempts are rate-limited
- **Monitoring**: Suspicious activities are logged and monitored
- **No Direct Payment Handling**: We do not store or process credit card data

**However**: No security system is 100% impenetrable. While we use reasonable measures, we cannot guarantee absolute security. You use the Service at your own risk.

---

## 7. Your Privacy Rights

### 7.1 Access & Correction
- You have the right to access your personal data and request corrections
- You can update your profile information within the app

### 7.2 Withdraw Consent
- You can withdraw consent for specific data uses (e.g., push notifications, location sharing) at any time
- Withdrawing consent does not affect previously processed data

### 7.3 Opt-Out of Communications
- Opt-out of promotional emails by clicking the unsubscribe link in emails
- Disable push notifications in your device settings or within the app
- Disable location sharing in the "Discover Nearby" feature settings

### 7.4 Regulatory Rights
- Depending on your jurisdiction (e.g., GDPR in EU, CCPA in California), you may have additional rights:
  - Right to access, rectification, erasure, and portability
  - Right to object to processing
  - Right to lodge a complaint with a supervisory authority

---

## 8. Children's Privacy

Combac is **NOT** intended for children under 13 years of age. We do not knowingly collect personal data from children under 13. If we become aware that a child under 13 has provided us with personal data, we will delete such information and terminate the child's account.

For users aged 13-18, parental consent may be required depending on your jurisdiction.

---

## 9. International Data Transfers

Combac is operated primarily from **[Company Location]**. If you access the Service from outside this jurisdiction, please be aware that your information may be transferred to, processed in, and stored in countries that may have different data protection laws than your country.

By using Combac, you consent to the transfer of your information to countries outside your country of residence, which may have data protection rules that differ from those in your country.

---

## 10. Third-Party Links

Combac may contain links to third-party websites (e.g., business websites, social media). We are **NOT** responsible for the privacy practices of third-party sites. Please review their privacy policies before providing personal information.

---

## 11. Changes to This Privacy Policy

We may update this Privacy Policy at any time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of material changes by:
- Posting the updated policy in the app with an "Updated" date
- Sending you an email notification (if a significant change)
- Requiring your consent to new terms (if required by law)

Your continued use of the Service after changes constitutes your acceptance of the updated Privacy Policy.

---

## 12. Data Protection Officer & Contact Information

**For Privacy Questions, Data Deletion Requests, or Inquiries:**

**Combac Support**
Email: **[support@combac.app]**
Phone: **[+216 XX XXX XXXX]**
Mailing Address: **[Company Address]**

**Response Time**: We aim to respond to all requests within 30 days.

---

## 13. Jurisdiction & Governing Law

This Privacy Policy is governed by the laws of **[Country]**, without regard to its conflict of law provisions.

If you are located in the EU, your data is processed in accordance with the **General Data Protection Regulation (GDPR)**.
If you are located in California, USA, your data is processed in accordance with the **California Consumer Privacy Act (CCPA)**.

---

## 14. Complaint & Dispute Resolution

If you have a privacy concern or complaint:
1. Contact us at **[support@combac.app]** with details of your complaint
2. We will investigate and respond within 30 days
3. If you are not satisfied, you have the right to lodge a complaint with your local data protection authority

**EU Residents**: You can file a complaint with your national data protection authority.
**California Residents**: You can contact the California Attorney General's office.

---

**End of Privacy Policy**

---

# Privacy Policy – Short Version (For App Settings & Onboarding)

## What Information Do We Collect?

✅ **Account Info**: Phone, email, name, location preferences
✅ **Loyalty Data**: Points, wallet, tier, transaction history
✅ **Device Info**: Device token for push notifications, camera/location permissions
✅ **Reviews**: Your ratings and feedback about businesses

## How We Use Your Data?

✅ Manage your loyalty account and rewards
✅ Send notifications about points and tier upgrades
✅ Show nearby businesses on the map
✅ Improve our service and prevent fraud

## Who Can See Your Data?

✅ **Businesses You Join**: Your loyalty wallet and contact info
✅ **Business Employees**: Limited access to process rewards
✅ **Service Providers**: Google Drive (photos), Firebase (notifications), Twilio (SMS)
✅ **NOT Sold**: We never sell your data to third parties

## Your Privacy Rights

✅ Access or update your data anytime in Settings
✅ Delete your account and data (submit request in Settings)
✅ Turn off notifications or location sharing
✅ Opt out of promotional emails

## Questions?

📧 Email: **support@combac.app**
📞 Phone: **[+216 XX XXX XXXX]**

---
