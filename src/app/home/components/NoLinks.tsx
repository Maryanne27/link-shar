import NoLinksIcon from '@/assets/NoLinksIcon'
import React from 'react'

function NoLinks() {
  return (
    <div className="grid justify-items-center gap-6 mt-10 mx-5">

      <NoLinksIcon className="w-32 h-auto" />

      <h3 className="text-lg font-semibold">
        Let&apos;s get you started
      </h3>

      <p className="text-center max-w-sm text-gray-600">
        Use the &quot;Add new link&quot; button to get started. Once you have more than one link, you can reorder and edit them. We&apos;re here to help you share your profiles with everyone!
      </p>

    </div>
  )
}

export default NoLinks
