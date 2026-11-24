"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import DemoEnquiryModal from "@/components/forms/DemoEnquiryModal";

interface DemoModalContextType {
  isOpen: boolean;
  preselectedCourse: string;
  openDemoModal: (course?: string) => void;
  closeDemoModal: () => void;
}

const DemoModalContext = createContext<DemoModalContextType | undefined>(undefined);

export function DemoModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [preselectedCourse, setPreselectedCourse] = useState("");

  const openDemoModal = (course?: string) => {
    if (course) setPreselectedCourse(course);
    else setPreselectedCourse("");
    setIsOpen(true);
  };

  const closeDemoModal = () => {
    setIsOpen(false);
  };

  return (
    <DemoModalContext.Provider
      value={{
        isOpen,
        preselectedCourse,
        openDemoModal,
        closeDemoModal,
      }}
    >
      {children}
      <DemoEnquiryModal isOpen={isOpen} onClose={closeDemoModal} defaultCourse={preselectedCourse} />
    </DemoModalContext.Provider>
  );
}

export function useDemoModal() {
  const context = useContext(DemoModalContext);
  if (!context) {
    throw new Error("useDemoModal must be used within a DemoModalProvider");
  }
  return context;
}
