import './globals.css'
import Navigation from '@/components/Navigation'
import ContactUs from '@/components/ContactUs'

export const metadata = {
  title: 'CRoME Lab',
  description: 'Community-Engaged Research in Medication Education - Developing novel methods for improving medication safety and health behaviors for vulnerable and underserved populations.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        <ContactUs />
      </body>
    </html>
  )
}