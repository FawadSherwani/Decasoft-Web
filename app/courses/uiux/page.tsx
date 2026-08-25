'use client'

import Link from 'next/link'
import { FormEvent, useState } from 'react'
import {
  ArrowRight, Award, CheckCircle2, CircleUserRound, Component,
  FileStack, Frame, GraduationCap, Layers3, MousePointer2, PenTool,
  Search, Smartphone, Sparkles, Users, WandSparkles,
} from 'lucide-react'
import CourseAutoTranslate from '@/components/CourseAutoTranslate'
import CourseCaptcha from '@/components/CourseCaptcha'

const skills = [
  { icon: Search, title: 'User Research', text: 'Discover user needs through interviews, surveys, and competitor analysis.' },
  { icon: Frame, title: 'Wireframing', text: 'Turn ideas into clear user flows and low-fidelity screen structures.' },
  { icon: PenTool, title: 'Visual Design', text: 'Use hierarchy, typography, colour, and spacing to create polished interfaces.' },
  { icon: MousePointer2, title: 'Prototyping', text: 'Create interactive Figma prototypes that feel like the final product.' },
  { icon: Component, title: 'Design Systems', text: 'Build reusable components and consistent, scalable UI libraries.' },
  { icon: Users, title: 'Usability Testing', text: 'Test your decisions, find friction, and improve designs with evidence.' },
]

const modules = [
  { week: '01', title: 'UX Foundations & Research', text: 'Design thinking, interviews, personas, competitor reviews, and problem statements.' },
  { week: '02', title: 'Information Architecture', text: 'User journeys, task flows, site maps, hierarchy, and low-fidelity wireframes.' },
  { week: '03', title: 'UI Design in Figma', text: 'Auto layout, grids, components, variants, responsive screens, and visual polish.' },
  { week: '04', title: 'Prototype, Test & Portfolio', text: 'Interactive prototypes, usability tests, iteration, handoff, and a complete case study.' },
]

const audience = [
  { icon: Sparkles, text: 'Beginners exploring a creative digital career' },
  { icon: GraduationCap, text: 'Students building practical, job-ready skills' },
  { icon: PenTool, text: 'Graphic designers moving into product design' },
  { icon: Smartphone, text: 'Developers and founders improving product usability' },
]

const outcomes = [
  { icon: FileStack, text: 'Two portfolio-ready product design projects' },
  { icon: Layers3, text: 'A reusable Figma UI kit and design system' },
  { icon: Award, text: 'Decasofts certificate of completion' },
  { icon: CircleUserRound, text: 'Portfolio and interview preparation' },
]

const facts = ['6-WEEK PRACTICAL COURSE', 'FIGMA & FIGJAM', '2 PORTFOLIO PROJECTS', 'BEGINNER FRIENDLY']
const whyDecasofts = [
  '10+ years of industry experience',
  'ISO 27001-certified for quality service',
  'Over 50+ certified developers',
  '500+ Successful Projects',
  'Multiple award-winning agency',
  'Result-oriented approach',
  'Certified by Clutch.co & G2.com',
  'AWS Certified Engineers',
]
type Status = 'idle' | 'loading' | 'success' | 'error'

