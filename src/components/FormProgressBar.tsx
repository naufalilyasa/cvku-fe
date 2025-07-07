import {
  getPathFromStep,
  getStepFromPath,
  stepPaths,
} from "@/constants/stepRoutes";
import { useFormProgress } from "@/stores/formProgressStore";
import { useEffect } from "react";
import { FaPen, FaUserAlt } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router";

function FormProgressBar() {
  const { step, setStep } = useFormProgress();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const pathSegment =
      location.pathname.split("/").pop() || "personal-details";
    const pathStep = getStepFromPath(pathSegment);
    if (pathStep !== step) {
      setStep(pathStep);
    }
  }, [location.pathname]);

  useEffect(() => {
    const newPath = getPathFromStep(step);
    navigate(`/cv-builder/${newPath}`, { replace: true });
  }, [step]);

  const pathSegment = location.pathname.split("/").pop() || "personal-details";
  const currentStep = getStepFromPath(pathSegment);

  return (
    <div>
      <ol className="flex w-full px-120 justify-center items-center mt-10">
        {stepPaths.map((label, index) => {
          const isActive = index <= currentStep;

          return (
            <li
              className={`${
                label === "generate-pdf"
                  ? ""
                  : `flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block  ${
                      isActive
                        ? "text-blue-600 dark:text-blue-500 after:border-blue-100 dark:after:border-blue-800"
                        : "after:border-gray-100 dark:after:border-gray-700"
                    }`
              }`}
              key={label}
            >
              <Link to={`/cv-builder/${label}`}>
                <span
                  className={`flex items-center justify-center w-10 h-10 ${
                    isActive
                      ? "bg-blue-100 dark:bg-blue-800"
                      : "bg-gray-100 dark:bg-gray-700"
                  } rounded-full lg:h-12 lg:w-12  shrink-0`}
                >
                  <span
                    className={`size-3.5 ${
                      isActive
                        ? "text-blue-600 dark:text-blue-300"
                        : "text-gray-500 dark:text-gray-100"
                    } lg:size-4`}
                  >
                    {label === "personal-details" ? (
                      <FaUserAlt />
                    ) : label === "experiences" ? (
                      <IoDocumentTextSharp />
                    ) : (
                      <FaPen />
                    )}
                  </span>
                </span>
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default FormProgressBar;
