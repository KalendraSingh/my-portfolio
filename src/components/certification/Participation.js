import React from 'react'
import CertificateCard from './CertificateCard'
import { certificateParticipationData } from '../../data/data'

export default function Achievement() {
  return (
    <section
      id="projects"
      className="w-full py-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
       {
          certificateParticipationData.map(certificateItem => (
            <CertificateCard
              key={certificateItem.id}
              certificateItem = {certificateItem}
            />
          ))
       }

      </div>
    </section>
  )
}
