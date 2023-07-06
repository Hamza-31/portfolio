'use client'
import React, { useEffect, useRef, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
	children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
	const elRef = useRef<HTMLDivElement | null>(null);

	if (!elRef.current) {
		elRef.current = document.createElement('div');
	}

	useEffect(() => {
		const modalRoot = document.getElementById('modal');
		if (modalRoot) {
			modalRoot.appendChild(elRef.current!);
		}

		// When component will unmount
		return () => {
			if (modalRoot) {
				modalRoot.removeChild(elRef.current!);
			}
		};
	}, []);

	return createPortal(<div>{children}</div>, elRef.current!);
};

export default Modal;
