import { useRef } from "react";
import jsPDF from "jspdf";
import { Page } from "@/components/Page";
import html2canvas from "html2canvas-pro";
import { usePersonalDetailsStore } from "@/stores/personalDetailsStore";
import { MdPeople } from "react-icons/md";
import { MdWorkHistory } from "react-icons/md";
import { IoSchool } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";

function GeneratePdf() {
  const jsPdfRef = useRef<HTMLDivElement | null>(null);
  const { data } = usePersonalDetailsStore();

  const handleGeneratePdf = async () => {
    const element = jsPdfRef.current;
    if (!element) return;

    html2canvas(element).then((canvas) => {
      const pdf = new jsPDF({
        unit: "px",
        hotfixes: ["px_scaling"],
        format: "a4",
      });

      pdf.setFont("Helvetica", "normal");
      const imgData = canvas.toDataURL("image/png");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;

      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      pdf.addImage(imgData, "JPEG", 0, 0, imgWidth * ratio, imgHeight * ratio);
      pdf.save("test_cv.pdf");
    });
  };

  return (
    <section className="mb-15 mt-5">
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-between items-center max-w-[50%] w-full">
          <h1 className="py-5 text-4xl font-medium">Preview CV</h1>
          <Button
            onClick={handleGeneratePdf}
            className="border-1 border-black text-2xl px-4 mt-2 py-2 h-[50%]"
          >
            Convert to PDF
          </Button>
        </div>
        <Page ref={jsPdfRef}>
          <div className="py-8 px-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <img
                  src="/images/pp.jpg"
                  alt=""
                  className="size-20 rounded-full"
                />
                <h1 className="text-3xl font-bold pb-2">
                  {data.firstName && data.lastName
                    ? `${data.firstName} ${data.lastName}`
                    : "John Doe"}
                </h1>
              </div>
              <div>
                <p className="text-sm">
                  This is a simple example of description.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center w-full bg-gray-200 py-2 px-4 gap-5">
                  <MdPeople className="size-8" />
                  <h2 className="font-medium">Personal details</h2>
                </div>
                <div className="flex gap-25 text-sm/6">
                  <div className="font-normal">
                    <p>Name</p>
                    <p>City</p>
                    <p>Phone Number</p>
                    <p>Email Address</p>
                    <p>LinkedIn</p>
                    <p>Website</p>
                    <p>Date of Birth</p>
                    <p>Place of Birth</p>
                    <p>Nationality</p>
                    <p>Marital Status</p>
                  </div>
                  <div className="font-medium">
                    <p>
                      {data.firstName && data.lastName
                        ? `${data.firstName} ${data.lastName}`
                        : "John Doe"}
                    </p>
                    <p>{data.city ? `${data.city}` : "-"}</p>
                    <p>{data.phoneNumber ? `${data.phoneNumber}` : "-"}</p>
                    <p>{data.email ? `${data.email}` : "mail@example.com"}</p>
                    <p>
                      {data.linkedinUrl
                        ? `${data.linkedinUrl}`
                        : "www.example.com"}
                    </p>
                    <p>
                      {data.websiteUrl
                        ? `${data.websiteUrl}`
                        : "www.website.com"}
                    </p>
                    <p>
                      {data.birthDate
                        ? `${
                            format(data.birthDate, "d") +
                            " " +
                            format(data.birthDate, "MMMM") +
                            " " +
                            format(data.birthDate, "yyyy")
                          }`
                        : "1 January 2000"}
                    </p>
                    <p>{data.birthPlace ? `${data.birthPlace}` : "Jakarta"}</p>
                    <p>{data.birthPlace ? `${data.birthPlace}` : "-"}</p>
                    <p>{data.birthPlace ? `${data.birthPlace}` : "-"}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center w-full bg-gray-200 py-2 px-4 gap-5">
                  <MdWorkHistory className="size-8" />
                  <h2 className="font-medium">Work Experiences</h2>
                </div>
                <div className="flex gap-25 text-sm w-full">
                  <div className="w-[75%]">
                    <p className="font-bold">Junior software developer</p>
                    <p className="italic">PT Dumbways, Depok</p>
                    <p>
                      Used a ranged of languages, operating system tools as well
                      as experiencing the system development life cycle.
                      Specialising in mobile technology, i am keen to develop as
                      a graduate trainee in software development
                    </p>
                    <ul className="flex flex-col justify-start ps-1 pt-1 text-start">
                      <li>
                        <span className="pe-2">•</span> Writing python
                        applications
                      </li>
                      <li>
                        <span className="pe-2">•</span> Database design and
                        optimalisation
                      </li>
                      <li>
                        <span className="pe-2">•</span> Answering support
                        tickets
                      </li>
                    </ul>
                  </div>
                  <div className="font-medium w-[25%]">
                    <p className="text-end">2015 - present</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center w-full bg-gray-200 py-2 px-4 gap-5">
                  <IoSchool className="size-8" />
                  <h2 className="font-medium">Educations and Qualifications</h2>
                </div>
                <div className="flex gap-25 text-sm w-full">
                  <div className="w-[75%]">
                    <p className="font-bold">
                      Computer science and software engineering
                    </p>
                    <p className="italic">University of London</p>
                    <p>
                      Used a ranged of languages, operating system tools as well
                      as experiencing the system development life cycle.
                      Specialising in mobile technology, i am keen to develop as
                      a graduate trainee in software development
                    </p>
                  </div>
                  <div className="font-medium w-[25%]">
                    <p className="text-end">2012 - 2014</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Page>
      </div>
    </section>
  );
}

export default GeneratePdf;
