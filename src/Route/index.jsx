import { createBrowserRouter } from "react-router-dom";
import { mainPaths } from "../Sconstant";

import { Error } from "../Error";
import { AuthLayout } from "../Pages/Layout/AuthLayout";
import { MainLayout } from "../Pages/Layout/MainLayout";

import { AdministrationPage } from "../Pages/Main/Administration";
import { AdmissionPage } from "../Pages/Main/Admission";
import { AssignmentPage } from "../Pages/Main/Assignments";
import { AttendancePage } from "../Pages/Main/Attendance";
import { AuthorityPage } from "../Pages/Main/Authority";
import { CareerPage } from "../Pages/Main/Career";
import { CertificatesPage } from "../Pages/Main/Certificates";
import { CoursesPage } from "../Pages/Main/Courses";
import { DashboardPage } from "../Pages/Main/Dashboard";
import { EventsPage } from "../Pages/Main/Events";
import { ForgotPasswordPage } from "../Pages/Auth/ForgotPassword";
import { HostelPage } from "../Pages/Main/Hostel";
import { HumanResourcesPage } from "../Pages/Main/HumanResources";
import { InvoicePage } from "../Pages/Main/Invoice";
import { LaboratoryPage } from "../Pages/Main/Laboratory";
import { LocationsPage } from "../Pages/Main/Locations";
import { LibraryPage } from "../Pages/Main/Library";
import { NoticesPage } from "../Pages/Main/Notices";
import { OtpVerificationPage } from "../Pages/Auth/Otps";
import { ProfilePage } from "../Pages/Main/Profile";
import { ProductsPage } from "../Pages/Main/Products";
import { ReportsPage } from "../Pages/Main/Reports";
import { ResultsPage } from "../Pages/Main/Results";
import { SchedulesPage } from "../Pages/Main/Schedules";
import { ScholarshipsPage } from "../Pages/Main/Scholarships";
import { SettingsPage } from "../Pages/Main/Settings";
import { SigninPage } from "../Pages/Auth/Signin";
import { SignupPage } from "../Pages/Auth/Signup";
import { StocksPage } from "../Pages/Main/Stocks";
import { StudentsPage } from "../Pages/Main/Students";
import { StudyMaterialsPage } from "../Pages/Main/StudyMaterials";
import { StuffPage } from "../Pages/Main/Stuff";
import { TeachersPage } from "../Pages/Main/Teachers";
import { VendorsPage } from "../Pages/Main/Vendors";

export const router = createBrowserRouter([
  {
    path: mainPaths.LOGIN,
    element: <AuthLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <SigninPage />,
      },
      {
        path: mainPaths.REGISTER,
        element: <SignupPage />,
      },
      {
        path: mainPaths.OTP,
        element: <OtpVerificationPage />,
      },
      {
        path: mainPaths.FORGOT,
        element: <ForgotPasswordPage />,
      },
    ],
  },
  {
    path: mainPaths.APPS,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: mainPaths.ADMIN,
        element: <AdministrationPage />,
      },
      {
        path: mainPaths.ADMISSION,
        element: <AdmissionPage />,
      },
      {
        path: mainPaths.ASSIGN,
        element: <AssignmentPage />,
      },
      {
        path: mainPaths.ATTENDANCE,
        element: <AttendancePage />,
      },
      {
        path: mainPaths.AUTH,
        element: <AuthorityPage />,
      },
      {
        path: mainPaths.CAREER,
        element: <CareerPage />,
      },
      {
        path: mainPaths.CERTIFICATE,
        element: <CertificatesPage />,
      },
      {
        path: mainPaths.COURSES,
        element: <CoursesPage />,
      },
      {
        path: mainPaths.EVENTS,
        element: <EventsPage />,
      },
      {
        path: mainPaths.HOSTEL,
        element: <HostelPage />,
      },
      {
        path: mainPaths.HUMAN,
        element: <HumanResourcesPage />,
      },
      {
        path: mainPaths.INVOICE,
        element: <InvoicePage />,
      },
      {
        path: mainPaths.LABORATORY,
        element: <LaboratoryPage />,
      },
      {
        path: mainPaths.WAREHOUSE,
        element: <LocationsPage />,
      },
      {
        path: mainPaths.LIBRARY,
        element: <LibraryPage />,
      },
      {
        path: mainPaths.NOTICE,
        element: <NoticesPage />,
      },
      {
        path: mainPaths.REPORT,
        element: <ReportsPage />,
      },
      {
        path: mainPaths.RESULT,
        element: <ResultsPage />,
      },
      {
        path: mainPaths.SCHEDULE,
        element: <SchedulesPage />,
      },
      {
        path: mainPaths.SCHOLAR,
        element: <ScholarshipsPage />,
      },
      {
        path: mainPaths.SETTING,
        element: <SettingsPage />,
      },
      {
        path: mainPaths.STOCK,
        element: <StocksPage />,
      },
      {
        path: mainPaths.STUDENT,
        element: <StudentsPage />,
      },
      {
        path: mainPaths.STUDYMAT,
        element: <StudyMaterialsPage />,
      },
      {
        path: mainPaths.STUFF,
        element: <StuffPage />,
      },
      {
        path: mainPaths.TEACHER,
        element: <TeachersPage />,
      },
      {
        path: mainPaths.PROFILE,
        element: <ProfilePage />,
      },
      {
        path: mainPaths.VENDORS,
        element: <VendorsPage />,
      },
      {
        path: mainPaths.PRODUCTS,
        element: <ProductsPage />,
      },
    ],
  },
]);
