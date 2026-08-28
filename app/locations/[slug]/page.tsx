import { notFound } from 'next/navigation'
import { createPageMetadata } from '@/lib/seo'
import { seoPages } from '@/lib/growth-pages'
import GrowthLandingPage from '@/components/GrowthLandingPage'

export function generateStaticParams() { return seoPages.map(({ slug }) => ({ slug })) }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const page = seoPages.find(item => item.slug === slug); return page ? createPageMetadata({ title: page.title, description: page.description, path: `/locations/${slug}` }) : {} }
export default async function Page({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const page = seoPages.find(item => item.slug === slug); if (!page) notFound(); return <GrowthLandingPage page={page} /> }
