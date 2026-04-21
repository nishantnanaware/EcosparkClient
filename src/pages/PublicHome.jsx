import React from 'react';
import { Link } from 'react-router-dom';
import { Fuel, ArrowRight } from 'lucide-react';

export default function PublicHome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cdefs%3E%3Cpattern id=%22g%22 width=%2260%22 height=%2260%22 patternUnits=%22userSpaceOnUse%22%3E%3Cpath d=%22M60 0H0v60%22 fill=%22none%22 stroke=%22%23ffffff%22 stroke-opacity=%22.04%22/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=%22100%25%22 height=%22100%25%22 fill=%22url%28%23g%29%22/%3E%3C/svg%3E')] opacity-80" />
      <div className="relative max-w-5xl mx-auto px-6 pt-16 pb-24">
        <div className="flex items-center gap-3 mb-16">
          <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur">
            <Fuel className="w-7 h-7 text-emerald-400" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">EcoSpark</h1>
            <p className="text-sm text-white/60">CNG slot booking</p>
          </div>
        </div>

        <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-4">
          Welcome
        </p>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Book your CNG fill time. Skip the queue.
        </h2>
        <p className="text-lg text-white/75 max-w-2xl mb-10">
          Drivers, station staff, and admins use the same platform with role-based portals.
          Sign in to continue or create an account as a customer.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            to="/login"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold transition-colors"
          >
            Sign in <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/register?role=user"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/25 hover:bg-white/10 font-medium transition-colors"
          >
            Register as customer
          </Link>
        </div>
      </div>
    </div>
  );
}
