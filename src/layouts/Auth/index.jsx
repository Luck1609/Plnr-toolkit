import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Bell, LogOut, Moon, Sun } from "lucide-react";
import SideNav from "./Sidenav";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useAuth } from "@/hooks/useAuth";
import Loader from "@/components/Loader";
import { toggleLogoutNotice } from "@/lib/toolkit/reducers/notice";


import { NoticeModal } from "@/components/NoticeModal";
import FormModal from "@/components/FormComponents/FormModal";
import { LogoutModal } from "@/layouts/Auth/LogoutModal";
import StepFormModal from "@/components/FormComponents/StepFormModal";
import Modal from "@/components/Modal";

export default function AuthLayout() {
  const { setTheme, theme } = useTheme(),
    { isLoading, error, user } = useAuth({ middleware: "auth" }),
    dispatch = useDispatch(),
    logout = () => dispatch(toggleLogoutNotice());

  const toggleTheme = (theme) => () => setTheme(theme);

  return isLoading ? (
    <Loader className="w-full !h-screen" />
  ) : error ? (
    <div className="w-full h-screen flex items-center justify-center">
      <p className="">Redirecting...</p>
    </div>
  ) : (
    <>
      <FormModal />
      <StepFormModal />
      <Modal />
      <NoticeModal />
      <LogoutModal />
      <div className="min-h-screen h-full bg-gray-100 dark:bg-dark grid lg:grid-cols-12">
        <div className="lg:col-span-2">
          <SideNav />
        </div>
        <div className="lg:col-span-10">
          <nav className="bg-white dark:bg-default border-b border-gray-100 dark:border-input ">
            <div className="">
              <div className="flex justify-between items-center h-16 px-5">
                <div className="flex">
                  <span>Dashboard</span>
                </div>

                <ul className="hidden sm:flex sm:items-center space-x-3">
                  <li>
                    <Button className="bg-transparent dark:hover:bg-input dark:text-white">
                      <Bell height={18} />
                    </Button>
                  </li>
                  <li className="relative">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button className="dark:text-slate-200">
                          {user.firstname}
                        </Button>
                      </DropdownMenuTrigger>

                      <DropdownMenuContent className="w-44 dark:bg-input dark:border-input">
                        <DropdownMenuItem onClick={logout}>
                          <LogOut className="mr-2 h-4 w-4" />
                          <span>logout</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </li>
                  <li>
                    {theme === "light" ? (
                      <Button
                        className="bg-transparent hover:bg-input dark:text-slate-200"
                        onClick={toggleTheme("dark")}
                      >
                        <Moon />
                      </Button>
                    ) : (
                      <Button
                        className="bg-transparent hover:bg-input dark:text-slate-200"
                        onClick={toggleTheme("light")}
                      >
                        <Sun />
                      </Button>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <main>
            <ScrollArea className="h-[90vh] mt-10">
              <Outlet />
            </ScrollArea>
          </main>
        </div>
      </div>
    </>
  );
}
