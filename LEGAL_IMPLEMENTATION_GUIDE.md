# Legal Documents Implementation Guide for Combac

**Created: May 26, 2026**  
**Status: Production-Ready**

---

## 📋 Overview

This package contains two production-ready legal documents for Combac:

1. **PRIVACY_POLICY.md** – Comprehensive privacy policy covering data collection, usage, third-party services, and user rights
2. **TERMS_AND_CONDITIONS.md** – Terms governing platform usage, loyalty rewards, account responsibilities, and liability limits
3. **TERMS_AND_CONDITIONS_SHORT.md** – User-friendly short version for in-app display (extracted from full document)
4. **PRIVACY_POLICY_SHORT.md** – User-friendly short version for in-app display (extracted from full document)

---

## 🎯 Key Features of These Documents

### Aligned with Actual App Functionality
✅ **Data Collection**: Phone OTP, email, location (foreground), camera, gallery, device tokens  
✅ **Third-Party Services**: Google Drive, Firebase, Twilio, SMTP email providers  
✅ **Authentication**: OTP-based login, session tokens, JWT signing  
✅ **Features**: QR code scanning, nearby location search, push notifications, loyalty wallets  
✅ **Business Model**: Customer-business loyalty programs, employee management, rewards redemption  
✅ **Data Usage**: Analytics, event logging, audit trails, business intelligence  

### Jurisdictionally Aware
✅ GDPR-compliant (EU users)  
✅ CCPA-compliant (California users)  
✅ Tunisian law references (if operating in Tunisia)  
✅ Placeholder sections for jurisdiction-specific customization  

### Modern SaaS Standards
✅ Realistic liability limitations  
✅ Third-party service liability disclaimers  
✅ Account termination policies  
✅ Fraud prevention terms  
✅ App Store/Play Store compliance-ready  

---

## ⚠️ IMPORTANT: Placeholders to Fill In

Before publishing, replace all **[BRACKETED PLACEHOLDERS]** with actual company information:

| Placeholder | Location | What to Fill | Example |
|---|---|---|---|
| `[support@combac.app]` | Privacy & Terms | Support email | `legal@combac.com` |
| `[+216 XX XXX XXXX]` | Privacy & Terms | Support phone | `+1-555-123-4567` |
| `[Company Address]` | Privacy & Terms | Office address | `123 Main St, San Francisco, CA 94105` |
| `[Company Location]` | Privacy Policy Section 9 | Primary business location | `United States` |
| `[Country]` | Multiple locations | Governing law jurisdiction | `United States` or `Tunisia` |
| `[City, Country]` | Terms Section 12.2 | Court jurisdiction | `San Francisco, United States` |
| `[Monday-Friday, 9 AM - 6 PM (Local Time)]` | Terms Section 15 | Support hours | `Monday-Friday, 8:30 AM - 5:30 PM EST` |

---

## 📱 Integration Steps

### Step 1: App Integration

#### In-App Settings Screen
Add "Legal" section to app settings:
```
Settings
├── Account
├── Notifications
├── Privacy
├── Legal
│   ├── 📄 Privacy Policy (link to full)
│   ├── 📄 Terms & Conditions (link to full)
│   ├── 📋 Privacy Policy Summary (displays short version)
│   └── 📋 Terms Summary (displays short version)
└── Help
```

#### Navigation Implementation (React Native)
```tsx
// src/screens/LegalScreen.tsx
export function LegalScreen() {
  return (
    <ScrollView>
      <Button
        title="Privacy Policy"
        onPress={() => navigation.navigate('PrivacyPolicyFull')}
      />
      <Button
        title="Terms & Conditions"
        onPress={() => navigation.navigate('TermsConditionsFull')}
      />
      <Button
        title="Report Privacy Issue"
        onPress={() => Linking.openURL('mailto:support@combac.app')}
      />
    </ScrollView>
  );
}
```

#### WebView Implementation
```tsx
// Display full documents in WebView
<WebView 
  source={{ uri: 'https://combac.app/privacy' }}
  style={{ flex: 1 }}
/>
```

### Step 2: Website Integration

#### Create Legal Pages
- `https://combac.app/privacy` → Full Privacy Policy
- `https://combac.app/terms` → Full Terms & Conditions
- `https://combac.app/legal` → Landing page linking to all documents

#### Footer Links
Add to website footer:
```html
<footer>
  <a href="/privacy">Privacy Policy</a> | 
  <a href="/terms">Terms & Conditions</a> | 
  <a href="/contact">Contact Us</a>
</footer>
```

### Step 3: Onboarding Flow

