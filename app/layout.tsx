// import type { Metadata } from 'next'
// import { Poppins, Montserrat } from 'next/font/google'
// import './globals.css'

// const poppins = Poppins({
//   subsets: ['latin'],
//   weight: ['300', '400', '500', '600', '700', '800', '900'],
//   variable: '--font-poppins',
// })

// const montserrat = Montserrat({
//   subsets: ['latin'],
//   weight: ['400', '600', '700', '800', '900'],
//   variable: '--font-montserrat',
// })

// export const metadata: Metadata = {
//   title: "D'ECASOFT – Customer Focused. Quality Driven.",
//   description: 'Award-winning custom software and web development company.',
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <head>
//         <link
//           rel="stylesheet"
//           href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
//         />
//       </head>
//       <body className={`${poppins.variable} ${montserrat.variable} font-poppins bg-white text-gray-800 overflow-x-hidden`}>
//         {children}
//       </body>
//     </html>
//   )
// }
import type { Metadata } from 'next'
import { Poppins, Montserrat } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "D'ECASOFT – Customer Focused. Quality Driven.",
  description: 'Award-winning custom software and web development company.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${poppins.variable} ${montserrat.variable} font-poppins bg-white text-gray-800 overflow-x-hidden`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
