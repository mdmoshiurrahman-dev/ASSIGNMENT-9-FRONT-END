import { ArrowRight, Calendar } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const JoinedNotFound = () => {
  return (
     <div className="text-center dark:bg-[#1B271E] py-12 px-4 rounded-3xl bg-white border border-zinc-200/80 shadow-xs max-w-lg mx-auto">
          <Calendar className="w-12 h-12 mx-auto text-zinc-400 mb-3" />
          <h3 className="text-lg dark:text-[#F3F5EF] font-bold text-zinc-900 mb-1">
            No Joined Events
          </h3>
          <p className="text-sm dark:text-[#B5C0B5] text-zinc-600 mb-5">
            You haven&apos;t joined any events yet. Explore upcoming events and
            make an impact!
          </p>
          <Link
            href="/events"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1b4332] text-white text-sm font-semibold hover:bg-[#143527] transition-colors"
          >
            <span>Explore Events</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
  )
}

export default JoinedNotFound