export default function UiUxCoursePage() {
  const [status, setStatus] = useState<Status>('idle')
  const [captchaToken, setCaptchaToken] = useState('')
  const [captchaReset, setCaptchaReset] = useState(0)
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', course: 'UI/UX Design', batch: '', message: '' })
  const update = (name: keyof typeof form, value: string) => setForm((current) => ({ ...current, [name]: value }))

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!captchaToken) { alert('Please confirm that you are not a robot.'); return }
    setStatus('loading')
    try {
      const response = await fetch('/api/contact', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, captchaToken }),
      })
      if (!response.ok) throw new Error('Request failed')
      setStatus('success')
      setForm({ firstName: '', lastName: '', email: '', phone: '', course: 'UI/UX Design', batch: '', message: '' })
    } catch { setStatus('error'); setCaptchaReset((value) => value + 1) }
  }

  const inputClass = 'w-full border border-[#E4DFD4] bg-white rounded-lg px-4 py-3 text-sm text-[#1A1B23] placeholder:text-[#A6A29A] focus:outline-none focus:ring-2 focus:ring-[#bf2227]/30 focus:border-[#bf2227] transition-all'

  return (
    <main className="course-detail-page overflow-hidden bg-[#faf8f3] text-[#171820]"><CourseAutoTranslate />
      <section className="relative">
        <div className="absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_80%_20%,rgba(191,34,39,0.12),transparent_38%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 pt-16 lg:grid-cols-[0.9fr_1.1fr] lg:pt-24">
          <div>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#bf2227]/20 bg-[#bf2227]/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#bf2227]"><WandSparkles className="h-3.5 w-3.5" /> Beginner-friendly course</span>
            <h1 className="text-5xl font-black leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl">Design products<br />people <span className="text-[#bf2227]">love.</span></h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-[#67666f]">Learn the complete UI/UX process—from research and wireframes to polished Figma prototypes—and build a portfolio that shows how you solve real product problems.</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="#enroll" className="inline-flex items-center gap-2 rounded-xl bg-[#bf2227] px-7 py-3.5 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5">Enroll now <ArrowRight className="h-4 w-4" /></Link>
              <Link href="#curriculum" className="rounded-xl border border-[#d8d2c7] bg-white px-7 py-3.5 text-sm font-bold transition hover:border-[#171820]">View curriculum</Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[620px]">
            <div className="absolute -inset-8 rounded-full bg-[#bf2227]/10 blur-3xl" />
            <div className="relative rounded-[2rem] border border-black/10 bg-[#171820] p-3 shadow-2xl">
              <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2.5"><i className="h-2.5 w-2.5 rounded-full bg-[#ff6b63]" /><i className="h-2.5 w-2.5 rounded-full bg-[#f0bd4e]" /><i className="h-2.5 w-2.5 rounded-full bg-[#58c57b]" /><span className="ml-3 text-[10px] font-semibold text-white/40">travel-app.fig</span></div>
              <div className="grid min-h-[370px] grid-cols-[64px_1fr] overflow-hidden rounded-b-[1.35rem] bg-[#eeeae2] sm:grid-cols-[150px_1fr]">
                <div className="border-r border-black/10 bg-white p-3"><p className="hidden text-[9px] font-bold uppercase tracking-wider text-black/35 sm:block">Layers</p>{['Header', 'Search', 'Cards', 'Navigation'].map((layer, i) => <div key={layer} className="mt-4 flex items-center gap-2 text-[10px] text-black/45"><span className={`h-3 w-3 rounded-sm ${i === 1 ? 'bg-[#bf2227]' : 'border border-black/20'}`} /><span className="hidden sm:inline">{layer}</span></div>)}</div>
                <div className="relative flex items-center justify-center p-5">
                  <div className="w-[210px] rounded-[28px] border-[6px] border-[#171820] bg-white p-4 shadow-xl"><div className="mx-auto mb-5 h-1 w-12 rounded-full bg-black/10" /><p className="text-[10px] font-semibold text-black/40">Discover</p><h3 className="mt-1 text-xl font-black">Find your next trip</h3><div className="mt-4 rounded-xl bg-[#f4f1eb] px-3 py-2 text-[9px] text-black/35">Search destinations</div><div className="mt-4 grid grid-cols-2 gap-2"><div className="h-28 rounded-xl bg-gradient-to-br from-[#cf3f46] to-[#7a161b] p-3 text-[9px] font-bold text-white">Bali</div><div className="h-28 rounded-xl bg-gradient-to-br from-[#2e455c] to-[#91a8b7] p-3 text-[9px] font-bold text-white">Dubai</div></div></div>
                  <MousePointer2 className="absolute bottom-16 right-8 h-7 w-7 fill-[#bf2227] text-white drop-shadow-lg sm:right-20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-x-auto bg-[#171820] py-4"><div className="mx-auto flex min-w-max max-w-7xl items-center justify-between gap-12 px-6">{facts.map((fact) => <span key={fact} className="flex items-center gap-12 text-xs font-bold tracking-[0.12em] text-white/75">{fact}<i className="h-1.5 w-1.5 rounded-full bg-[#bf2227]" /></span>)}</div></section>

      <section id="curriculum" className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#bf2227]">What you&apos;ll learn</p><h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">From blank canvas to validated product.</h2><p className="mt-4 leading-7 text-[#67666f]">Build strategic thinking and practical Figma skills together, so every screen you design has a clear reason behind it.</p></div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{skills.map(({ icon: Icon, title, text }) => <article key={title} className="group rounded-2xl border border-[#e6e0d5] bg-white p-6 transition hover:-translate-y-1 hover:border-[#bf2227]/40 hover:shadow-xl"><span className="grid h-11 w-11 place-items-center rounded-xl bg-[#bf2227]/10 text-[#bf2227] transition group-hover:bg-[#bf2227] group-hover:text-white"><Icon className="h-5 w-5" /></span><h3 className="mt-5 font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-[#74727a]">{text}</p></article>)}</div>
      </section>

      <section className="border-y border-[#e6e0d5] bg-white py-24"><div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#bf2227]">Course roadmap</p><h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">Learn by designing, not just watching.</h2><p className="mt-5 leading-7 text-[#67666f]">Each module moves your product forward. Finish with research, a design system, an interactive prototype, and a presentation-ready case study.</p></div><div className="space-y-4">{modules.map((m) => <article key={m.week} className="grid gap-4 rounded-2xl border border-[#e6e0d5] bg-[#faf8f3] p-6 sm:grid-cols-[64px_1fr]"><span className="text-3xl font-black text-[#bf2227]/30">{m.week}</span><div><h3 className="font-bold">{m.title}</h3><p className="mt-2 text-sm leading-6 text-[#74727a]">{m.text}</p></div></article>)}</div></div></section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-24 lg:grid-cols-2">
        <article className="rounded-3xl border border-[#e6e0d5] bg-white p-8 sm:p-10"><h2 className="text-2xl font-black">Who this course is for</h2><div className="mt-7 space-y-5">{audience.map(({ icon: Icon, text }) => <div key={text} className="flex items-center gap-4 text-sm text-[#5f5e67]"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[#bf2227]/10 text-[#bf2227]"><Icon className="h-4 w-4" /></span>{text}</div>)}</div></article>
        <article className="rounded-3xl bg-[#171820] p-8 text-white sm:p-10"><h2 className="text-2xl font-black">What you&apos;ll leave with</h2><div className="mt-7 space-y-5">{outcomes.map(({ icon: Icon, text }) => <div key={text} className="flex items-center gap-4 text-sm text-white/75"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[#bf2227]/20 text-[#ff6068]"><Icon className="h-4 w-4" /></span>{text}</div>)}</div></article>
      </section>

      <section id="enroll" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 overflow-hidden rounded-2xl bg-[#13141C] shadow-2xl lg:grid-cols-2">
          <div className="relative overflow-hidden p-10 text-white lg:p-12">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#bf2227]/10 blur-3xl" />
            <p className="relative mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#bf2227]">Trusted Partner</p>
            <h3 className="relative mb-7 text-2xl font-bold">Why Decasofts?</h3>
            <ul className="relative space-y-3.5 text-sm text-white/80">
              {whyDecasofts.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#bf2227]" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/contact-us" className="relative mt-9 inline-flex rounded-lg border border-white/30 px-6 py-3 text-xs font-bold text-white transition-colors hover:bg-white hover:text-[#13141C]">
              BOOK A FREE CONSULTATION
            </Link>
          </div>

          <div className="bg-[#FAF8F3] p-10 lg:p-12">
            {status === 'success' ? (
              <div className="flex h-full flex-col items-center justify-center py-10 text-center">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#129E8F]/10">
                  <CheckCircle2 className="h-8 w-8 text-[#129E8F]" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-[#13141C]">Message Sent!</h3>
                <p className="text-sm text-[#7A7872]">We&apos;ll get back to you shortly.</p>
                <button onClick={() => setStatus('idle')} className="mt-6 text-xs font-semibold text-[#bf2227] underline">Send another message</button>
              </div>
            ) : (
              <form onSubmit={submit}>
                <h3 className="mb-6 text-lg font-bold text-[#13141C]">Get in touch</h3>
                <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <label className="text-xs font-semibold text-[#5B5A66]">First Name<input required className={`${inputClass} mt-1.5`} placeholder="First Name" value={form.firstName} onChange={(e) => update('firstName', e.target.value)} /></label>
                  <label className="text-xs font-semibold text-[#5B5A66]">Last Name<input required className={`${inputClass} mt-1.5`} placeholder="Last Name" value={form.lastName} onChange={(e) => update('lastName', e.target.value)} /></label>
                </div>
                <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <label className="text-xs font-semibold text-[#5B5A66]">Email<input required type="email" className={`${inputClass} mt-1.5`} placeholder="Email" value={form.email} onChange={(e) => update('email', e.target.value)} /></label>
                  <label className="text-xs font-semibold text-[#5B5A66]">Phone Number<input required type="tel" className={`${inputClass} mt-1.5`} placeholder="Phone Number" value={form.phone} onChange={(e) => update('phone', e.target.value)} /></label>
                </div>
                <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <label className="text-xs font-semibold text-[#5B5A66]">Course
                    <select required className={`${inputClass} mt-1.5`} value={form.course} onChange={(e) => update('course', e.target.value)}>
                      <option value="">Select Course</option><option>Web Development</option><option>Digital Marketing</option><option>Graphic Designing</option><option>UI/UX Design</option><option>Videography</option><option>E-Commerce</option>
                    </select>
                  </label>
                  <label className="text-xs font-semibold text-[#5B5A66]">Batch
                    <select required className={`${inputClass} mt-1.5`} value={form.batch} onChange={(e) => update('batch', e.target.value)}>
                      <option value="">Select Batch</option><option>Morning Batch</option><option>Evening Batch</option>
                    </select>
                  </label>
                </div>
                <label className="text-xs font-semibold text-[#5B5A66]">Message
                  <textarea required className={`${inputClass} mt-1.5 resize-none`} placeholder="Message" rows={3} value={form.message} onChange={(e) => update('message', e.target.value)} />
                </label>
                <div className="mt-4"><CourseCaptcha onVerify={setCaptchaToken} resetKey={captchaReset} /></div>
                {status === 'error' && <p className="mt-3 text-xs text-red-500">Something went wrong. Please try again.</p>}
                <button type="submit" disabled={status === 'loading'} className="mt-6 w-full rounded-lg bg-[#bf2227] py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(255,68,56,0.5)] transition-colors hover:bg-[#E63A2F] disabled:opacity-60">
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
