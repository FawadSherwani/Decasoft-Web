export type GrowthPage = {
  slug: string
  title: string
  eyebrow: string
  description: string
  audience: string
  services: string[]
}

const industryRows: Array<[string, string, string, string, string, string[]]> = [
  ['real-estate', 'Digital Marketing for Real Estate', 'Real Estate', 'Generate qualified buyer, seller, tenant, and investor enquiries with campaigns built around your inventory.', 'developers, brokers, and property managers', ['Property landing pages', 'Meta lead campaigns', 'Google Search Ads', 'Lead qualification']],
  ['clinics', 'Digital Marketing for Clinics', 'Clinics', 'Build patient trust and generate appointment enquiries with compliant, location-focused digital marketing.', 'clinics, medical centres, and specialists', ['Local SEO', 'Appointment landing pages', 'Google Ads', 'Reputation strategy']],
  ['restaurants', 'Digital Marketing for Restaurants', 'Restaurants', 'Turn local searches and social discovery into reservations, orders, and repeat customers.', 'restaurants, cafes, and cloud kitchens', ['Local SEO', 'Social campaigns', 'Ordering websites', 'Content strategy']],
  ['e-commerce', 'eCommerce Growth Marketing', 'E-commerce', 'Increase qualified store traffic, conversion rate, and repeat revenue across the customer journey.', 'online retailers and direct-to-consumer brands', ['Shopping campaigns', 'Meta Ads', 'Store optimisation', 'Email retention']],
  ['car-detailing', 'Marketing for Car Detailing Businesses', 'Car Detailing', 'Fill your booking calendar with local vehicle owners searching for detailing and protection services.', 'detailers, ceramic coating studios, and car-care brands', ['Local lead generation', 'Google Ads', 'Service landing pages', 'WhatsApp booking funnels']],
  ['immigration-consultants', 'Marketing for Immigration Consultants', 'Immigration Consultants', 'Generate and qualify consultation enquiries with clear service pages and trust-led campaigns.', 'immigration and visa consultancies', ['Lead funnels', 'SEO content', 'Google Ads', 'CRM-ready forms']],
  ['construction', 'Digital Marketing for Construction Companies', 'Construction', 'Showcase capability, win relevant enquiries, and strengthen credibility with decision-makers.', 'contractors, builders, and engineering firms', ['Corporate websites', 'Project portfolios', 'B2B lead generation', 'SEO']],
  ['law-firms', 'Digital Marketing for Law Firms', 'Law Firms', 'Help prospective clients find the right legal service and request a confidential consultation.', 'law firms and legal consultants', ['Local SEO', 'Practice-area pages', 'Google Ads', 'Conversion tracking']],
]
export const industryPages: GrowthPage[] = industryRows.map(([slug, title, eyebrow, description, audience, services]) => ({ slug, title, eyebrow, description, audience, services }))

const seoRows: Array<[string, string, string, string, string, string[]]> = [
  ['digital-marketing-agency-dubai', 'Digital Marketing Agency Dubai', 'Dubai, UAE', 'Grow your Dubai business with integrated SEO, paid media, content, and conversion-focused digital strategy.', 'businesses in Dubai and across the UAE', ['Digital strategy', 'Meta Ads', 'Google Ads', 'SEO']],
  ['seo-agency-dubai', 'SEO Agency Dubai', 'Dubai, UAE', 'Improve search visibility and generate qualified organic enquiries with technical, local, and content SEO.', 'businesses competing in Dubai search results', ['SEO audit', 'Technical SEO', 'Local SEO', 'Content strategy']],
  ['google-ads-agency-dubai', 'Google Ads Agency Dubai', 'Dubai, UAE', 'Reach high-intent customers with measurable Google Search, Performance Max, and remarketing campaigns.', 'Dubai companies focused on qualified leads and sales', ['Account audit', 'Campaign build', 'Conversion tracking', 'Ongoing optimisation']],
  ['meta-ads-agency-dubai', 'Meta Ads Agency Dubai', 'Dubai, UAE', 'Generate awareness, leads, and sales with creative-led Facebook and Instagram advertising.', 'Dubai brands ready to scale social acquisition', ['Creative strategy', 'Lead campaigns', 'eCommerce ads', 'Retargeting']],
  ['web-development-company-dubai', 'Web Development Company Dubai', 'Dubai, UAE', 'Launch a fast, responsive, SEO-ready website designed around your business and conversion goals.', 'Dubai businesses requiring a professional web presence', ['Corporate websites', 'Landing pages', 'eCommerce', 'Performance optimisation']],
  ['digital-marketing-agency-pakistan', 'Digital Marketing Agency Pakistan', 'Pakistan', 'Build visibility and predictable demand with integrated digital marketing for Pakistani businesses.', 'businesses across Pakistan', ['Digital strategy', 'SEO', 'Paid media', 'Content']],
  ['seo-agency-pakistan', 'SEO Agency Pakistan', 'Pakistan', 'Earn sustainable organic visibility with search strategies tailored to Pakistani and international markets.', 'Pakistani businesses targeting local or global customers', ['SEO audit', 'Technical SEO', 'Content SEO', 'Authority building']],
  ['web-development-company-pakistan', 'Web Development Company Pakistan', 'Pakistan', 'Create responsive, scalable websites that communicate credibility and turn visits into enquiries.', 'companies and startups across Pakistan', ['Web design', 'Development', 'eCommerce', 'Maintenance']],
  ['google-ads-agency-pakistan', 'Google Ads Agency Pakistan', 'Pakistan', 'Capture active demand through professionally managed and conversion-tracked Google Ads.', 'Pakistani businesses seeking measurable acquisition', ['Search Ads', 'Shopping Ads', 'Remarketing', 'Analytics']],
  ['digital-marketing-agency-faisalabad', 'Digital Marketing Agency Faisalabad', 'Faisalabad, Pakistan', 'Work with a Faisalabad-based team for SEO, advertising, content, and web-led growth.', 'businesses in Faisalabad and Punjab', ['Growth strategy', 'Meta Ads', 'Google Ads', 'SEO']],
  ['web-development-company-faisalabad', 'Web Development Company Faisalabad', 'Faisalabad, Pakistan', 'Build a modern business website with a local Faisalabad team focused on speed, usability, and results.', 'Faisalabad companies, retailers, and startups', ['Business websites', 'eCommerce', 'Landing pages', 'Support']],
  ['seo-company-faisalabad', 'SEO Company Faisalabad', 'Faisalabad, Pakistan', 'Improve local and national rankings with technical fixes, relevant content, and transparent SEO reporting.', 'businesses that need stronger search visibility', ['Local SEO', 'Technical SEO', 'Keyword strategy', 'Reporting']],
]
export const seoPages: GrowthPage[] = seoRows.map(([slug, title, eyebrow, description, audience, services]) => ({ slug, title, eyebrow, description, audience, services }))
