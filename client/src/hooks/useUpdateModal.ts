import { create } from "zustand";

interface UpdateModalOptions {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useUpdateModal = create<UpdateModalOptions>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));

export default useUpdateModal;
