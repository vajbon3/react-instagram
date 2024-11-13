import React, { forwardRef } from "react";

export const Modal = forwardRef<HTMLDialogElement, { children: React.ReactNode }>(
    ({ children }, ref) => {
        const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
            if (e.target === e.currentTarget) {
                (ref as React.RefObject<HTMLDialogElement>).current?.close();
            }
        };

        return (
            <dialog ref={ref} onClick={handleBackdropClick} className={"bg-secondary rounded-2xl z-20"}>
                <div className="flex flex-col gap-4 p-4">
                    {children}
                </div>
            </dialog>
        );
    }
);