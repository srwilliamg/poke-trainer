import './root.css';

import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Toaster, toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { FaArrowRight } from 'react-icons/fa6';
import { Input } from '@/components/ui/input';
import { setName } from '@/store/slice/trainer';
import { useAppTrainerDispatch } from '@/store/hooks';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

function Root() {
  const navigate = useNavigate();
  const dispatch = useAppTrainerDispatch();

  const FormSchema = z.object({
    name: z.string().min(2, {}),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
    },
  });

  const showToast = (e: any) => {
    toast.error('Validation', {
      duration: 1200,
      description: e.name?.message,
    });

    setTimeout(() => {
      form.clearErrors();
    }, 1200);
  };

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const { name } = data;
    dispatch(setName(name));
    return navigate('/home');
  }

  return (
    <>
      <div className="flex flex-col gap-2 h-screen bg-amber-50">
        <div className="flex flex-col w-full h-10/12 items-center justify-center">
          <div className="flex flex-col justify-around">
            <div className='className="flex w-full'>
              <h1 className="text-center text-poke-rapidash font-medium font-stretch-95%">
                What's your name?
              </h1>
            </div>
            <div className="flex w-8/12 items-center space-x-2 self-center my-3">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit, showToast)}>
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            className="border-l-0 border-r-0 border-t-0 shadow-none outline-none not-focus:animate-bounce not-focus:duration-1000"
                            type="text"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <div className="flex w-full items-center space-x-2 self-center justify-around">
                    <Button
                      className="bg-transparent shadow-none focus:ring-0 text-gray-500 hover:bg-poke-rapidash hover:scale-120 cursor-pointer"
                      type="submit"
                    >
                      Next <FaArrowRight />
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
            <Toaster />
          </div>
        </div>
      </div>
    </>
  );
}

export default Root;
