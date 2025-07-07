import InputFileImage from "@/components/input-12";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  FormPersonalDetailSchema,
  type PersonalDetailDTO,
} from "@/schema/FormPersonalDetailsSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Popover, PopoverContent } from "@/components/ui/popover";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { usePersonalDetailsStore } from "@/stores/personalDetailsStore";
import { useNavigate } from "react-router";
import { Calendar } from "@/components/ui/calendar";
// import { DropdownCalendar } from "@/components/DropdownCalendar";

function FormPersonalDetail() {
  const { setData } = usePersonalDetailsStore();

  const form = useForm<PersonalDetailDTO>({
    resolver: zodResolver(FormPersonalDetailSchema),
  });
  const navigate = useNavigate();

  function onSubmit(values: PersonalDetailDTO) {
    if (!values) return;
    // console.log(values);
    setData(values);
    navigate("/cv-builder/generate-pdf");
  }

  return (
    <>
      <section className="flex flex-col w-full justify-center items-center gap-10 my-10">
        <Card className="w-[50%]">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit, (errors) => {
                console.error("form validation errors:", errors);
              })}
              className="flex flex-col gap-4"
            >
              <CardHeader>
                <div className="flex flex-col border-b-1 w-full py-5">
                  <CardTitle>Detail Pribadi</CardTitle>
                  {/* <img src={} className="size-500" alt="" /> */}
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-4">
                  <div className="flex w-full items-center gap-4">
                    {/* <FormField
                      control={form.control}
                      name="imgUrl"
                      render={({ field }) => <InputFileImage />}
                    /> */}
                    <InputFileImage />
                    <div className="flex flex-col w-full p-3 space-y-4">
                      <div className="flex flex-col space-y-1.5">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <Label htmlFor="first-name">Nama Depan</Label>
                              <FormControl>
                                <Input
                                  placeholder="John"
                                  id="first-name"
                                  type="text"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <Label htmlFor="last-name">Nama Belakang</Label>
                              <FormControl>
                                <Input
                                  placeholder="Doe"
                                  id="last-name"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="grid grid-cols-2 gap-5">
                      <div className="flex flex-col space-y-1.5">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <Label htmlFor="email">Email</Label>
                              <FormControl>
                                <Input
                                  placeholder="example@example.com"
                                  id="email"
                                  type="email"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <FormField
                          control={form.control}
                          name="phoneNumber"
                          render={({ field }) => (
                            <FormItem>
                              <Label htmlFor="phone-number">
                                Nomor Telepon
                              </Label>
                              <FormControl>
                                <Input
                                  placeholder="081234567890"
                                  id="phone-number"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                          <FormItem>
                            <Label htmlFor="address">Alamat</Label>
                            <FormControl>
                              <Input placeholder="" id="address" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="grid grid-cols-2 gap-5">
                      <div className="flex flex-col space-y-1.5">
                        <FormField
                          control={form.control}
                          name="postalCode"
                          render={({ field }) => (
                            <FormItem>
                              <Label htmlFor="postal-code">Kode Pos</Label>
                              <FormControl>
                                <Input
                                  placeholder=""
                                  id="postal-code"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <FormField
                          control={form.control}
                          name="city"
                          render={({ field }) => (
                            <FormItem>
                              <Label htmlFor="city">Kota</Label>
                              <FormControl>
                                <Input placeholder="" id="city" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                      <div className="flex flex-col space-y-1.5">
                        <div className="flex gap-3">
                          <FormField
                            control={form.control}
                            name="birthDate"
                            render={({ field }) => (
                              <FormItem className="w-full">
                                <Label htmlFor="birth-date">
                                  Tanggal Lahir
                                </Label>
                                <Popover>
                                  <PopoverTrigger asChild>
                                    <FormControl>
                                      <Button
                                        variant={"outline"}
                                        className={cn(
                                          "text-left font-normal",
                                          !field.value &&
                                            "text-muted-foreground"
                                        )}
                                      >
                                        {field.value ? (
                                          format(field.value, "PPP")
                                        ) : (
                                          <span>Pick a date</span>
                                        )}
                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                      </Button>
                                    </FormControl>
                                  </PopoverTrigger>
                                  <PopoverContent
                                    className="w-auto p-0"
                                    align="start"
                                  >
                                    <Calendar
                                      mode="single"
                                      selected={field.value}
                                      onSelect={field.onChange}
                                      disabled={(date) =>
                                        date > new Date() ||
                                        date < new Date("1900-01-01")
                                      }
                                      captionLayout="dropdown"
                                      // className="rounded-lg border"
                                    />
                                  </PopoverContent>
                                </Popover>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <FormField
                          control={form.control}
                          name="birthPlace"
                          render={({ field }) => (
                            <FormItem>
                              <Label htmlFor="birth-place">Tempat Lahir</Label>
                              <FormControl>
                                <Input
                                  placeholder=""
                                  id="birth-place"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-5">
                    <div className="flex flex-col space-y-1.5">
                      <FormField
                        control={form.control}
                        name="linkedinUrl"
                        render={({ field }) => (
                          <FormItem>
                            <Label htmlFor="url-linkedin">
                              URL Profil Linkedin
                            </Label>
                            <FormControl>
                              <Input
                                placeholder=""
                                id="url-linkedin"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <FormField
                        control={form.control}
                        name="websiteUrl"
                        render={({ field }) => (
                          <FormItem>
                            <Label htmlFor="websiteUrl">
                              Website, Github, dll
                            </Label>
                            <FormControl>
                              <Input
                                placeholder=""
                                id="websiteUrl"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                {/* <Button variant="outline">Cancel</Button> */}
                <Button type="submit">Next</Button>
              </CardFooter>
            </form>
          </Form>
        </Card>
      </section>
    </>
  );
}

export default FormPersonalDetail;
