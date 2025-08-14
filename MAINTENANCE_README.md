# Maintenance Mode Setup

This portfolio includes a maintenance page that can be easily activated without affecting your Vercel deployment.

## Files Added

1. **`app/maintenance/page.tsx`** - The maintenance page component
2. **`app/maintenance/maintenance.css`** - Styles for the maintenance page
3. **`app/maintenance-wrapper.tsx`** - Wrapper component to control maintenance mode

## How to Enable Maintenance Mode

### Method 1: Toggle via Code (Recommended)

1. Open `app/maintenance-wrapper.tsx`
2. Change `MAINTENANCE_MODE` from `false` to `true`
3. Commit and push your changes to trigger a new deployment

```typescript
const MAINTENANCE_MODE = true; // Change this to true to enable maintenance mode
```

### Method 2: Direct Route Access

Your maintenance page is also available directly at `/maintenance` route, so you can:

- Visit `https://yourdomain.com/maintenance` to preview the maintenance page
- Redirect users to this route if needed

## How to Disable Maintenance Mode

1. Open `app/maintenance-wrapper.tsx`
2. Change `MAINTENANCE_MODE` from `true` to `false`
3. Commit and push your changes

## Customization

You can customize the maintenance page by editing:

- **Content**: Modify `app/maintenance/page.tsx`
- **Styling**: Edit `app/maintenance/maintenance.css`
- **Contact Information**: Update the email and social links in the maintenance page

## Features

- ✅ Responsive design that works on all devices
- ✅ Animated maintenance icon
- ✅ Contact information display
- ✅ Social media links (LinkedIn, GitHub)
- ✅ Professional gradient background
- ✅ Easy toggle on/off functionality
- ✅ No impact on existing Vercel deployment until activated

## Preview

The maintenance page includes:

- A friendly "We'll be back soon!" message
- Your contact email for urgent inquiries
- Links to your LinkedIn and GitHub profiles
- Professional styling with animations
- Responsive design for mobile and desktop

This setup allows you to quickly activate maintenance mode whenever needed while keeping your existing portfolio intact.
