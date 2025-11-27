'use client';
import { useState, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';
import { HoverEffect } from '@/components/ui/card-hover-effect';
import axios from 'axios';
import { Button } from '@/components/ui/moving-border';
import { ChevronLeft, MoveUpLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Atom } from 'react-loading-indicators';
import toast from 'react-hot-toast';

const Page = () => {
  const [message, setMessage] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleMessageDelete = async (id: number) => {
    try {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/api/message/${id}`
      );
      setMessage((prev) => prev.filter((m) => m.id !== id));

      toast.success('Successfully deleted');
      // await response.data;
    } catch (error) {
      toast.error('Internal Server Error');
    }
  };

  const fetchMessags = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/message`
      );
      console.log(response.data);
      const data = await response.data;
      setMessage(data);
      console.log(message);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMessags();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center pt-50 lg:pt-34">
        <Atom color="#179fde" size="medium" text="" textColor="" />
      </div>
    );
  }

  return (
    <section className="relative container w-full py-4 px-8 md:px-16  min-h-screen overflow-hidden">
      <div className="flex flex-col items-center text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="font-quicksand text-3xl md:text-4xl font-bold "
        >
          Messages{' '}
          <span
            className="bg-clip-text text-transparent 
          bg-gradient-to-r from-blue-600 to-purple-600"
          >
            Without
          </span>{' '}
          or say{' '}
          <span
            className="bg-clip-text text-transparent 
          bg-gradient-to-r from-blue-600 to-purple-600 bg-black "
          >
            Signatures
          </span>
          <span className="text-black dark:text-white">in a Bottle</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="font-bold font-quicksand tracking-wide text-neutral-600 dark:text-neutral-400 py-1.5 "
        >
          Brief voices that arrived without faces or footprints.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="flex-col md:flex-row items-center justify-center md:justify-end pt-4 lg:mr-24"
        >
          <Button
            borderRadius="1.75rem"
            className="font-bold flex items-center gap-2"
            onClick={() => router.push('/')}
          >
            <MoveUpLeft />
            Home
          </Button>
        </motion.div>
      </div>

      <HoverEffect items={message} onDelete={handleMessageDelete} />
    </section>
  );
};

export default Page;