#### First-Time User Flow
```
1. Download app
2. Create account (phone + OTP)
3. Accept Terms & Conditions
   └─ Show short version, link to full
4. Accept Privacy Policy
   └─ Show short version, link to full
5. Grant permissions (location, camera, notifications)
6. Complete profile
```

#### Acceptance Tracking
```ts
// Store in database
interface UserAgreements {
  userId: string;
  agreedToTermsVersion: '1.0'; // Version number
  agreedToTermsDate: Date;
  agreedToPrivacyVersion: '1.0';
  agreedToPrivacyDate: Date;
}
```

### Step 4: App Store / Play Store Submission

#### App Store Requirements (iOS)
```
✅ Privacy Policy link required in app settings
✅ Terms of Service link required
✅ Contact information for privacy requests
✅ Accurate data collection descriptions
```

#### Google Play Requirements (Android)
```
✅ Privacy Policy URL in store listing
✅ Data collection transparency
✅ Terms of Service link
✅ Accurate permission usage explanations
```

#### Add to Store Listings
**Apple App Store Privacy Section:**
```
Combac collects:
• Phone number and email (required for account)
• Location data (when "Discover Nearby" is used)
• Device identifiers (for push notifications)
• Transaction and loyalty history
• User-generated content (reviews, photos)

Learn more: [Link to Full Privacy Policy]
```

---

## 🔄 Update Procedures

### When to Update Documents
1. **New Feature**: Add data collection details and usage explanations
2. **Third-Party Service Change**: Update service provider list
3. **Policy Change**: Document changes in user protections
4. **Legal Requirement**: Update for GDPR, CCPA, or local changes
5. **Yearly Review**: Audit and refresh annually

### Update Process
1. Create new version (e.g., v1.1, v2.0)
2. Update document with change date and version
3. Send notification to all active users
4. Require users to re-accept updated terms (if material change)
5. Store user acceptance records with version numbers
6. Archive previous versions

### Version Tracking Template
```md
## Version History

- **v2.0** (May 26, 2026) – Added SMS opt-out section, updated Firebase policies
- **v1.5** (Jan 15, 2026) – Clarified location data retention
- **v1.0** (Oct 1, 2025) – Initial version
```

---

## 📊 Compliance Checklist

### Before Publishing

#### General Compliance
- [ ] All placeholders filled in with real company info
- [ ] Document reviewed by legal counsel (recommended)
- [ ] Version numbers assigned (v1.0)
- [ ] Update dates filled in
- [ ] Contact information verified and active
- [ ] Support email monitored and responsive

#### GDPR Compliance (EU)
- [ ] Right to access explained
- [ ] Right to erasure explained
- [ ] Right to portability explained
- [ ] Data retention periods specified
- [ ] Third-party service agreements in place
- [ ] Data Processing Agreement (DPA) with processors completed
- [ ] Legitimate interest assessment documented

#### CCPA Compliance (California)
- [ ] Data collection types listed
- [ ] "Do Not Sell" mechanism explained
- [ ] Consumer rights explained
- [ ] Contact method for data requests provided
- [ ] Metrics for data requests tracked

#### App Store Compliance
- [ ] Privacy policy linked in settings
- [ ] Privacy policy URL in app store listing
- [ ] Terms linked in settings
- [ ] Accurate permission descriptions in store
- [ ] Data deletion process documented

#### Business Requirements
- [ ] Support team trained on privacy inquiries
- [ ] 30-day response SLA defined
- [ ] Data deletion process tested
- [ ] Data export feature functional
- [ ] Audit trail for consent tracking

---

## 🛡️ Implementation Best Practices

### 1. Consent Management
```ts
// Track user consent
await saveUserConsent({
  userId: user.id,
  termsAcceptedAt: new Date(),
  termsVersion: '1.0',
  privacyAcceptedAt: new Date(),
  privacyVersion: '1.0',
  locationPermissionsGranted: false,
  cameraPermissionsGranted: false,
  notificationsEnabled: true,
});
```

### 2. Permission Transparency
```tsx
// Always show why permission is needed
<PermissionPrompt
  title="Location Access"
  message="We use your location to show nearby participating businesses."
  learnMoreUrl="/help/location-privacy"
  onAllow={handleAllow}
  onDeny={handleDeny}
/>
```

### 3. Data Deletion
```ts
// Implement robust data deletion
export async function deleteUserAccount(userId: string) {
  // Delete user data
  await prisma.user.delete({ where: { id: userId } });
  
  // Archive loyalty transactions (required for audit)
  await archiveLoyaltyData(userId);
  
  // Remove device tokens (stop notifications)
  await prisma.deviceToken.deleteMany({ where: { userId } });
  
  // Log deletion for compliance
  await logComplianceEvent({
    type: 'USER_DATA_DELETED',
    userId,
    timestamp: new Date(),
  });
}
```

