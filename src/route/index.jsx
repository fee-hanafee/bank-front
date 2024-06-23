import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import Container from "../components/Container";
import ProtextRoute from "./ProtextRoute";
import DepositPage from "../pages/DepositPage";
import WithdrawPage from "../pages/WithdrawPage";
import TransferPage from "../pages/TransferPage";
import TransactionPage from "../pages/TransactionPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Container />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "deposit",
        element: (
          <ProtextRoute>
            <DepositPage />
          </ProtextRoute>
        ),
      },
      {
        path: "withdraw",
        element: (
          <ProtextRoute>
            <WithdrawPage />
          </ProtextRoute>
        ),
      },
      {
        path: "transfer",
        element: (
          <ProtextRoute>
            <TransferPage />
          </ProtextRoute>
        ),
      },
      {
        path: "transaction",
        element: (
          <ProtextRoute>
            <TransactionPage />
          </ProtextRoute>
        ),
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
