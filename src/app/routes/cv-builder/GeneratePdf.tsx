import { useState } from "react";
import { usePersonalDetailsStore } from "@/stores/personalDetailsStore";
import { useExperiencesStore } from "@/stores/experiencesStore";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { Button } from "@/components/ui/button";
import { CVDocument } from "@/components/GeneratePdf/CVDocument";
import { cvStyle1, cvStyle2 } from "@/components/GeneratePdf/styles/cvStyles";

function GeneratePdf() {
  const { data: dataPersonalDetails } = usePersonalDetailsStore();
  const { data: dataExperiences } = useExperiencesStore();
  const [template, setTemplate] = useState<1 | 2>(1);

  const currentStyle = template === 1 ? cvStyle1 : cvStyle2;

  return (
    <section className="flex flex-col items-center justify-center mt-5 gap-4">
      <div className="flex justify-between items-center w-[50%]">
        <h1 className="text-4xl font-medium py-5">Preview CV</h1>
        <div className="flex items-center gap-2">
          <Button
            variant={template === 1 ? "default" : "outline"}
            onClick={() => setTemplate(1)}
          >
            Template 1
          </Button>
          <Button
            variant={template === 2 ? "default" : "outline"}
            onClick={() => setTemplate(2)}
          >
            Template 2
          </Button>
          <PDFDownloadLink
            document={
              <CVDocument
                personal={dataPersonalDetails}
                experience={dataExperiences}
                styles={currentStyle}
              />
            }
            fileName={`cv-template-${template}.pdf`}
            className="cursor-pointer"
          >
            {({ loading }) => (
              <Button className="text-lg px-4 py-2 h-[50%] cursor-pointer">
                {loading ? "Loading..." : "Download PDF"}
              </Button>
            )}
          </PDFDownloadLink>
        </div>
      </div>

      <PDFViewer width="70%" height="800px">
        <CVDocument
          personal={dataPersonalDetails}
          experience={dataExperiences}
          styles={currentStyle}
        />
      </PDFViewer>
    </section>
  );
}

export default GeneratePdf;
