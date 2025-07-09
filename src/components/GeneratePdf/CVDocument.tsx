import type {
  FormExperiencesType,
  FormPersonalDetailsType,
} from "@/types/formType";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import { format } from "date-fns";
import { id } from "date-fns/locale";

interface Props {
  personal: FormPersonalDetailsType;
  experience: FormExperiencesType;
  styles: ReturnType<typeof StyleSheet.create>;
}

const fallbackImage = "images-profile.jpg";

export const CVDocument = ({ personal, experience, styles }: Props) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View
        style={[
          styles.section,
          {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          },
        ]}
      >
        {personal.imageProfile || fallbackImage ? (
          <Image
            src={
              personal.imageProfile?.startsWith("data:image")
                ? personal.imageProfile
                : fallbackImage
            }
            style={styles.image}
          />
        ) : null}
        <View style={{ flex: 1, paddingLeft: 10 }}>
          <Text style={styles.header}>
            {personal.firstName ? personal.firstName : "John"}{" "}
            {personal.lastName ? personal.lastName : "Doe"}
          </Text>
          <Text>{experience.description || "Deskripsi belum diisi."}</Text>
        </View>
      </View>

      {/* Personal Details */}
      <View style={styles.section}>
        <Text style={styles.header}>Personal Details</Text>
        {[
          ["Name", `${personal.firstName} ${personal.lastName}`],
          ["City", personal.city],
          ["Phone Number", personal.phoneNumber],
          ["Email", personal.email],
          ["LinkedIn", personal.linkedinUrl],
          ["Website", personal.websiteUrl],
          [
            "Date of Birth",
            personal.birthDate
              ? format(new Date(personal.birthDate), "d MMMM yyyy", {
                  locale: id,
                })
              : "-",
          ],
          ["Place of Birth", personal.birthPlace],
          ["Nationality", personal.nationality],
          ["Marital Status", personal.maritalStatus],
        ].map(([label, val], i) => (
          <View key={i} style={styles.row}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.value}>{val || "-"}</Text>
          </View>
        ))}
      </View>

      {/* Work Experiences */}
      {(experience.experiences ?? []).length > 0 && (
        <View style={styles.section}>
          <Text style={styles.header}>Work Experiences</Text>
          {(experience.experiences ?? []).map((exp, i) => (
            <View key={i} style={styles.section}>
              <View style={styles.row}>
                <Text style={styles.bold}>{exp.workPosition}</Text>
                <Text>
                  {format(new Date(exp.startDate), "MMMM yyyy", { locale: id })}{" "}
                  -{" "}
                  {exp.endDate
                    ? format(new Date(exp.endDate), "MMMM yyyy", { locale: id })
                    : "Present"}
                </Text>
              </View>
              <Text>
                {exp.companyName}, {exp.city}
              </Text>
              <Text>{exp.description}</Text>
            </View>
          ))}
        </View>
      )}

      {/* Projects */}
      {(experience.projects ?? []).length > 0 && (
        <View style={styles.section}>
          <Text style={styles.header}>Projects</Text>
          {(experience.projects ?? []).map((project, i) => (
            <View key={i} style={styles.section}>
              <View style={styles.row}>
                <Text style={styles.bold}>{project.projectName}</Text>
                <Text>
                  {format(new Date(project.startDate), "MMMM yyyy", {
                    locale: id,
                  })}{" "}
                  -{" "}
                  {project.endDate
                    ? format(new Date(project.endDate), "MMMM yyyy", {
                        locale: id,
                      })
                    : "Present"}
                </Text>
              </View>
              <Text>{project.description}</Text>
            </View>
          ))}
        </View>
      )}

      {/* Education */}
      {(experience.education ?? []).length > 0 && (
        <View style={styles.section}>
          <Text style={styles.header}>Education</Text>
          {(experience.education ?? []).map((edu, i) => (
            <View key={i} style={styles.section}>
              <View style={styles.row}>
                <Text style={styles.bold}>{edu.title}</Text>
                <Text>
                  {format(new Date(edu.startDate), "MMMM yyyy", { locale: id })}{" "}
                  -{" "}
                  {edu.endDate
                    ? format(new Date(edu.endDate), "MMMM yyyy", { locale: id })
                    : "Present"}
                </Text>
              </View>
              <Text>{edu.institution}</Text>
              <Text>{edu.description}</Text>
            </View>
          ))}
        </View>
      )}

      {/* Skills */}
      {(experience.skills ?? []).length > 0 && (
        <View style={styles.section}>
          <Text style={styles.header}>Skills</Text>
          {(experience.skills ?? []).map((skill, i) => (
            <View key={i} style={styles.row}>
              <Text>{skill.skillName}</Text>
              <Text style={{ textTransform: "capitalize" }}>{skill.level}</Text>
            </View>
          ))}
        </View>
      )}
    </Page>
  </Document>
);