### 4. Third-Party Data Flows
```
Create audit trail for third-party data:
┌─────────────┐
│ User Action │
├─────────────┼──────────────────────────────────────────────┐
│ Upload Photo│ → Google Drive → Combac DB → Show on Profile │
└─────────────┴──────────────────────────────────────────────┘
      Log each step: timestamp, service, data transferred
```

---

## 📞 Support & Maintenance

### Monthly Tasks
- [ ] Review support tickets for privacy questions
- [ ] Monitor for data deletion requests (respond within 30 days)
- [ ] Check for third-party service changes
- [ ] Verify consent records are being captured

### Quarterly Tasks
- [ ] Audit data retention practices
- [ ] Review third-party service agreements
- [ ] Check for regulatory changes in target jurisdictions
- [ ] Update compliance checklist

### Annual Tasks
- [ ] Full policy review and refresh
- [ ] Legal counsel review
- [ ] Update version and reissue to users
- [ ] Compliance audit across all jurisdictions

---

## 🚨 Common Issues & Solutions

### Issue 1: User Requests Data Export
**Solution**: Implement data export endpoint
```ts
// /api/users/export – Returns all user data as JSON
export async function exportUserData(userId: string) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      loyalty: true,
      loyaltyTransactions: true,
      reviews: true,
      notifications: true,
    },
  });
  return JSON.stringify(user, null, 2);
}
```

### Issue 2: User Requests Account Deletion
**Solution**: Implement deletion with retention of audit data
```ts
// Keep transaction data for business/tax purposes
// Delete personal identifiable information
await prisma.user.update({
  where: { id: userId },
  data: {
    email: `deleted-${userId}@deleted.local`,
    phone: null,
    firstName: 'Deleted',
    lastName: 'User',
    avatar: null,
    status: 'deleted',
  },
});
```

### Issue 3: New Third-Party Service Needed
**Solution**: Update Privacy Policy immediately
```md
# Section 4.3: Third-Party Service Providers

#### [New Service Name]  
- **Purpose**: [What data is shared]
- **Data Shared**: [Specific fields]
- **Provider Policy**: [Link to their privacy policy]
```

### Issue 4: Regulatory Change (e.g., New GDPR Rule)
**Solution**: Create patch version
```
- Old: Privacy Policy v1.0
- New: Privacy Policy v1.1 – Updated to reflect GDPR change
- Action: Re-notify users of specific change
```

---

## 📝 Next Steps

1. **Customize Placeholders**
   - Replace all `[PLACEHOLDER]` text with real company information
   - Have legal review placeholders to ensure accuracy

2. **Get Legal Review**
   - Have a lawyer review the documents for your jurisdiction
   - Especially important for liability terms and data handling

3. **Test Implementation**
   - Verify links in app settings work
   - Test full-screen document display
   - Confirm consent tracking is recorded
   - Test data deletion workflow

4. **Deploy to App Stores**
   - Submit updated app with legal links
   - Add Privacy Policy URL to store listing
   - Update permission descriptions in store

5. **Communicate to Users**
   - Notify all users of new terms
   - Provide grace period (7-14 days) for review
   - Require acceptance before continuing use

6. **Monitor & Maintain**
   - Track data deletion requests
   - Monitor support inquiries about privacy
   - Review annually for updates

---

## ✅ Validation Checklist

Before going live, confirm:

- [ ] All company information placeholders filled
- [ ] Contact information tested and active  
- [ ] Links in app functional
- [ ] Documents display correctly on mobile and web
- [ ] Legal counsel has reviewed
- [ ] App Store/Play Store listings updated
- [ ] Support team trained
- [ ] Consent tracking implemented
- [ ] Data deletion process tested
- [ ] Third-party services verified in Privacy Policy
- [ ] Version numbers assigned
- [ ] Short versions display in settings
- [ ] Full versions accessible via web links

---

## 📞 Legal Support

**If you have questions about these documents:**

1. **Regulatory Compliance**: Consult with a lawyer in your jurisdiction
2. **Third-Party Changes**: Review new service agreements and update accordingly
3. **User Disputes**: Contact support@combac.app with documentation
4. **Data Requests**: Maintain audit trail and respond within 30 days

---

**Documents created for Combac, a loyalty rewards platform.**  
**These documents are production-ready but should be reviewed by legal counsel before publishing.**

---
