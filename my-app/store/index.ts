import {create} from "zustand";

type MacBookStore = {
    color: string;
    scale: number;
    setColor: (color: string) => void;
    setScale: (scale: number) => void;
    reset: () => void;
    texture: string;
    setTexture: (texture: string) => void;
};

const useMacBookStore = create<MacBookStore>((set) => ({
    color: '#2e2e2e',
    setColor: (color: string) => set({ color }),
    scale: 0.08,
    setScale: (scale: number) => set({ scale }),
    reset: () => set({ color: '#2e2e2e', scale: 0.08, texture: '/videos/feature-1.mp4' }),
    texture: '/videos/feature-1.mp4',
    setTexture: (texture: string) => set({ texture }),
}));

export default useMacBookStore;
