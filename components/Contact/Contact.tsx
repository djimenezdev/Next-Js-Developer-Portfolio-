import userData from '@constants/data';

import { ContactSocials } from './ContactSocials';
import { ContactInfo } from './ContactInfo';
import { ContactHeader } from './ContactHeader';
import { ContactForm } from './ContactForm';

export default function Contact() {
  return (
    <section className='px-4'>
      <div className='max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800 antialiased'>
        <h1 className=' text-5xl md:text-9xl font-bold py-20 text-center md:text-left'>
          Contact
        </h1>
      </div>
      <div className='relative z-10 rounded-md shadow-md bg-gradient-to-r from-[#38bdf8] to-[#3b82f6] p-4 md:p-10 lg:p-20 max-w-6xl mx-auto mb-20 -mt-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='md:ml-4 md:block flex flex-col'>
            <ContactHeader />
            <ContactInfo userData={userData} />
            <ContactSocials userData={userData} />
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
