import React from 'react';

const Page_Title = [
  {
    title: 'Cancellation and Refund Policy',
    desc: 'Thank you for purchasing at Shiksha UG PG. Your satisfaction is important to us, and we understand that circumstances may arise which may require a review of your purchase. Please read our Cancellation and Refund Policy carefully to understand our practices regarding such situations.',
  },
];

const Sub_Items = [
  {
    subtitle: 'Cancellation',
    subpara:
      "Given the nature of digital content that can be downloaded instantly after a purchase has been made, there is no 'cooling off' period. This means that cancellations are not accepted once an order has been placed for a digital product. We strongly advise that you carefully review your selection before completing your purchase.",
  },
  {
    subtitle: 'Refunds',
    subpara:
      "All sales of digital products downloadable upon confirmation of purchase are final. This means that Shiksha UG PG cannot provide refunds or credits for any digital products once a purchase has been made. Please make sure that you've carefully read the product description and ensured it meets your requirements before making a purchase.",
  },
];

const Semi_Items = [
  {
    subpara:
      'Non-delivery of the product: Due to some mailing issues or other unforeseen circumstances, you might not receive a delivery e-mail from us. In this case, we recommend contacting us for assistance at shikshaugpg@gmail.com.',
  },
  {
    subpara:
      'Download issues: If you have problems while downloading the product, we recommend contacting us for assistance at shikshaugpg@gmail.com.',
  },
];

const Page_Items = [
  {
    item: 'Changes to our Policy',
    description:
      'We reserve the right to amend this policy at any time. Any changes will be posted on this page, so please review it periodically. Your continued use of the App after any changes have been posted signifies your acceptance of the revised terms.',
  },
  {
    item: 'Contact Us',
    description:
      'If you have any questions, comments, or requests regarding our Cancellation and Refund Policy, please do not hesitate to contact us at shikshaugpg@gmail.com. This Cancellation and Refund Policy is effective as of 17th May 2023 and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.',
  },
];

const Date = [
  {
    latestdate: '17th May 2023',
  },
];

const Refund = () => {
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
                Digital Products
              </li>
              <p className='text-md text-gray-600'>
                The Shiksha UG PG mobile application ("App") provides a variety
                of study materials in a digital format. These digital products,
                including but not limited to, eBooks, course materials, and
                video lectures, are made available to you immediately after your
                purchase is confirmed.
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
                Exceptional Circumstances
              </li>
              <p className='text-md text-gray-600'>
                While we maintain a strict 'No Refund' policy in general, we
                understand that exceptional circumstances can take place with
                regard to the character of the product we supply. Therefore, we
                do honor refund requests for the following reasons:
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
              <p className='text-md text-gray-600'>
                Please note that we do not bear any responsibility and therefore
                we do not satisfy any refund requests based on incompatibility
                of our products with some third-party software (plug-ins,
                add-ons, modules, etc.) other than those which are specified as
                compatible in a description available on the preview page of
                each product.
              </p>
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

export default Refund;
