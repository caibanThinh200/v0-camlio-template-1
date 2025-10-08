"use client"

import { create } from "zustand"

interface AppState {
  isMenuOpen: boolean
  setMenuOpen: (open: boolean) => void
  currentSection: string
  setCurrentSection: (section: string) => void
}

export const useStore = create<AppState>((set) => ({
  isMenuOpen: false,
  setMenuOpen: (open) => set({ isMenuOpen: open }),
  currentSection: "home",
  setCurrentSection: (section) => set({ currentSection: section }),
}))
