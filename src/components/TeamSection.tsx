import { TeamMember } from "./TeamMember";
import { useTranslation } from 'react-i18next';

export const TeamSection = () => {
  const { t } = useTranslation();

  const teamMembers = [
    {
      name: t('team.members.hamada.name'),
      role: t('team.members.hamada.role'),
      imagePath: "/406363140_10229571887435619_4554932660817499091_n.jpg",
      description: t('team.members.hamada.description')
    },
    {
      name: t('team.members.murata.name'),
      role: t('team.members.murata.role'),
      imagePath: "/４-1.jpg",
      description: t('team.members.murata.description')
    },
    {
      name: t('team.members.tsutsumi.name'),
      role: t('team.members.tsutsumi.role'),
      imagePath: "/2024-10-23 13.17.34.png",
      description: t('team.members.tsutsumi.description')
    },
    {
      name: t('team.members.tateishi.name'),
      role: t('team.members.tateishi.role'),
      imagePath: "/2024-10-23 13.15.30.png",
      description: t('team.members.tateishi.description')
    },
    {
      name: t('team.members.awata.name'),
      role: t('team.members.awata.role'),
      imagePath: "/kPq28fl6_400x400.jpg",
      description: t('team.members.awata.description')
    },
    {
      name: t('team.members.takinishi.name'),
      role: t('team.members.takinishi.role'),
      imagePath: "/356407976_809626707393076_4635497050248137000_n.jpg",
      description: t('team.members.takinishi.description')
    },
    {
      name: t('team.members.iwase.name'),
      role: t('team.members.iwase.role'),
      imagePath: "/ganchan.png",
      description: t('team.members.iwase.description')
    }
  ];

  return (
    <section className="py-20 px-4 container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">{t('team.title')}</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
            role={member.role}
            description={member.description}
            imagePath={member.imagePath}
          />
        ))}
      </div>
    </section>
  );
};