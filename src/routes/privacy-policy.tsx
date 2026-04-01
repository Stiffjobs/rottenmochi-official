import { createFileRoute } from '@tanstack/react-router'

import LegalPage from '@/components/LegalPage'

const sections = [
  {
    title: 'Information we collect',
    paragraphs: [
      'Rotten Mochi is built to help users reduce phone screen time through tasks, missions, streaks, and competitive progression. To provide that experience, we may collect information such as account details, profile information, app usage data, screen time-related metrics that you choose to share through the app, mission and task activity, streak history, rank progress, and leaderboard participation data.',
      'We may also collect technical information needed to operate and secure the service, including device information, approximate location derived from IP address, log data, crash reports, and analytics about how features are used.',
    ],
  },
  {
    title: 'How we use information',
    paragraphs: [
      'We use information to operate, maintain, and improve Rotten Mochi. This includes showing your progress, calculating streaks and rankings, powering competitive game systems, personalizing tasks and missions, preventing abuse, responding to support requests, and understanding product performance.',
      'We may also use aggregated or de-identified information to analyze trends, improve engagement systems, and develop future features without identifying individual users.',
    ],
  },
  {
    title: 'Leaderboards and social features',
    paragraphs: [
      'Because Rotten Mochi includes competitive features, certain profile and performance information may be visible to other users. This can include your display name, rank, streak status, mission completion signals, and relative screen time performance when those features are enabled in the app.',
      'You should only share information in your profile that you are comfortable making visible within the community features of the service.',
    ],
  },
  {
    title: 'How information is shared',
    paragraphs: [
      'We do not sell your personal information. We may share information with service providers who help us operate the app, such as hosting, analytics, customer support, communications, and infrastructure providers, subject to appropriate contractual protections.',
      'We may also disclose information if required by law, to enforce our terms, to protect the rights and safety of users and the public, or in connection with a business transaction such as a merger, acquisition, or asset sale.',
    ],
  },
  {
    title: 'Data retention',
    paragraphs: [
      'We retain information for as long as reasonably necessary to provide the service, maintain records, resolve disputes, enforce agreements, and meet legal obligations. Retention periods may vary depending on the type of data and how it is used.',
    ],
  },
  {
    title: 'Your choices and rights',
    paragraphs: [
      'Depending on where you live, you may have rights to access, correct, delete, or restrict certain personal information. You may also be able to update some profile and account information directly through the app when those controls are available.',
      'If Rotten Mochi offers notifications, emails, or other communications, you can opt out of non-essential messages using the controls we provide.',
    ],
  },
  {
    title: 'Children',
    paragraphs: [
      'Rotten Mochi is not intended for children under 13, or a higher minimum age where required by local law. If we learn that personal information has been collected from a child in violation of applicable law, we will take reasonable steps to delete it.',
    ],
  },
  {
    title: 'Security',
    paragraphs: [
      'We use reasonable administrative, technical, and organizational measures to protect information. No method of transmission or storage is completely secure, so we cannot guarantee absolute security.',
    ],
  },
  {
    title: 'Changes to this policy',
    paragraphs: [
      'We may update this Privacy Policy from time to time. If we make material changes, we may provide notice through the app, website, or other appropriate means. Your continued use of Rotten Mochi after an updated policy becomes effective means the updated policy will apply going forward.',
    ],
  },
  {
    title: 'Contact',
    paragraphs: [
      'If you have questions about this Privacy Policy or want to make a privacy-related request, use Rotten Mochi\'s official support or contact channel when it becomes available. Before launch, you should replace this section with your legal business name and support email address.',
    ],
  },
] satisfies Array<{ title: string; paragraphs: string[] }>

export const Route = createFileRoute('/privacy-policy')({
  component: PrivacyPolicyPage,
  head: () => ({
    meta: [
      {
        title: 'Privacy Policy | Rotten Mochi',
      },
      {
        name: 'description',
        content:
          'Read how Rotten Mochi handles account data, screen time metrics, rankings, tasks, and competitive app features.',
      },
    ],
  }),
})

function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Privacy"
      title="Privacy Policy"
      effectiveDate="April 1, 2026"
      intro="This Privacy Policy explains how Rotten Mochi collects, uses, and shares information when you use our app and related services. Rotten Mochi is a self-discipline app focused on helping users reduce screen time through accountability, challenges, and game-like progression."
      sections={sections}
    />
  )
}
