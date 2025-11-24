'use client';
import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion'; // use framer-motion if possible
import { Input } from '../ui/input';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Button2 } from '../ui/stateful-button';
import { Label } from '../ui/label';
import { cn } from '@/lib/utils';
import axios from 'axios';
// import Link from 'next/link';

const WhisperMe = () => {
  const [formContent, setFormContent] = useState({
    name: '',
    message: '',
  });
  // const [isLoading, setLoading] = useState(false);
  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // setLoading(true);

    try {
      console.log(formContent.name);
      console.log(formContent.message);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/wishper`,
        {
          ...formContent,
        }
      );

      console.log('Message sent successfully', response.data);
      setFormContent({
        name: '',
        message: '',
      });
    } catch (error) {
      console.error('Error sending message ❌', error);
    }
  };
  return (
    <section className="relative container w-full py-24 pb-20 lg:py-30 min-h-screen overflow-hidden">
      <div className="flex flex-col items-center text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="font-quicksand text-3xl md:text-4xl font-bold "
        >
          Say{' '}
          <span
            className="bg-clip-text text-transparent 
          bg-gradient-to-r from-blue-600 to-purple-600"
          >
            something… <br></br>
          </span>{' '}
          or say{' '}
          <span
            className="bg-clip-text text-transparent 
          bg-gradient-to-r from-blue-600 to-purple-600 bg-black "
          >
            nothing{' '}
          </span>
          <span className="text-black dark:text-white">in a Bottle</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="font-bold font-quicksand tracking-wide text-neutral-600 dark:text-neutral-400 py-1.5 "
        >
          Drop your thoughts anonymously — your identity is optional.
        </motion.p>

        {/*  */}
        <Card className="w-full max-w-md lg:max-w-lg my-4">
          <CardHeader>
            <CardTitle className="font-extrabold text-md md:text-xl">
              Your Wishper 🗣️​​ My Inbox 📩
            </CardTitle>
            {/* <CardDescription className="mb-1">
              Share your secrets, ideas, or musings <br></br> anonymity
              guaranteed.
            </CardDescription> */}
          </CardHeader>
          <CardContent>
            <form onSubmit={handleFormSubmit} id="wishper_form">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col items-start gap-2 ">
                  <Label htmlFor="name" className="font-bold">
                    Your Secret Identity 🕵️‍♂️
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formContent.name}
                    onChange={(e) =>
                      setFormContent({ ...formContent, name: e.target.value })
                    }
                    placeholder="Leave me guessing… or give me a nickname"
                  />
                  <span className="text-xs text-gray-700 font-bold">
                    You can leave this blank — your identity is safe.
                  </span>
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="message" className="font-bold">
                      Speak your mind…💡
                    </Label>
                  </div>
                  <textarea
                    id="message"
                    value={formContent.message}
                    onChange={(e) =>
                      setFormContent({
                        ...formContent,
                        message: e.target.value,
                      })
                    }
                    placeholder="Tell me anything — feedback, ideas, secrets."
                    className={cn(
                      'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-48 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
                      'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
                      'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive'
                    )}
                    required
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button2
              form="wishper_form"
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 dark:from-purple-600 dark:to-blue-600 hover:ring-blue-600 text-black dark:text-white font-bold "
            >
              Whisper Away
            </Button2>
          </CardFooter>
        </Card>

        {/* <p className="font-bold">See what other people says...</p>
        <Link href="/message" className="font-bold hover:text-red-500">
          Click Me
        </Link> */}
      </div>
    </section>
  );
};

export default WhisperMe;
