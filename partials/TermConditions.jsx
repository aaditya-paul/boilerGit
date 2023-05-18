import React from 'react';

const Page_Title = [
  {
    title: "Shiksha's Terms and Conditions Of Use",
    desc: 'Welcome to Shiksha UG PG. These Terms and Conditions ("Terms") govern your use of the Shiksha UG PG mobile application ("App"). Please read these Terms carefully before using the App.',
  },
];

const Page_Items = [
  {
    item: 'Introduction',
    description:
      'Shiksha UG PG is an Android application designed to provide study materials for college and university students. Users can purchase individual study materials and access them via the App after successful payment.',
  },
  {
    item: 'Acceptance of Terms',
    description:
      'By accessing and using this App, you agree to these Terms. If you do not agree to these Terms, please do not use this App. You represent and warrant that you have full authority to accept these Terms.',
  },
  {
    item: 'Registration and Account Security',
    description:
      'To use the services offered by Shiksha UG PG, users are required to register an account. Each user can only be logged in on one device at a time. The device ID will be registered with Shiksha UG PG. Users are responsible for maintaining the confidentiality of their account information, including their password, and for all activity that occurs under their account. Users are required to notify Shiksha UG PG immediately of any unauthorized use of their accounts.',
  },
  {
    item: 'Device Deregistration',
    description:
      'To de-register the App from a device, users will need to make a request to Shiksha UG PG. Shiksha UG PG reserves the right to take the appropriate time to process the de-registration request.',
  },
  {
    item: 'Intellectual Property Rights',
    description:
      'All study materials available through the App are owned by Shiksha UG PG or its content providers. These materials are protected by copyright, trademark, and other intellectual property laws. Upon payment, Shiksha UG PG grants the user a non-exclusive, non-transferable, revocable license to access and use the purchased study material strictly for personal, non-commercial use.',
  },
  {
    item: 'Prohibited Uses',
    description:
      'Users are prohibited from making any attempt to screenshot, screen record, duplicate, reproduce, distribute, or share the study materials without the explicit permission of Shiksha UG PG. Violation of this clause may lead to termination of access to the App, and legal action may be taken against the user.',
  },
  {
    item: 'Payments',
    description:
      'All payments for study materials must be made in full prior to accessing the materials. All sales are final, and no refunds or credits will be provided once a purchase has been made.',
  },
  {
    item: 'Cancellation and Refund Policy',
    description:
      'Due to the nature of digital content, we do not offer any refunds for materials purchased through the App. Users are advised to carefully review their purchases before completing the transaction.',
  },
  {
    item: 'Termination',
    description:
      "Shiksha UG PG reserves the right to suspend or terminate a user's access to the App for any reason, including breach of these Terms. Shiksha UG PG may exercise this right without notice.",
  },
  {
    item: 'Changes to the Terms',
    description:
      'Shiksha UG PG may modify these Terms at any time. It is your responsibility to periodically review these Terms to stay informed about updates. Your continued use of the App following the posting of revised Terms means that you accept and agree to the changes.',
  },
  {
    item: ' Privacy Policy',
    description:
      'Please refer to our Privacy Policy for information on how we collect, use, and disclose information from our users.',
  },
  {
    item: 'Governing Law',
    description:
      'These Terms are governed by the laws of the country in which Shiksha UG PG operates, without regard to conflict of law principles.',
  },
  {
    item: 'Dispute Resolution',
    description:
      'Any dispute, claim or controversy arising out of or relating to these Terms or the breach, termination, enforcement, interpretation, or validity thereof, shall be resolved amicably. If the parties fail to resolve such dispute within a reasonable period, then the dispute shall be settled by arbitration in accordance with the laws of the country in which Shiksha UG PG operates. The language of the arbitration shall be English.',
  },
  {
    item: 'Limitation of Liability',
    description:
      'In no event will Shiksha UG PG, its affiliates, or their licensors, service providers, employees, agents, officers or directors be liable for damages of any kind, under any legal theory, arising out of or in connection with your use, or inability to use, the App, any content on the App, or any services or items obtained through the App.',
  },
  {
    item: 'Indemnification',
    description:
      "You agree to defend, indemnify, and hold harmless Shiksha UG PG, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the App, including, but not limited to, your user contributions, any use of the App's content, services, and products other than as expressly authorized in these Terms.",
  },
  {
    item: 'Contact Information',
    description:
      'For any queries or clarifications on these Terms, please contact us at shikshaugpg@gmail.com. By using the Shiksha UG PG App, you acknowledge that you have read these Terms and Conditions and agree to be bound by them.',
  },
];

const Date = [
  {
    latestdate: '17th May 2023',
  },
];

const Terms = () => {
  return (
    <section className='relative bg-white'>
      {/* Dark background */}

      <div className='relative max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='pt-32 pb-12 md:pt-40 md:pb-20'>
          {Page_Title.map((page_title, index) => (
            <div key={index} className='text-center mb-9'>
              <h1 className='text-xl font-bold mb-2 uppercase'>
                {page_title.title}
              </h1>
              <p className='text-gray-600'>{page_title.desc}</p>
            </div>
          ))}
          <ol className='list-decimal pl-4'>
            {Page_Items.map((page_items, index) => (
              <div key={index} className='mb-6'>
                <li className='text-lg font-bold mb-1 uppercase'>
                  {page_items.item}
                </li>
                <p className='text-md text-gray-600'>
                  {page_items.description}
                </p>
              </div>
            ))}
          </ol>
          <div className='flex justify-end'>
            {Date.map((date, index) => (
              <div key={index} className='flex text-lg text-gray-700'>
                Lastest Update: {date.latestdate}
              </div>
            ))}
          </div>
          {/* Subscribe form */}
        </div>
      </div>
    </section>
  );
};

export default Terms;
