import React from 'react';

const Page_Title = [
  {
    title: 'Privacy Policy',
    desc: 'Welcome to Shiksha UG PG. This Privacy Policy outlines the types of information we collect, how we use it, how we protect it, and what choices you have regarding your information. By using the Shiksha UG PG mobile application ("App"), you agree to the collection and use of information in accordance with this policy.',
  },
];

const Sub_Items = [
  {
    subtitle: 'Personal Information',
    subpara:
      'When you register for an account with Shiksha UG PG, we may ask you to provide certain personal information such as your name, email address, mobile number, and course details.',
  },
  {
    subtitle: 'Device Information',
    subpara:
      'We may collect information about the device you use to access the App, including the device ID, operating system, and mobile network information.',
  },
  {
    subtitle: 'Usage Information',
    subpara:
      'We collect information about your use of our App, including the pages you visit, the time and duration of your visits, and the links you click on.',
  },
  {
    subtitle: 'Purchase Information',
    subpara:
      'When you make a purchase through the App, we collect transaction details such as what you bought, the price, and the date and location of the purchase.',
  },
  {
    subtitle: 'Location Information',
    subpara:
      'With your consent, we may collect information about your actual location when you use our App. We use various technologies to determine location, including IP address and GPS.',
  },
];

const Semi_Items = [
  {
    subpara: 'To provide, maintain, and improve our services.',
  },
  {
    subpara:
      'To process transactions and send you related information, including purchase confirmations and invoices.',
  },
  {
    subpara:
      'To personalize your experience and deliver content relevant to your interests.',
  },
  {
    subpara: 'To send you technical notices, updates, and support messages.',
  },
  {
    subpara: 'To protect against fraudulent, illegal, or harmful actions.',
  },
  {
    subpara: 'To comply with legal obligations.',
  },
  {
    subpara: 'To conduct research and analyze data to improve our services.',
  },
];

const Sub_Semi_Items = [
  {
    subpara:
      'With service providers who perform services on our behalf, such as payment processing, data analysis, and email delivery.',
  },
  {
    subpara:
      'In response to legal process or a request for information if we believe disclosure is in accordance with any applicable law, regulation, or legal process.',
  },
  {
    subpara:
      'If we believe your actions are inconsistent with our user agreements or policies or to protect the rights, property, and safety of Shiksha UG PG or others.',
  },
  {
    subpara:
      'In connection with, or during negotiations of, any merger, sale of company assets, financing or acquisition of all or a portion of our business to another company.',
  },
];

const Page_Items = [
  {
    item: 'Data Security',
    description:
      'We implement a variety of security measures to help protect your information, including encryption, access controls, and secure data storage. However, no security system is impenetrable and we cannot guarantee the security of our systems 100%. In the event of a security breach, we will notify you in accordance with applicable laws.',
  },
  {
    item: 'Registration and Account Security',
    description:
      'To use the services offered by Shiksha UG PG, users are required to register an account. Each user can only be logged in on one device at a time. The device ID will be registered with Shiksha UG PG. Users are responsible for maintaining the confidentiality of their account information, including their password, and for all activity that occurs under their account. Users are required to notify Shiksha UG PG immediately of any unauthorized use of their accounts.',
  },
  {
    item: 'Data Retention',
    description:
      'We retain your personal information for as long as necessary to provide the services you have requested or for other essential purposes, such as complying with legal obligations, resolving disputes, and enforcing our policies.',
  },
  {
    item: "Children's Privacy",
    description:
      'Our App is not intended for users under the age of 18. We do not knowingly collect personal information from children under 18. If we discover that a child under 18 has provided us with personal information, we will promptly delete such information.',
  },
  {
    item: 'International Data Transfers',
    description:
      'We may transfer, store, and process your information in countries other than your own, in accordance with applicable data protection laws.',
  },
  {
    item: 'Changes to this Privacy Policy',
    description:
      'We may change this Privacy Policy from time to time to reflect new services, changes in our personal data practices or relevant laws. If we make significant changes, we will notify you by email or through a notification on the App, and we will indicate when such changes will become effective.',
  },
  {
    item: 'Cookies and Similar Technologies',
    description:
      'We and our third-party partners may use cookies and similar technologies to provide and personalize our Service, analyse usage, target advertisements and prevent fraud. You can disable cookies in your browser settings, but some parts of our Service may then not function properly.',
  },
  {
    item: 'Contact Us',
    description:
      'If you have any questions about this Privacy Policy, or if you would like to exercise your rights, please contact us at shikshaugpg@gmail.com. This Privacy Policy is effective as of 17th May 2023 and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page. We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically.',
  },
];

const Date = [
  {
    latestdate: '17th May 2023',
  },
];

const Privacy = () => {
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
          <div className='mb-5'>
            <ol className='list-disc pl-4'>
              <li className='text-lg font-bold mb-1 uppercase'>
                Information We Collect
              </li>
              <p className='text-md text-gray-600'>
                We collect information to provide better services to all our
                users. The information we collect includes:
              </p>
              <ol className='list-decimal'>
                {Sub_Items.map((sub_items, index) => (
                  <div key={index} className='mt-3 mb-3 pl-3 sm:pl-8'>
                    <li className='text-md font-bold uppercase'>
                      {sub_items.subtitle}
                    </li>
                    <p className='text-sm text-gray-600'>{sub_items.subpara}</p>
                  </div>
                ))}
              </ol>
            </ol>
          </div>
          <div className='mb-5'>
            <ol className='list-disc pl-4'>
              <li className='text-lg font-bold mb-1 uppercase'>
                How We Use Information
              </li>
              <p className='text-md text-gray-600'>
                The information we collect is used for various purposes
                including:
              </p>
              <ol className='list-decimal'>
                {Semi_Items.map((semi_items, index) => (
                  <div key={index} className='mt-3 mb-3 pl-3 sm:pl-8'>
                    <li className='text-md text-gray-600'>
                      {semi_items.subpara}
                    </li>
                  </div>
                ))}
              </ol>
            </ol>
          </div>
          <div className='mb-5'>
            <ol className='list-disc pl-4'>
              <li className='text-lg font-bold mb-1 uppercase'>
                Information Sharing and Disclosure
              </li>
              <p className='text-md text-gray-600'>
                We do not sell or rent your personal information to third
                parties. However, we may share your information in the following
                situations:
              </p>
              <ol className='list-decimal'>
                {Sub_Semi_Items.map((sub_semi_items, index) => (
                  <div key={index} className='mt-3 mb-3 pl-3 sm:pl-8'>
                    <li className='text-md text-gray-600'>
                      {sub_semi_items.subpara}
                    </li>
                  </div>
                ))}
              </ol>
            </ol>
          </div>
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

export default Privacy;
