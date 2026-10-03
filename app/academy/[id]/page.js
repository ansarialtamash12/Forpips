"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MapPin, Star, Clock, CheckCircle2, TrendingUp, Users, BookOpen,
  ShieldCheck, Target, ChevronDown, ChevronUp, Layers, ArrowRight,
} from "lucide-react";

import { ACADEMIES } from "../AcademyClient";

export default function AcademyDetailPage({ params }) {
  const { id } = use(params);
  const academy = ACADEMIES.find((a) => a.id === Number(id));

  if (!academy) {
    notFound();
  }

  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    { q: "Do I need experience?", a: "No. The Forex Fundamentals batch starts from zero." },
    { q: "Can I visit before enrolling?", a: "Yes. Book a free demo class using the enquiry form." },
    { q: "What are the payment options?", a: "Full payment or two instalments. Ask the academy for current offers." },
    { q: "Will I get a certificate?", a: "Yes, students who pass the final assessment receive a ForPips partner academy certificate." },
    { q: "Is this academy run by ForPips?", a: "It is an independent partner academy following ForPips curriculum standards." },
  ];

  return (
    <div className="font-sans bg-slate-50 text-slate-900 antialiased min-h-screen">
  

      {/* ================= HERO SECTION ================= */}
      <section className="bg-[#0B1220] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="none">
            <path d="M0,250 Q300,150 600,280 T1200,200" stroke="#0CBFFF" strokeWidth="1" fill="none" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center relative">
          <div>
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="px-3 py-1 rounded-full border border-[#0CBFFF]/50 text-[#0CBFFF] text-xs font-semibold">
                Live trading floor
              </span>
              <span className="px-3 py-1 rounded-full border border-[#0CBFFF]/50 text-[#0CBFFF] text-xs font-semibold">
                Weekend batches
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold text-white font-['Inter'] leading-tight mb-5">
              {academy.title}
            </h1>

            <p className="text-slate-400 leading-relaxed max-w-md mb-6">
              Learn forex face to face in {academy.location.split(",")[0]}, with live mentorship and small in-person batches.
            </p>

            <div className="mb-7">
              <p className="text-slate-300 text-sm">{academy.location}</p>
              <p className="text-white text-sm mt-1.5">
                <span className="font-bold text-base">{academy.rating}</span>{" "}
                <span className="text-slate-400">from {academy.reviews} reviews</span>
              </p>
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              <button className="px-6 py-3 rounded-full bg-[#0CBFFF] text-white font-semibold text-sm hover:bg-[#02BFFD] transition-colors shadow-[0_0_20px_rgba(12,191,255,0.3)]">
                Book a free demo
              </button>
              <a
                href="#courses"
                className="px-6 py-3 rounded-full border border-white/25 text-white font-semibold text-sm hover:border-[#0CBFFF] transition-colors"
              >
                View courses
              </a>
              <a
                href="#overview"
                className="w-11 h-11 rounded-full border border-white/25 flex items-center justify-center text-white hover:border-[#0CBFFF] hover:text-[#0CBFFF] transition-colors"
              >
                <ArrowRight className="w-4 h-4 -rotate-45" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="bg-[#e6f7ff] rounded-2xl h-72 md:h-80 flex items-end justify-center gap-2 md:gap-3 p-6 overflow-hidden">
              {[
                { h: "45%", color: "#94a3b8" },
                { h: "60%", color: "#0CBFFF" },
                { h: "75%", color: "#0CBFFF" },
                { h: "50%", color: "#94a3b8" },
                { h: "65%", color: "#0CBFFF" },
                { h: "90%", color: "#0CBFFF" },
                { h: "70%", color: "#94a3b8" },
              ].map((bar, i) => (
                <div
                  key={i}
                  className="w-6 md:w-10 rounded-t-md"
                  style={{ height: bar.h, backgroundColor: bar.color }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= NAV TABS ================= */}
      <div className="sticky top-[70px] z-30 -mt-[1px] bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 overflow-x-auto">
          <div className="flex items-center gap-6 py-3 text-sm whitespace-nowrap">
            {[
              { label: "Overview", href: "#overview" },
              { label: "Why us", href: "#why-us" },
              { label: "Courses", href: "#courses" },
              { label: "Roadmap", href: "#roadmap" },
              { label: "Mentors", href: "#mentors" },
              { label: "Facilities", href: "#facilities" },
              { label: "Reviews", href: "#reviews" },
              { label: "Outcomes", href: "#outcomes" },
              { label: "Events", href: "#events" },
              { label: "Gallery", href: "#gallery" },
              { label: "Location", href: "#location" },
              { label: "FAQs", href: "#faqs" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[#4a4a6a] hover:text-[#0CBFFF] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* ================= LEFT COLUMN ================= */}
        <div className="lg:col-span-2 space-y-16">

          {/* 1. ACADEMY OVERVIEW */}
          <section id="overview">
            <h1 className="text-3xl md:text-4xl font-extrabold font-['Inter'] text-[#1a1a2e] mb-4">
              Academy overview
            </h1>
            <p className="text-[#4a4a6a] leading-relaxed mb-6">
              {academy.title} is an independent ForPips partner center in {academy.location.split(",")[0]}. Since 2021 it has run structured in-person batches with live mentorship, following the ForPips curriculum from fundamentals to live trading practice. Classes are taught in English + Hindi, in small groups, with every student getting chart feedback from a trainer.
            </p>

            <div className="w-full h-48 bg-[#0B1220] rounded-2xl mb-6 flex items-center justify-center overflow-hidden">
              <div className="flex gap-2">
                <div className="w-12 h-12 rounded-full bg-slate-700"></div>
                <div className="w-12 h-12 rounded-full bg-[#0CBFFF]"></div>
                <div className="w-12 h-12 rounded-full bg-slate-700"></div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { val: "2021", label: "Established" },
                { val: "180+", label: "Students trained" },
                { val: "12", label: "Students per batch" },
                { val: "3", label: "Batch timings" },
              ].map((stat, i) => (
                <div key={i} className="rounded-2xl border-2 border-[#0CBFFF]/30 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#0CBFFF] hover:shadow-[#0CBFFF]/20">
                  <p className="text-xl font-bold text-[#1a1a2e]">{stat.val}</p>
                  <p className="text-xs text-[#4a4a6a] mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 2. WHY CHOOSE */}
          <section id="why-us">
            <h2 className="text-3xl md:text-4xl font-extrabold font-['Inter'] text-[#1a1a2e] mb-2">
              Why choose this academy
            </h2>
            <p className="text-sm text-[#4a4a6a] mb-6">
              What students in {academy.location.split(",")[0]} get here that they would not get from online videos alone.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { icon: Users, title: "Small batches", desc: "Around 12 students per batch, so every chart gets reviewed." },
                { icon: TrendingUp, title: "Live market practice", desc: "Weekly sessions on the trading floor, not just slides." },
                { icon: BookOpen, title: "Taught in English + Hindi", desc: "Concepts explained in the language you think in." },
                { icon: ShieldCheck, title: "Risk-first teaching", desc: "Capital protection comes before profit targets." },
                { icon: Target, title: "Online + offline", desc: "Your ForPips online progress stays linked to your account." },
                { icon: Clock, title: "Flexible batches", desc: "Weekday morning, evening and weekend options." },
              ].map((item, i) => (
                <div key={i} className="group rounded-2xl border-2 border-[#0CBFFF]/30 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#0CBFFF] hover:shadow-[#0CBFFF]/20">
                  <div className="w-11 h-11 rounded-xl bg-[#0CBFFF]/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-[#0CBFFF]">
                    <item.icon className="w-5 h-5 text-[#0CBFFF] transition-all duration-300 group-hover:text-white" />
                  </div>
                  <h3 className="font-semibold text-[#1a1a2e] mb-2 transition-colors duration-300 group-hover:text-[#0CBFFF]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#4a4a6a] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 3. COURSES */}
          <section id="courses">
            <h2 className="text-3xl md:text-4xl font-extrabold font-['Inter'] text-[#1a1a2e] mb-6">
              Courses and programs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { badge: "Beginner", title: "Forex Fundamentals", desc: "Currency pairs, pips, lots, leverage and risk basics.", price: "₹20,500", weeks: "4 weeks" },
                { badge: "Intermediate", title: "Technical Analysis Pro", desc: "Price action, market structure, indicators and live chart reviews.", price: "₹37,000", weeks: "8 weeks" },
                { badge: "Advanced", title: "Live Trading Mentorship", desc: "Trade beside mentors on the floor with weekly performance reviews.", price: "₹63,000", weeks: "12 weeks" },
                { badge: "Any level", title: "IB & Partnership Program", desc: "Build an introducing-broker business with ForPips.", price: "₹17,500", weeks: "3 weeks" },
              ].map((course, i) => (
                <div key={i} className="group rounded-2xl border-2 border-[#0CBFFF]/30 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#0CBFFF] hover:shadow-[#0CBFFF]/20 flex flex-col justify-between">
                  <div>
                    <span className="inline-block px-2 py-1 bg-[#0CBFFF]/10 text-[#0CBFFF] text-[10px] font-semibold uppercase rounded mb-3">
                      {course.badge}
                    </span>
                    <h3 className="font-semibold text-[#1a1a2e] text-base mb-1 transition-colors duration-300 group-hover:text-[#0CBFFF]">
                      {course.title}
                    </h3>
                    <p className="text-sm text-[#4a4a6a] leading-relaxed mb-4">{course.desc}</p>
                  </div>
                  <div className="flex items-center justify-between mt-4 border-t border-[#0CBFFF]/20 pt-4">
                    <div>
                      <p className="text-lg font-bold text-[#1a1a2e]">{course.price}</p>
                      <p className="text-[10px] text-[#4a4a6a]">{course.weeks}</p>
                    </div>
                    <button className="px-4 py-2 bg-[#0CBFFF] text-white text-xs font-semibold rounded-lg hover:bg-[#02BFFD] transition-colors">
                      Enquire
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-[#4a4a6a] mt-4">Fees are set by the academy and may change. Confirm current fees when you enquire.</p>
          </section>

          {/* 4. UPCOMING BATCHES */}
          <section id="batches">
            <h2 className="text-3xl md:text-4xl font-extrabold font-['Inter'] text-[#1a1a2e] mb-6">
              Upcoming batches
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "Weekday morning", time: "Mon-Fri, 8:30-10:00 AM", status: "Few seats", statusColor: "text-orange-500" },
                { title: "Weekday evening", time: "Mon-Fri, 6:30-8:30 PM", status: "Open", statusColor: "text-emerald-500" },
                { title: "Weekend", time: "Sat-Sun, 11:00 AM-2:00 PM", status: "Open", statusColor: "text-emerald-500" },
              ].map((batch, i) => (
                <div key={i} className="rounded-2xl border-2 border-[#0CBFFF]/30 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#0CBFFF] hover:shadow-[#0CBFFF]/20">
                  <h3 className="font-semibold text-[#1a1a2e] text-sm">{batch.title}</h3>
                  <p className="text-xs text-[#4a4a6a] mt-1">{batch.time}</p>
                  <p className={`text-xs font-semibold mt-3 ${batch.statusColor}`}>{batch.status}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 5. LEARNING ROADMAP */}
          <section id="roadmap">
            <h2 className="text-3xl md:text-4xl font-extrabold font-['Inter'] text-[#1a1a2e] mb-2">
              Learning roadmap
            </h2>
            <p className="text-sm text-[#4a4a6a] mb-6">The full 12-week path from first chart to live practice.</p>

            <div className="relative border-l-2 border-[#0CBFFF]/30 ml-3 space-y-8 pb-4">
              {[
                { week: "Weeks 1-2", title: "Foundations", desc: "Market structure, sessions, pairs, order types, platform setup." },
                { week: "Weeks 3-5", title: "Chart reading", desc: "Support and resistance, trends, candlestick behaviour." },
                { week: "Weeks 6-8", title: "Strategy building", desc: "Entries, exits, indicators, and building a written trading plan." },
                { week: "Weeks 9-10", title: "Risk and psychology", desc: "Position sizing, drawdown rules, journaling, discipline." },
                { week: "Weeks 11-12", title: "Live practice", desc: "Demo-account trading with mentor review and final assessment." },
              ].map((step, i) => (
                <div key={i} className="relative pl-8">
                  <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-[#0CBFFF] text-white text-xs font-bold flex items-center justify-center border-4 border-slate-50">
                    {i + 1}
                  </div>
                  <div className="flex items-center gap-3">
                    <h3 className="font-semibold text-[#1a1a2e] text-sm">{step.title}</h3>
                    <span className="text-[10px] font-semibold text-[#0CBFFF] bg-[#0CBFFF]/10 px-2 py-0.5 rounded">{step.week}</span>
                  </div>
                  <p className="text-sm text-[#4a4a6a] mt-1">{step.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 6. MENTORS */}
          <section id="mentors">
            <h2 className="text-3xl md:text-4xl font-extrabold font-['Inter'] text-[#1a1a2e] mb-6">
              Your mentors
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { name: "Rohan Mehta", role: "Lead trainer", desc: "9+ years in forex markets. Runs the live trading floor sessions.", initials: "RM" },
                { name: "Neha Kapoor", role: "Technical analysis mentor", desc: "6+ years in forex markets. Teaches price action and chart reviews.", initials: "NK" },
                { name: "Faisal Khan", role: "Risk and psychology coach", desc: "7+ years in forex markets. Helps students build trading discipline.", initials: "FK" },
              ].map((mentor, i) => (
                <div key={i} className="rounded-2xl border-2 border-[#0CBFFF]/30 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#0CBFFF] hover:shadow-[#0CBFFF]/20 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#0CBFFF]/10 text-[#0CBFFF] flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {mentor.initials}
                  </div>
                  <h3 className="font-semibold text-[#1a1a2e] text-sm">{mentor.name}</h3>
                  <p className="text-[10px] text-[#0CBFFF] uppercase tracking-wider mb-2 font-semibold">{mentor.role}</p>
                  <p className="text-sm text-[#4a4a6a] leading-relaxed">{mentor.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 7. FACILITIES */}
          <section id="facilities">
            <h2 className="text-3xl md:text-4xl font-extrabold font-['Inter'] text-[#1a1a2e] mb-6">
              Academy facilities
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Live trading floor", "Workstation per student", "High-speed internet", "Smart classroom",
                "Lounge and pantry", "Parking nearby", "Air-conditioned rooms", "Study library",
              ].map((facility, i) => (
                <div key={i} className="group rounded-2xl border-2 border-[#0CBFFF]/30 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#0CBFFF] hover:shadow-[#0CBFFF]/20 flex flex-col items-center text-center">
                  <div className="w-11 h-11 rounded-xl bg-[#0CBFFF]/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-[#0CBFFF]">
                    <Layers className="w-5 h-5 text-[#0CBFFF] transition-all duration-300 group-hover:text-white" />
                  </div>
                  <p className="text-sm font-medium text-[#1a1a2e]">{facility}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 8. REVIEWS */}
          <section id="reviews">
            <h2 className="text-3xl md:text-4xl font-extrabold font-['Inter'] text-[#1a1a2e] mb-6">
              Student reviews
            </h2>
            <div className="rounded-2xl border-2 border-[#0CBFFF]/30 bg-white p-6 mb-6">
              <p className="text-3xl font-bold text-[#1a1a2e]">{academy.rating}</p>
              <p className="text-xs text-[#4a4a6a] mt-1">Average from {academy.reviews} reviews</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { name: "Aarav S.", role: "Student, Forex Fundamentals", text: "I joined as a complete beginner. The live chart reviews made risk management finally click." },
                { name: "Pooja D.", role: "Student, Technical Analysis Pro", text: "Small batch and the mentors answer everything. The trading floor sessions are the best part." },
                { name: "Imran K.", role: "Student, Live Trading Mentorship", text: "Clear curriculum and honest teaching. No signals or shortcuts, only process." },
              ].map((review, i) => (
                <div key={i} className="rounded-2xl border-2 border-[#0CBFFF]/30 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#0CBFFF] hover:shadow-[#0CBFFF]/20">
                  <p className="text-sm text-[#4a4a6a] italic mb-4">"{review.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#0CBFFF]/10 text-[#0CBFFF] flex items-center justify-center text-xs font-bold">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#1a1a2e]">{review.name}</p>
                      <p className="text-[10px] text-[#4a4a6a]">{review.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 9. ACHIEVEMENTS */}
          <section id="outcomes">
            <h2 className="text-3xl md:text-4xl font-extrabold font-['Inter'] text-[#1a1a2e] mb-6">
              Achievements and outcomes
            </h2>
            <div className="bg-[#0B1220] rounded-2xl p-6 text-white mb-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {[
                  { val: "180+", label: "Students trained" },
                  { val: "92%", label: "Finish their course" },
                  { val: "14", label: "Workshops held in 2026" },
                  { val: "4.8★", label: "Student rating" },
                ].map((stat, i) => (
                  <div key={i}>
                    <p className="text-2xl font-bold text-[#0CBFFF]">{stat.val}</p>
                    <p className="text-[10px] text-slate-400 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              {[
                { year: "2021", text: "Academy opened in Mumbai." },
                { year: "2022", text: "Crossed 50 students trained." },
                { year: "2025", text: "Named a ForPips Partner Academy of the Year (demo)." },
                { year: "2026", text: "Launched weekend live trading floor sessions." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 text-sm">
                  <span className="font-bold text-[#0CBFFF] w-10">{item.year}</span>
                  <span className="text-[#4a4a6a]">{item.text}</span>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-[#4a4a6a] mt-4">
              Outcomes describe learning completion, not trading profits. Trading involves risk and results are not guaranteed.
            </p>
          </section>

          {/* 10. WORKSHOPS */}
          <section id="events">
            <h2 className="text-3xl md:text-4xl font-extrabold font-['Inter'] text-[#1a1a2e] mb-6">
              Workshops and events
            </h2>
            <div className="space-y-4">
              {[
                { day: "18", month: "Oct", title: "Forex Risk Management Workshop", time: "Sat, 11:00 AM at the academy. Free." },
                { day: "08", month: "Nov", title: "Live Market Open Day", time: "Sun, 10:00 AM at the academy. Free." },
                { day: "29", month: "Nov", title: "Price Action Masterclass", time: "Sun, 2:00 PM at the academy. ₹499." },
              ].map((event, i) => (
                <div key={i} className="rounded-2xl border-2 border-[#0CBFFF]/30 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#0CBFFF] hover:shadow-[#0CBFFF]/20 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="bg-[#0CBFFF]/10 border border-[#0CBFFF]/30 rounded-lg p-2 text-center w-12">
                      <p className="text-lg font-bold text-[#1a1a2e] leading-none">{event.day}</p>
                      <p className="text-[10px] text-[#0CBFFF] uppercase font-semibold">{event.month}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1a1a2e] text-sm">{event.title}</h3>
                      <p className="text-xs text-[#4a4a6a]">{event.time}</p>
                    </div>
                  </div>
                  <button className="px-3 py-1.5 border border-[#0CBFFF]/40 text-[#0CBFFF] text-xs font-semibold rounded-lg hover:border-[#0CBFFF] hover:bg-[#0CBFFF]/10 transition-colors">
                    Reserve a seat
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* 11. GALLERY */}
          <section id="gallery">
            <h2 className="text-3xl md:text-4xl font-extrabold font-['Inter'] text-[#1a1a2e] mb-6">
              Academy gallery
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[1, 2, 3, 4, 5, 6].map((img) => (
                <div key={img} className="aspect-video bg-[#e6f7ff] rounded-2xl border-2 border-[#0CBFFF]/30 flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-[#0CBFFF]/40" />
                </div>
              ))}
            </div>
          </section>

          {/* 12. LOCATION */}
          <section id="location">
            <h2 className="text-3xl md:text-4xl font-extrabold font-['Inter'] text-[#1a1a2e] mb-6">
              Location and contact
            </h2>
            <div className="rounded-2xl border-2 border-[#0CBFFF]/30 overflow-hidden bg-white">
              <div className="w-full h-40 bg-[#e6f7ff] flex items-center justify-center border-b border-[#0CBFFF]/30">
                <MapPin className="w-10 h-10 text-[#0CBFFF]" />
              </div>
              <div className="p-6 space-y-2 text-sm text-[#4a4a6a]">
                <p className="font-medium text-[#1a1a2e]">3rd Floor, Link Road, {academy.location.split(",")[0]}</p>
                <p>Mon-Sat, 9:00 AM-8:00 PM</p>
                <p>+91 00000 00000</p>
                <p>{academy.location.split(",")[0].toLowerCase()}@forpips-academy.example</p>
                <a href="#" className="inline-block mt-3 text-[#0CBFFF] font-semibold text-xs hover:underline">
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </section>

          {/* 13. FAQs */}
          <section id="faqs">
            <h2 className="text-3xl md:text-4xl font-extrabold font-['Inter'] text-[#1a1a2e] mb-6">
              Frequently asked questions
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="rounded-2xl border-2 border-[#0CBFFF]/30 bg-white overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                    className="w-full flex items-center justify-between p-4 text-left"
                  >
                    <span className="font-semibold text-[#1a1a2e] text-sm">{faq.q}</span>
                    <span className="shrink-0 w-6 h-6 rounded-full bg-[#0CBFFF]/10 flex items-center justify-center text-[#0CBFFF]">
                      {openFaq === i ? (
                        <ChevronUp className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5" />
                      )}
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className="px-4 pb-4 text-sm text-[#4a4a6a] leading-relaxed border-t border-[#0CBFFF]/20 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* ================= RIGHT COLUMN (STICKY FORM) ================= */}
        <div className="lg:col-span-1">
          <div className="sticky top-32 border-2 border-[#0CBFFF]/30 rounded-2xl p-6 bg-white max-h-[calc(100vh-9rem)] overflow-y-auto">
            <h3 className="text-lg font-extrabold text-[#1a1a2e] font-['Inter'] mb-1">
              Book a free demo class
            </h3>
            <p className="text-xs text-[#4a4a6a] mb-6">
              The academy will contact you within one working day.
            </p>

            <form className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-[#1a1a2e] mb-1">Full name</label>
                <input
                  type="text"
                  className="w-full border-2 border-[#0CBFFF]/30 rounded-lg px-3 py-2 text-sm text-[#1a1a2e] focus:outline-none focus:border-[#0CBFFF] transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#1a1a2e] mb-1">Phone number</label>
                <input
                  type="tel"
                  className="w-full border-2 border-[#0CBFFF]/30 rounded-lg px-3 py-2 text-sm text-[#1a1a2e] focus:outline-none focus:border-[#0CBFFF] transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#1a1a2e] mb-1">Course</label>
                <select className="w-full border-2 border-[#0CBFFF]/30 rounded-lg px-3 py-2 text-sm text-[#1a1a2e] focus:outline-none focus:border-[#0CBFFF] transition-colors bg-white">
                  <option>Forex Fundamentals</option>
                  <option>Technical Analysis Pro</option>
                  <option>Live Trading Mentorship</option>
                  <option>IB & Partnership Program</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-[#1a1a2e] mb-1">Preferred batch</label>
                <select className="w-full border-2 border-[#0CBFFF]/30 rounded-lg px-3 py-2 text-sm text-[#1a1a2e] focus:outline-none focus:border-[#0CBFFF] transition-colors bg-white">
                  <option>Weekday morning</option>
                  <option>Weekday evening</option>
                  <option>Weekend</option>
                </select>
              </div>
              <button
                type="button"
                className="w-full bg-[#0CBFFF] text-white font-semibold text-sm py-2.5 rounded-lg hover:bg-[#02BFFD] transition-colors mt-2"
              >
                Request demo
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* ================= CTA SECTION ================= */}
      <section className="bg-[#0B1220] py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="none">
            <path d="M0,250 Q300,150 600,280 T1200,200" stroke="#0CBFFF" strokeWidth="1" fill="none" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white font-['Inter'] mb-4">
            Start learning forex in {academy.location.split(",")[0]}
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            Visit {academy.title}, sit in on a free class, and meet your mentors before you decide.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="px-6 py-3 rounded-full bg-[#0CBFFF] text-white font-semibold text-sm hover:bg-[#02BFFD] transition-colors shadow-[0_0_20px_rgba(12,191,255,0.3)]">
              Book a free demo
            </button>
            <Link
              href="/academy"
              className="px-6 py-3 rounded-full border border-white/25 text-white font-semibold text-sm hover:border-[#0CBFFF] hover:text-[#0CBFFF] transition-colors"
            >
              Compare other academies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}