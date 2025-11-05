import Modal from '../Modal';
import styles from '../modal.module.scss';

interface RegisterModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export default function RegisterModal({ isOpen, onClose }: RegisterModalProps) {
	return (
		<Modal isOpen={isOpen} onClose={onClose} title='Register'>
			<div className={styles.authModal}>
				<p>Registration closed at this time.</p>
			</div>
		</Modal>
	);
}
