import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
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
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import {
  formExperiencesSchema,
  type ExperiencesDTO,
} from "@/schema/formExperiencesSchema";
import { useExperiencesStore } from "@/stores/experiencesStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon } from "lucide-react";
import { useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { IoMdClose } from "react-icons/io";

function FormExperiences() {
  const { data, setData } = useExperiencesStore();
  const navigate = useNavigate();

  const form = useForm<ExperiencesDTO>({
    resolver: zodResolver(formExperiencesSchema),
    defaultValues: data
      ? {
          ...data,
          experiences: data.experiences?.map((exp) => ({
            ...exp,
            startDate: exp.startDate ? new Date(exp.startDate) : undefined,
            endDate: exp.endDate ? new Date(exp.endDate) : undefined,
          })),
          education: data.education?.map((edu) => ({
            ...edu,
            startDate: edu.startDate ? new Date(edu.startDate) : undefined,
            endDate: edu.endDate ? new Date(edu.endDate) : undefined,
          })),
          projects: data.projects?.map((proj) => ({
            ...proj,
            startDate: proj.startDate ? new Date(proj.startDate) : undefined,
            endDate: proj.endDate ? new Date(proj.endDate) : undefined,
          })),
        }
      : {
          description: "",
          experiences: [
            {
              workPosition: "",
              companyName: "",
              startDate: undefined,
              endDate: undefined,
              city: "",
              description: "",
            },
          ],
          education: [
            {
              title: "",
              institution: "",
              startDate: undefined,
              endDate: undefined,
              city: "",
              description: "",
            },
          ],
          skills: [
            {
              skillName: "",
              level: "beginner",
            },
          ],
          projects: [
            {
              projectName: "",
              description: "",
              startDate: undefined,
              endDate: undefined,
            },
          ],
        },
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = form;

  const {
    fields: experiencesFields,
    append: appendExperiences,
    remove: removeExperiences,
  } = useFieldArray({
    control,
    name: "experiences",
  });

  const {
    fields: educationFields,
    append: appendEducation,
    remove: removeEducation,
  } = useFieldArray({
    control,
    name: "education",
  });

  const {
    fields: skillFields,
    append: appendSkill,
    remove: removeSkill,
  } = useFieldArray({
    control,
    name: "skills",
  });

  const {
    fields: projectFields,
    append: appendProject,
    remove: removeProject,
  } = useFieldArray({
    control,
    name: "projects",
  });

  const onSubmit = (values: ExperiencesDTO) => {
    if (!values) return;
    setData({
      description: values.description,
      experiences: values.experiences?.map((exp) => ({
        workPosition: exp.workPosition,
        companyName: exp.companyName,
        startDate: exp.startDate,
        endDate: exp.endDate,
        city: exp.city,
        description: exp.description,
      })),
      education: values.education?.map((edu) => ({
        title: edu.title,
        institution: edu.institution,
        startDate: edu.startDate,
        endDate: edu.endDate,
        city: edu.city,
        description: edu.description,
      })),
      skills: values.skills?.map((skill) => ({
        skillName: skill.skillName,
        level: skill.level,
      })),
      projects: values.projects?.map((project) => ({
        projectName: project.projectName,
        description: project.description,
        startDate: project.startDate,
        endDate: project.endDate,
      })),
    });
    navigate("/cv-builder/generate-pdf");
  };

  useEffect(() => {
    if (isSubmitSuccessful) return;
    reset();
  }, [isSubmitSuccessful, reset]);

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={handleSubmit(onSubmit, (errors) => {
            console.error("form validation errors:", errors);
          })}
          className="flex flex-col gap-2 w-[50%] mx-auto mt-10"
        >
          {/* Deskripsi Umum */}
          <Card>
            <CardHeader>
              <CardTitle>Profil</CardTitle>
            </CardHeader>
            <CardContent>
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="description">Deskripsi Tentangmu</Label>
                    <FormControl>
                      <Textarea
                        id="description"
                        className="resize-none h-32"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          {/* Pengalaman Kerja */}
          <Card>
            <CardHeader>
              <CardTitle>Pengalaman Kerja</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {experiencesFields.map((field, index) => (
                <div key={field.id} className="space-y-4 border p-4 rounded-lg">
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name={`experiences.${index}.workPosition`}
                      render={({ field }) => (
                        <FormItem>
                          <Label>Posisi</Label>
                          <FormControl>
                            <Input
                              placeholder="mis. Software Engineer"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name={`experiences.${index}.city`}
                      render={({ field }) => (
                        <FormItem>
                          <Label>Kota</Label>
                          <FormControl>
                            <Input placeholder="mis. Jakarta" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name={`experiences.${index}.companyName`}
                    render={({ field }) => (
                      <FormItem>
                        <Label>Perusahaan</Label>
                        <FormControl>
                          <Input placeholder="mis. PT. Contoh" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-2 gap-4">
                    {/* START DATE */}
                    <FormField
                      control={form.control}
                      name={`experiences.${index}.startDate`}
                      render={({ field }) => (
                        <FormItem>
                          <Label>Tanggal Mulai</Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant="outline"
                                  className={cn(
                                    "w-full text-left font-normal",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value
                                    ? format(field.value, "PPP", {
                                        locale: id,
                                      })
                                    : "Pilih tanggal"}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) =>
                                  date >
                                    form.getValues(
                                      `experiences.${index}.endDate`
                                    )! || date < new Date("1900-01-01")
                                }
                                captionLayout="dropdown"
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* END DATE */}
                    <FormField
                      control={form.control}
                      name={`experiences.${index}.endDate`}
                      render={({ field }) => (
                        <FormItem>
                          <Label>Tanggal Selesai (Opsional)</Label>
                          <div className="flex items-center gap-2">
                            <Popover>
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <Button
                                    variant="outline"
                                    className={cn(
                                      "w-full text-left font-normal",
                                      !field.value && "text-muted-foreground"
                                    )}
                                  >
                                    {field.value
                                      ? format(field.value, "PPP", {
                                          locale: id,
                                        })
                                      : "Pilih tanggal"}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                  </Button>
                                </FormControl>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0">
                                <Calendar
                                  mode="single"
                                  selected={
                                    field.value ? field.value : undefined
                                  }
                                  onSelect={field.onChange}
                                  disabled={(date) =>
                                    date <
                                    form.getValues(
                                      `experiences.${index}.startDate`
                                    )!
                                  }
                                  captionLayout="dropdown"
                                />
                              </PopoverContent>
                            </Popover>

                            {field.value && (
                              <Button
                                variant="destructive"
                                type="button"
                                onClick={() => field.onChange(null)}
                                className="px-2 hover:bg-white hover:text-red-500"
                              >
                                <IoMdClose />
                              </Button>
                            )}
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid grid-cols-1">
                    <FormField
                      control={control}
                      name={`experiences.${index}.description`}
                      render={({ field }) => (
                        <FormItem>
                          <Label>Deskripsi (Opsional)</Label>
                          <FormControl>
                            <Textarea className="resize-none h-32" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <Button
                    type="button"
                    variant="destructive"
                    onClick={() => removeExperiences(index)}
                  >
                    Hapus Pengalaman
                  </Button>
                </div>
              ))}
              <Button
                type="button"
                onClick={() =>
                  appendExperiences({
                    workPosition: "",
                    companyName: "",
                    city: "",
                    startDate: new Date(),
                    endDate: null,
                  })
                }
              >
                + Tambah Pengalaman
              </Button>
            </CardContent>
          </Card>
          {/* Riwayat Pendidikan */}
          <Card className="">
            <CardHeader>
              <CardTitle>Riwayat Pendidikan</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {educationFields.map((field, index) => (
                <div key={field.id} className="space-y-4 border p-4 rounded-lg">
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={control}
                      name={`education.${index}.title`}
                      render={({ field }) => (
                        <FormItem>
                          <Label>Gelar / Program</Label>
                          <FormControl>
                            <Input
                              placeholder="mis. S1 Teknik Informatika"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={control}
                      name={`education.${index}.institution`}
                      render={({ field }) => (
                        <FormItem>
                          <Label>Institusi</Label>
                          <FormControl>
                            <Input
                              placeholder="mis. Universitas ABC"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={control}
                    name={`education.${index}.city`}
                    render={({ field }) => (
                      <FormItem>
                        <Label>Kota</Label>
                        <FormControl>
                          <Input placeholder="mis. Surabaya" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={control}
                      name={`education.${index}.startDate`}
                      render={({ field }) => (
                        <FormItem>
                          <Label>Tanggal Mulai</Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant="outline"
                                  className={cn(
                                    "w-full text-left",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value
                                    ? format(field.value, "PPP")
                                    : "Pilih tanggal"}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) =>
                                  date > new Date() ||
                                  date < new Date("1900-01-01")
                                }
                                captionLayout="dropdown"
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={control}
                      name={`education.${index}.endDate`}
                      render={({ field }) => (
                        <FormItem>
                          <Label>Tanggal Selesai (Opsional)</Label>
                          <div className="flex items-center gap-2">
                            <Popover>
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <Button
                                    variant="outline"
                                    className={cn(
                                      "w-full text-left",
                                      !field.value && "text-muted-foreground"
                                    )}
                                  >
                                    {field.value
                                      ? format(field.value, "PPP")
                                      : "Pilih tanggal"}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                  </Button>
                                </FormControl>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0">
                                <Calendar
                                  mode="single"
                                  selected={
                                    field.value ? field.value : undefined
                                  }
                                  onSelect={field.onChange}
                                  disabled={(date) =>
                                    date > new Date() ||
                                    date < new Date("1900-01-01")
                                  }
                                  captionLayout="dropdown"
                                />
                              </PopoverContent>
                            </Popover>
                            {field.value && (
                              <Button
                                variant="destructive"
                                type="button"
                                onClick={() => field.onChange(null)}
                                className="px-2 hover:bg-white hover:text-red-500"
                              >
                                <IoMdClose />
                              </Button>
                            )}
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={control}
                    name={`education.${index}.description`}
                    render={({ field }) => (
                      <FormItem>
                        <Label>Deskripsi (Opsional)</Label>
                        <FormControl>
                          <Textarea className="resize-none" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    variant="destructive"
                    type="button"
                    onClick={() => removeEducation(index)}
                  >
                    Hapus Pendidikan
                  </Button>
                </div>
              ))}

              <Button
                type="button"
                onClick={() =>
                  appendEducation({
                    title: "",
                    institution: "",
                    city: "",
                    startDate: new Date(),
                    endDate: null,
                    description: "",
                  })
                }
              >
                + Tambah Pendidikan
              </Button>
            </CardContent>
          </Card>
          {/* Keterampilan */}
          <Card className="">
            <CardHeader>
              <CardTitle>Keterampilan</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {skillFields.map((field, index) => (
                <div key={field.id} className="space-y-4 border p-4 rounded-lg">
                  <FormField
                    control={control}
                    name={`skills.${index}.skillName`}
                    render={({ field }) => (
                      <FormItem>
                        <Label>Nama Keterampilan</Label>
                        <FormControl>
                          <Input
                            placeholder="mis. JavaScript, Desain UI"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={control}
                    name={`skills.${index}.level`}
                    render={({ field }) => (
                      <FormItem>
                        <Label>Tingkat Kemampuan</Label>
                        <FormControl>
                          <select
                            className="border rounded-md px-3 py-2 w-full bg-background text-foreground"
                            {...field}
                          >
                            <option value="">Pilih Tingkat</option>
                            <option value="beginner">Pemula</option>
                            <option value="intermediate">Menengah</option>
                            <option value="advanced">Mahir</option>
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="button"
                    variant="destructive"
                    onClick={() => removeSkill(index)}
                  >
                    Hapus Keterampilan
                  </Button>
                </div>
              ))}

              <Button
                type="button"
                onClick={() =>
                  appendSkill({
                    skillName: "",
                    level: "beginner",
                  })
                }
              >
                + Tambah Keterampilan
              </Button>
            </CardContent>
          </Card>

          {/* Proyek */}
          <Card className="">
            <CardHeader>
              <CardTitle>Proyek</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {projectFields.map((field, index) => (
                <div key={field.id} className="space-y-4 border p-4 rounded-lg">
                  <FormField
                    control={control}
                    name={`projects.${index}.projectName`}
                    render={({ field }) => (
                      <FormItem>
                        <Label>Nama Proyek</Label>
                        <FormControl>
                          <Input
                            placeholder="mis. Website Portfolio, Aplikasi Kasir"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={control}
                    name={`projects.${index}.description`}
                    render={({ field }) => (
                      <FormItem>
                        <Label>Deskripsi Proyek</Label>
                        <FormControl>
                          <Textarea
                            placeholder="Ceritakan tentang proyek ini..."
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={control}
                      name={`projects.${index}.startDate`}
                      render={({ field }) => (
                        <FormItem>
                          <Label>Tanggal Mulai</Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant="outline"
                                  className={cn(
                                    "w-full text-left",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value
                                    ? format(field.value, "PPP")
                                    : "Pilih tanggal"}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) =>
                                  date > new Date() ||
                                  date < new Date("1900-01-01")
                                }
                                captionLayout="dropdown"
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={control}
                      name={`projects.${index}.endDate`}
                      render={({ field }) => (
                        <FormItem>
                          <Label>Tanggal Selesai (Opsional)</Label>
                          <div className="flex items-center gap-2">
                            <Popover>
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <Button
                                    variant="outline"
                                    className={cn(
                                      "w-full text-left",
                                      !field.value && "text-muted-foreground"
                                    )}
                                  >
                                    {field.value
                                      ? format(field.value, "PPP")
                                      : "Pilih tanggal"}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                  </Button>
                                </FormControl>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0">
                                <Calendar
                                  mode="single"
                                  selected={
                                    field.value ? field.value : undefined
                                  }
                                  onSelect={field.onChange}
                                  disabled={(date) =>
                                    date > new Date() ||
                                    date < new Date("1900-01-01")
                                  }
                                  captionLayout="dropdown"
                                />
                              </PopoverContent>
                            </Popover>
                            {field.value && (
                              <Button
                                variant="destructive"
                                type="button"
                                onClick={() => field.onChange(null)}
                                className="px-2 hover:bg-white hover:text-red-500"
                              >
                                <IoMdClose />
                              </Button>
                            )}
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <Button
                    type="button"
                    variant="destructive"
                    onClick={() => removeProject(index)}
                  >
                    Hapus Proyek
                  </Button>
                </div>
              ))}
              <Button
                type="button"
                onClick={() =>
                  appendProject({
                    projectName: "",
                    description: "",
                    startDate: new Date(),
                    endDate: null,
                  })
                }
              >
                + Tambah Proyek
              </Button>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <Card className="mb-10">
            <CardFooter className="justify-end gap-4">
              <Link to="/cv-builder/personal-details">
                <Button variant="outline">Previous</Button>
              </Link>
              <Button type="submit">Next</Button>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </>
  );
}

export default FormExperiences;
