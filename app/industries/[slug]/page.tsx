import { notFound } from 'next/navigation'
import { createPageMetadata } from '@/lib/seo'
import { industryPages } from '@/lib/growth-pages'
import GrowthLandingPage from '@/components/GrowthLandingPage'

export function generateStaticParams() { return industryPages.map(({ slug }) => ({ slug })) }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const page = industryPages.find(item => item.slug === slug); return page ? createPageMetadata({ title: page.title, description: page.description, path: `/industries/${slug}` }) : {} }
export default async function Page({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const page = industryPages.find(item => item.slug === slug); if (!page) notFound(); return <GrowthLandingPage page={page} /> }
