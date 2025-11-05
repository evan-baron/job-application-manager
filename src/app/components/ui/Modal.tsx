'use client';

import { useEffect } from 'react';
import styles from './modal.module.scss';

interface ModalProps {
	isOpen?: boolean;
	onClose?: () => void;
	title?: string;
	children?: React.ReactNode;
}

export default function Modal({
	isOpen,
	onClose,
	title,
	children,
}: ModalProps) {
	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (onClose && e.key === 'Escape') {
				onClose();
			}
		};

		if (isOpen) {
			document.addEventListener('keydown', handleEscape);
			document.body.style.overflow = 'hidden';
		}

		return () => {
			document.removeEventListener('keydown', handleEscape);
			document.body.style.overflow = 'unset';
		};
	}, [isOpen, onClose]);

	if (!isOpen) return null;

	return (
		<div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
			<div className={styles.modalHeader}>
				<h2>{title}</h2>
				<button
					className={styles.modalClose}
					onClick={onClose}
					aria-label='Close modal'
				>
					×
				</button>
			</div>
			<div className={styles.modalBody}>{children}</div>
		</div>
	);
}
