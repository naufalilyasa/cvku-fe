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
import { useEffect, useState } from "react";
import ImagePreview from "@/components/FormPersonalDetails/ImagePreview";
import toBase64 from "@/utils/toBase64";
import { id } from "date-fns/locale";
import {
  FormPersonalDetailsSchema,
  type PersonalDetailsDTO,
} from "@/schema/formPersonalDetailsSchema";

function FormPersonalDetails() {
  const { data, setData } = usePersonalDetailsStore();
  const [preview, setPreview] = useState<string | null>(null);
  const [fileKey, setFileKey] = useState(Date.now());

  const form = useForm<PersonalDetailsDTO>({
    resolver: zodResolver(FormPersonalDetailsSchema),
    defaultValues: data ?? {
      firstName: "",
      lastName: "",
      imageProfile: undefined,
      email: "",
      phoneNumber: "",
      address: "",
      postalCode: "",
      city: "",
      birthDate: null,
      birthPlace: "",
      linkedinUrl: "",
      websiteUrl: "",
      maritalStatus: "",
      nationality: "",
    },
  });
  const navigate = useNavigate();

  const {
    formState: { isSubmitSuccessful },
    reset,
  } = form;

  function onSubmit(values: PersonalDetailsDTO) {
    if (!values) return;
    setData(values);
    navigate("/cv-builder/experiences");
  }

  useEffect(() => {
    if (data?.imageProfile) {
      setPreview(data.imageProfile);
    }
  }, [data?.imageProfile]);

  useEffect(() => {
    if (!isSubmitSuccessful) return;
    reset();
    setFileKey(Date.now());
    setPreview(null);
  }, [isSubmitSuccessful, reset]);

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
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-4">
                  <div className="flex w-full items-center gap-4">
                    <div>
                      <FormField
                        control={form.control}
                        name="imageProfile"
                        render={({ field: { onChange, ref } }) => (
                          <FormItem>
                            <Label htmlFor="imageProfile" className="w-full">
                              <div className="flex flex-col gap-2">
                                <span>Foto Profil</span>
                                <ImagePreview
                                  url={preview}
                                  onRemove={() => {
                                    setPreview(null);
                                    setFileKey(Date.now());
                                    onChange(undefined);

                                    setData({
                                      ...form.getValues(),
                                      imageProfile: undefined,
                                    });
                                  }}
                                />
                              </div>
                            </Label>
                            <FormControl>
                              <Input
                                id="imageProfile"
                                key={fileKey}
                                ref={ref}
                                type="file"
                                onChange={async (e) => {
                                  const file = e.target.files?.[0];
                                  if (!file) return;

                                  const base64 = await toBase64(file);
                                  setPreview(base64);
                                  onChange(base64);
                                }}
                                accept="image/*"
                                className="hidden"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

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
                                          format(field.value, "PPP", {
                                            locale: id,
                                          })
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
                                        date > new Date("2010-01-01") ||
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
                        name="nationality"
                        render={({ field }) => (
                          <FormItem>
                            <Label htmlFor="url-linkedin">Kebangsaan</Label>
                            <FormControl>
                              <Input
                                placeholder=""
                                id="nationality"
                                {...field}
                                type="text"
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
                        name="maritalStatus"
                        render={({ field }) => (
                          <FormItem>
                            <Label htmlFor="martial-status">
                              Status Pernikahan
                            </Label>
                            <FormControl>
                              <Input
                                placeholder=""
                                type="text"
                                id="martial-status"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
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

export default FormPersonalDetails;
