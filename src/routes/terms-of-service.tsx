import { createFileRoute } from '@tanstack/react-router'

import LegalPage from '@/components/LegalPage'

const sections = [
  {
    title: 'Using Rotten Mochi',
    paragraphs: [
      'Rotten Mochi provides tools intended to help users build better self-discipline habits and reduce phone screen time. The service may include missions, tasks, streaks, rankings, leaderboards, rewards, and other competitive or motivational features.',
      'You may use the service only in compliance with applicable law and these Terms. You are responsible for the activity that occurs under your account and for keeping your login credentials secure.',
    ],
  },
  {
    title: 'Eligibility',
    paragraphs: [
      'You must be legally capable of agreeing to these Terms. If you are under the age of majority in your jurisdiction, you may use Rotten Mochi only with the involvement of a parent or legal guardian where required by law.',
    ],
  },
  {
    title: 'Accounts and profiles',
    paragraphs: [
      'When creating an account, you must provide accurate information and keep it reasonably up to date. You may not impersonate another person, misrepresent your identity, or use the service in a way that undermines fair competition or trust in the platform.',
    ],
  },
  {
    title: 'Competitive features and fair play',
    paragraphs: [
      'Rotten Mochi includes rankings and game systems designed to encourage healthier device habits. You agree not to manipulate screen time reporting, create fake accounts, exploit bugs, abuse missions or rewards, harass other users, or interfere with the integrity of leaderboards or progression systems.',
      'We may investigate suspicious activity and suspend, restrict, reset, or remove accounts, rankings, rewards, or content if we believe the service has been abused or competitive systems have been manipulated.',
    ],
  },
  {
    title: 'Health and performance disclaimers',
    paragraphs: [
      'Rotten Mochi is a behavioral and productivity tool, not a medical, mental health, or therapeutic service. We do not guarantee that using the app will reduce screen time, improve well-being, or achieve any specific personal result.',
      'Any missions, tasks, reminders, or competitive prompts are provided for general motivational purposes only. You remain responsible for your own decisions, habits, and use of your devices.',
    ],
  },
  {
    title: 'User content and feedback',
    paragraphs: [
      'If you submit profile content, messages, suggestions, feedback, or other materials through Rotten Mochi, you grant us a non-exclusive, worldwide, royalty-free license to use, host, reproduce, modify, and display that content as needed to operate, improve, and promote the service, subject to our Privacy Policy.',
      'You represent that you have the rights needed to submit that content and that it does not violate the law or the rights of others.',
    ],
  },
  {
    title: 'Availability and changes',
    paragraphs: [
      'We may update, modify, suspend, or discontinue any part of Rotten Mochi at any time, including features, reward systems, ranking formulas, missions, or access methods. We are not liable for the unavailability of the service or for changes to game mechanics or features.',
    ],
  },
  {
    title: 'Termination',
    paragraphs: [
      'You may stop using Rotten Mochi at any time. We may suspend or terminate your access if you violate these Terms, create risk for other users, expose us to legal liability, or misuse the service.',
    ],
  },
  {
    title: 'Disclaimers and limitation of liability',
    paragraphs: [
      'Rotten Mochi is provided on an as-is and as-available basis to the fullest extent permitted by law. We disclaim warranties of merchantability, fitness for a particular purpose, non-infringement, and uninterrupted or error-free operation.',
      'To the fullest extent permitted by law, Rotten Mochi and its operators will not be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages, or for any loss of data, profits, goodwill, or business opportunities arising from or related to your use of the service.',
    ],
  },
  {
    title: 'Changes to these Terms',
    paragraphs: [
      'We may revise these Terms from time to time. If we make material changes, we may provide notice through the app, website, or other appropriate means. By continuing to use Rotten Mochi after the updated Terms take effect, you agree to the revised Terms.',
    ],
  },
  {
    title: 'Contact',
    paragraphs: [
      'If you have questions about these Terms, use Rotten Mochi\'s official support or contact channel when it becomes available. Before launch, you should replace this section with your legal business name, governing law language if desired, and support email address.',
    ],
  },
] satisfies Array<{ title: string; paragraphs: string[] }>

export const Route = createFileRoute('/terms-of-service')({
  component: TermsOfServicePage,
  head: () => ({
    meta: [
      {
        title: 'Terms of Service | Rotten Mochi',
      },
      {
        name: 'description',
        content:
          'Read the rules, fair play terms, and service conditions for Rotten Mochi and its screen time competition features.',
      },
    ],
  }),
})

function TermsOfServicePage() {
  return (
    <LegalPage
      eyebrow="Terms"
      title="Terms of Service"
      effectiveDate="April 1, 2026"
      intro="These Terms of Service govern your access to and use of Rotten Mochi and any related services. By using Rotten Mochi, you agree to these Terms. If you do not agree, do not use the service."
      sections={sections}
    />
  )
}
