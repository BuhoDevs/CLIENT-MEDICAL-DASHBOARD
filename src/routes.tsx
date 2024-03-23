import { Icon } from "@chakra-ui/react";
import {
  // MdBarChart,
  MdHome,
  MdLock,
  // MdOutlineShoppingCart,
} from "react-icons/md";

import { FaUserInjured, FaNotesMedical } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
// layout imports
import DashboardLayout from "./layouts/admin";

// auth imports
import AuthGuard from "./guards/auth.guard";

// Admin Imports

// Auth Imports
import SignInCentered from "./views/auth/signIn";
import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

// lazy imports
import HomeDashLazy from "./lazyexports/HomeDashboard";
import MarketDashLazy from "./lazyexports/MarketPlace";
import PatientsDashLazy from "./lazyexports/PatientsDashboard";
import ProfileDashLazy from "./lazyexports/ProfileDashboard";
import LoginDashLazy from "./lazyexports/LoginDashboard";

export const routes = [
  {
    name: "Inicio",
    layout: "/dashboard",
    path: "home",
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: lazy(() => import("./views/admin/default")),
    isIndex: true,
  },

  {
    name: "Pacientes",
    layout: "/dashboard",
    icon: (
      <Icon as={FaUserInjured} width="20px" height="20px" color="inherit" />
    ),
    path: "patients",
    component: lazy(() => import("./views/admin/dataTables")),
  },
  {
    name: "Citas",
    layout: "/dashboard",
    path: "appointments",
    icon: (
      <Icon as={FaNotesMedical} width="20px" height="20px" color="inherit" />
    ),
    component: lazy(() => import("./views/admin/marketplace")),
    secondary: true,
  },
  {
    name: "Perfil",
    layout: "/dashboard",
    path: "profile",
    icon: <Icon as={IoMdSettings} width="20px" height="20px" color="inherit" />,
    component: lazy(() => import("./views/admin/profile")),
  },
  {
    name: "Ingresar",
    layout: "/dashboard",
    path: "login",
    icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
    component: SignInCentered,
  },
  // {
  //   name: "RTL Admin",
  //   layout: "/rtl",
  //   path: "/rtl-default",
  //   icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
  //   component: RTL,
  // },
];

export const renderRoutes = () => {
  return (
    <Suspense fallback={<div>...Cargando vista</div>}>
      <Routes>
        <Route path="/" element={<Navigate to={"/dashboard"} />} />
        <Route element={<AuthGuard />}>
          <Route
            key={"dashKey"}
            path="/dashboard"
            element={<DashboardLayout />}
          >
            <Route index element={<HomeDashLazy />} />
            <Route path="appointments" element={<MarketDashLazy />} />
            <Route path="patients" element={<PatientsDashLazy />} />
            <Route path="profile" element={<ProfileDashLazy />} />
            <Route path="login" element={<LoginDashLazy />} />
            {/* 
            <Route path="users" element={<UsersDashboard />} />
            <Route path="listUsers" element={<ListUsersDashboard />} />
            <Route
              path="listJobPosition"
              element={<ListJobPositionDashboard />}
            />
            <Route path="profile" element={<ProfileDashboard />} />
            <Route path="request" element={<RequestDashboard />} />
            <Route path="jobPosition" element={<JobPositionDashboard />} />
            <Route path="request/new" element={<NewRequestDashboard />} />
            <Route path="listUsers/newUser" element={<NewUserDashboard />} />
            <Route
              path="listUsers/editUser/:userId"
              element={<EditUserDashboard />}
            />
            <Route
              path="listUsers/rolesJobPosition/:jobPositionId"
              element={<RolesJobPositionDashboard />}
            />
            <Route
              path="listUsers/inactivateUser/:userId"
              element={<InactivateUserDashboard />}
            />
            <Route
              path="request/detail/:requestId"
              element={<DetailRequestDashboard />}
            />
            <Route
              path="request/detailEditReq/:requestId"
              element={<DetailRequestEditDashboard />}
            />
            <Route
              path="request/detailView/:requestId"
              element={<DetailViewDashboard />}
            />
            <Route
              path="request/detailEditReqVaca/:requestId"
              element={<DetailRequestEditVacaDashboard />}
            />

            <Route
              path="asingvacation/:idUser"
              element={<AsingVacationDashboard />}
            />
            <Route path="assinmentLaw" element={<AssingmentLawDashboard />} />
          */}
          </Route>
        </Route>

        {/* <Route element={<PublicGuard />}>
          <Route key={"authKey"} path="/auth" element={<AuthLayout />}>
            <Route index element={<LoginAuthDashboard />} />
            <Route path="register" element={<RegisterAuthDashboard />} />
            <Route path="forgotPassword" element={<ForgotAuthDashboard />} />
            <Route path="resetPassword" element={<ResetPasswordDashboard />} />
          </Route>
        </Route> */}
      </Routes>
    </Suspense>
  );
};
